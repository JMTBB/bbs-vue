<template>
  <v-card>
    <v-card-text>{{comments.length}}回复</v-card-text>
    <v-divider></v-divider>
    <v-list v-for="(comment, i) in comments" :key="i">
      <v-list-item>
        <v-row>
          <v-col cols="1">
            <v-avatar tile>
              <v-img :src="getAvatar(comment.id.userid)"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="10">
            <v-list-item-subtitle>{{comment.id.userid}}-{{comment.id.time.substr(0,10)}}-{{comment.id.time.substr(11,8)}}</v-list-item-subtitle>
            <p class="pt-2">{{comment.content}}</p>
          </v-col>

          <v-col cols="1" class="pt-0">
            <v-menu v-if="needMark">
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item>
                  <v-list-item-title>采纳</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </v-card>
</template>

<script>
import { getCommentById } from "@/api/api";
export default {
  data: () => ({
    comments: []
  }),
  props: {
    postid: {
      default: 0
    },
    needMark: null,
  },
  methods: {
    getComments() {
      getCommentById(parseInt(this.postid)).then(data => {
        if (data.code == 200) {
          console.log("获取评论成功");
          console.log(data.data);
          this.comments = data.data;
        } else {
          console.log("获取失败");
        }
      });
    },
    getAvatar(id) {
      return (
        this.$store.state.avatarBase +
        this.$md5(id) +
        this.$store.state.avatarTail
      );
    }
  },
  created() {
    console.log(this.postid);
    console.log(this.needMark + '需要菜单');
    this.getComments();
  },
  watch:{
    needMark:{
      immediate:true,
      handler:function(){
        console.log("监听" + this.needMark)
     }
    }
  }
};
</script>