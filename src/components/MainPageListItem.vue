<template>
  <div>
    <v-card>
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
                <v-icon v-if="post.bonus == 1">mdi-coin-outline</v-icon>
                <v-icon v-if="post.highli == 1">mdi-star-outline</v-icon>
                <v-icon v-if="post.posttop == 1">mdi-format-vertical-align-top</v-icon>
              </v-row>
            </v-list-item-title>

            <v-list-item-subtitle>
              <v-row>
                <v-col cols="3" class="caption pt-0 pb-0">
                  来自：
                  <strong>{{getName(post.userid)}}</strong>
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
import {getUsernameById} from '@/api/api'
export default {
  data: () => ({
    posts: [],
    nameStore: [],
  }),
  methods: {
    getPosts() {
      getPostByTime().then(dataBack => {
        if (dataBack.code == 200) {
          console.log("获取所有帖子成功");

          this.posts = dataBack.data;
        } else {
          console.log("获取信息失败");
        }
      });
    },
    getAvatar(id) {
      return this.$store.state.avatarBase +
        this.$md5(id) +
        this.$store.state.avatarTail;
    },
    goto(id) {
      this.$router.push({
        path: `/post/${id}`
      })
    },
    getName(id) {
      console.log(id);
      let act;
      let name = getUsernameById(id);
      name.then(name => console.log(name)).then(act = name);
      console.log('-----------' + act)
      return act;
    }
  },
  created() {
    if (window.localStorage.getItem("user") != null) {
      this.$store.commit("login");
      this.$store.state.userid = JSON.parse(window.localStorage.getItem("user"));
    } else {
      this.$store.commit("logout");
    }
    this.getPosts();
  }
};
</script>