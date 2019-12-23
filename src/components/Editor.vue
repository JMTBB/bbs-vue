<template>
  <v-card>
    <v-toolbar flat color="blue-grey" dark>
      <v-toolbar-title>发布新帖子</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field filled label="标题" v-model="post_title" value="My new post"></v-text-field>

      <v-textarea
        v-model="post_content"
        filled
        counter
        rows="19"
        label="内容"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
      ></v-textarea>

      <v-divider class="my-2"></v-divider>
      <v-row class="mx-1" @click="a">
        <span class="mt-5 mr-2">话题:</span>
        <v-checkbox v-model="tagselected" label="问与答" value="0"></v-checkbox>
        <v-checkbox v-model="tagselected" label="程序员" value="1"></v-checkbox>
        <v-checkbox v-model="tagselected" label="分享发现" value="2"></v-checkbox>
        <v-checkbox v-model="tagselected" label="分享创造" value="3"></v-checkbox>
      </v-row>

      <v-divider class="my-2"></v-divider>

      <v-row class="mx-1">
        <v-switch label="设置积分奖励" v-model="havebonus"></v-switch>
        <v-slider
          v-model="post_point"
          class="align-center px-2"
          :max="max"
          min="0"
          hide-details
          v-if="havebonus"
        >
          <template v-slot:append>
            <v-text-field
              v-model="post_point"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field>
          </template>
        </v-slider>
      </v-row>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="handlePost">{{this.$route.query.id != null ? `更新`:`发布`}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { addPost } from "@/api/api";
import { addTag } from "@/api/api";
import { getTagById } from "@/api/api";
import { getPostById } from "@/api/api";
import { updatePost } from "@/api/api";

export default {
  data: () => ({
    name: "editor",

    //帖子内容
    havebonus: false,
    bonus: 0,
    max: 50,
    post_content: "",
    post_point: 0,
    post_title: "",

    tags: ["问与答", "程序员", "分享发现", "分享创造"],
    tagselected: [],
    postdata: null,
    postid: null
  }),
  methods: {
    //测试代码
    a() {
      console.log(this.tagselected);
    },
    //正式
    handlePost() {
      if (this.$route.query.id != null) {
       this.update();
      } else {
        let params = new FormData();
        params.append("post_content", this.post_content);
        params.append("post_title", this.post_title);
        params.append("post_point", this.post_point);
        params.append("user_id", this.user_id);
        params.append("have_bonus", this.havebonus ? 1 : 0);
        addPost(params)
          .then(dataBack => {
            if (dataBack.code == 200) {
              console.log(dataBack.data);
              this.postdata = dataBack.data;
              this.$router.push({ path: "/main" });
            } else {
              console.log("失败");
            }
          })
          .then(() => {
            if (this.tagselected != 0) {
              for (let a in this.tagselected) {
                let params = new FormData();
                console.log(this.postdata);
                params.append("postid", this.postdata.postid);
                params.append("tagid", a);
                addTag(params).then(data => {
                  console.log(data.code);
                });
              }
            }
          });
      }
    },
    getPost() {
      getPostById(parseInt(this.$route.query.id)).then(dataBack => {
        if (dataBack.code == 200) {
          console.log("详情获取成功");
          console.log(dataBack.data);
          this.post_title = dataBack.data.posttitle;
          this.post_content = dataBack.data.postcontent;
          this.havebonus = dataBack.data.bonus;
          this.post_point = dataBack.data.postpoint;
          this.postid = dataBack.data.postid;
        } else {
          console.log("详情获取失败");
        }
      });

      getTagById(parseInt(this.$route.query.id)).then(dataBack => {
        if (dataBack.code == 200) {
          if (dataBack.data.length != 0) {
            for (let tag in dataBack.data) {
              console.log(tag);
              this.tagselected.push(tag);
            }
          }
          console.log("Tag成功");
          console.log(dataBack.data[0].postTagId.tagid);
          this.postTags = dataBack.data;
        } else {
          console.log("Tag获取失败");
        }
      });
    },
    update() {
      let params = new FormData();
      params.append("post_content", this.post_content);
      params.append("post_title", this.post_title);
      params.append("post_id", this.postid);
      updatePost(this.postid,params).then(data => {
        console.log(data.message);
        if(data.code==200) {
          this.$router.push({path: '/main'});
        }
      });
    }
  },
  computed: {
    user_id() {
      return JSON.parse(window.localStorage.getItem("user"));
    },
    test() {
      this.a();
      return this.tagselected;
    }
  },
  props: {
    points: {
      default: 0
    },
    new: {
      type: Boolean,
      default: false
    }
  },
  created() {
    if (this.$route.query.id) {
      this.getPost();
    }
  }
};
</script>