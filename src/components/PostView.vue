<template>
  <div>
    <v-card>
      <v-card-text class="py-2">
        <v-row align="center" class="ml-1">
          <router-link to>NCUBBS</router-link>
          <span>&nbsp; > &nbsp;</span>
          <span>Post</span>
          <v-spacer></v-spacer>
          <v-menu bottom left v-if="needMenu">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in menus" :key="i" dense @click="handleMenu(i,item)">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-title class="headline">{{post.posttitle}}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="3" class="caption pt-0 pb-0">
            来自：
            <strong>{{post.userid}}</strong>
          </v-col>
          <v-col cols="9" class="caption pt-0 pb-0">
            发帖时间：
            <strong>{{post.posttime.substr(0,10)}}-{{post.posttime.substr(11,8)}}</strong>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="subtitle-1">{{post.postcontent}}</v-card-text>
    </v-card>

    <v-container>
      <v-divider></v-divider>
    </v-container>
    <RepList :postid="this.$route.params.id" :needMark="needMark" :key="key"></RepList>
    <v-container>
      <v-divider></v-divider>
    </v-container>
    <Reply v-if="logined" :post_id="this.$route.params.id"></Reply>
  </div>
</template>
<script>
import Reply from "../components/left/Reply";
import RepList from "../components/left/RepList";
import { getPostById } from "@/api/api";
export default {
  data: () => ({
    //假数据
    actid: 0,
    post: {
      postid: null,
      userid: 0,
      posttitle: "",
      postcontent: "",
      posttop: 0,
      highli: 0,
      posttime: "",
      viewnumber: 0,
      bonus: 0,
      postpoint: 0,
      issolved: 0
    },
    toped: false,
    highlighted: false,

    //正式数据
    items: ["编辑", "删除"],
    isAdmin: false,

    curEdit: null,
    // needMark: false,

    key: 0
  }),
  methods: {
    handleMenu(index, item) {
      this.curEdit = item;
      switch (index) {
        case 0:
          //编辑
          console.log("edit");
          break;
        case 1:
          //删除
          console.log("delete");
          break;
        case 2:
          //置顶及取消
          console.log("top");
          break;
        case 3:
          //加精及取消
          console.log("highlight");
          break;

        default:
          break;
      }
    },
    getPostInfo() {
      getPostById(parseInt(this.$route.params.id)).then(dataBack => {
        if (dataBack.code == 200) {
          console.log("详情获取成功");
          console.log(dataBack.data);
          this.post = dataBack.data;
        } else {
          console.log("详情获取失败");
        }
      });
    }
  },

  components: {
    Reply,
    RepList
  },
  computed: {
    adminmenus() {
      if (this.isAdmin) {
        let top = this.toped ? "取消置顶" : "置顶";
        let high = this.highlighted ? "取消加精" : "加精";
        let result = new Array();
        result[0] = top;
        result[1] = high;
        return result;
      } else {
        return [];
      }
    },
    menus() {
      return this.items.concat(this.adminmenus);
    },
    logined() {
      if (window.localStorage.getItem("user") != null) {
        return true;
      } else return false;
    },
    needMark() {

      let temp =
        this.logined &&
        this.post.bonus == 1 &&
        this.post.userid == JSON.parse(window.localStorage.getItem("user")) &&
        this.post.issolved == 0;
      return temp;
    },
    needMenu() {
      return (
        (this.logined &&
          this.post.userid ==
            JSON.parse(window.localStorage.getItem("user"))) ||
        this.isAdmin
      );
    }
  },
  created() {
    this.getPostInfo();
    this.isAdmin = JSON.parse(window.localStorage.getItem("admin"));
    console.log(this.isAdmin + "视图页面");
  },
  beforeUpdate() {
    this.isAdmin = JSON.parse(window.localStorage.getItem("admin"));
  },
  watch: {
    needMark: {
      immediate: true,
      handler: function() {
        console.log("监听-----" + this.needMark);
        if (this.needMark) {
          this.$store.state.needIt = true;
          console.log("done");
        }
      }
    }
  }
};
</script>

