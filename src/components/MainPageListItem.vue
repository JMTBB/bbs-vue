<template>
  <div>
    <v-card>
      <v-toolbar elevation="1" dense>
        <v-row>
          <v-col cols="3">
            <v-text-field placeholder="输入搜索内容" dense v-model="keyword" class="mt-4"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn class="mt-4" small @click="handleSearch">搜索</v-btn>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-list v-for="(post, i) in posts" :key="i" class="pt-0 pb-0">
        <v-list-item>
          <v-list-item-avatar tile size="45" color="light-blue">
            <v-img :src="getAvatar(post.userid)"></v-img>
          </v-list-item-avatar>
          <v-list-item-content class="pt-0 pb-0">
            <v-list-item-title class="subtitle-1 mb-1">
              <v-row class="pl-3 pr-3">
                <span @click="goto(post.postid)">{{post.posttitle}}</span>

                <v-spacer></v-spacer>
                <v-chip label x-small class="mt-1">{{post.viewnumber}}</v-chip>
                <v-icon v-if="post.bonus == 1">mdi-coin-outline</v-icon>
                <v-icon v-if="post.highli == 1">mdi-star-outline</v-icon>
                <v-icon v-if="post.posttop == 1">mdi-format-vertical-align-top</v-icon>
              </v-row>
            </v-list-item-title>

            <v-list-item-subtitle>
              <v-row>
                <v-col cols="3" class="caption pt-0 pb-0" @click="handleUser(post.userid)">
                  来自：
                  <strong>{{post.userid}}</strong>
                </v-col>
                <v-col cols="9" class="caption pt-0 pb-0">
                  发布时间：
                  <strong>{{post.posttime.substr(0,10)}}-{{post.posttime.substr(11,8)}}</strong>
                </v-col>
              </v-row>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import { getPostByTime } from "@/api/api";
import { getUsernameById } from "@/api/api";
import { searchPost } from "@/api/api";
export default {
  data: () => ({
    posts: [],
    nameStore: [],
    searching: false,
    keyword: ""
  }),
  methods: {
    getPosts() {
      getPostByTime()
        .then(dataBack => {
          if (dataBack.code == 200) {
            console.log("获取所有帖子成功");

            this.posts = dataBack.data;
          } else {
            console.log("获取信息失败");
          }
        })
        .then(() => {
          let arr1 = this.posts.filter(item => item.posttop == 1);
          console.log(arr1);
          let arr2 = this.posts.filter(item => item.posttop != 1);
          console.log(arr2);
          this.posts = arr1.concat(arr2);
        });
    },
    getAvatar(id) {
      return (
        this.$store.state.avatarBase +
        this.$md5(id) +
        this.$store.state.avatarTail
      );
    },
    goto(id) {
      this.$router.push({
        path: `/post/${id}`
      });
    },
    getName(id) {
      console.log(id);
      let act;
      let name = getUsernameById(id);
      name.then(name => console.log(name)).then((act = name));
      console.log("-----------" + act);
      return act;
    },
    handleSearch() {
      if (this.keyword.length != 0) {
        this.searching = true;
        searchPost(this.keyword).then(dataBack => {
          if (dataBack.code == 200) {
            console.log("搜索成功");
            this.posts = dataBack.data;
          }
        });
      } else {
        if (this.searching) {
          this.getPosts();
          this.searching = false;
        }
      }
    },
    handleUser(id) {
      this.$router.push({ path: `/info?id=${id}`})
    }
  },
  created() {
    if (window.localStorage.getItem("user") != null) {
      this.$store.commit("login");
      this.$store.state.userid = JSON.parse(
        window.localStorage.getItem("user")
      );
    } else {
      this.$store.commit("logout");
    }
    this.getPosts();
  }
};
</script>