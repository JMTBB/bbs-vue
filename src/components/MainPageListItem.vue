<template>
  <div>
    <v-card>
      <v-list v-for="(post, i) in postData" :key="i" class="pt-0 pb-0">
        <v-list-item>
          <v-list-item-avatar size="45" color="light-blue">
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-list-item-avatar>
          <v-list-item-content class="pt-0 pb-0">
            <v-list-item-title class="subtitle-1 mb-1">
              <v-row class="pl-3 pr-3">
                <router-link to="post">{{post.title}}</router-link>
                
                <v-spacer></v-spacer>
                <v-icon color="yellow">mdi-star-outline</v-icon>
                <v-icon color="green">mdi-format-vertical-align-top</v-icon>
              </v-row>
            </v-list-item-title>

            <v-list-item-subtitle>
              <v-row>
                <v-col cols="3" class="caption pt-0 pb-0">
                  来自：
                  <strong>{{post.author}}</strong>
                </v-col>
                <v-col cols="9" class="caption pt-0 pb-0">
                  最后回复来自：
                  <strong>{{post.commentName}}</strong>
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
export default {
  data: () => ({
    postData: [
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      },
      {
        title: "测试标题啊啊啊啊啊啊啊a有点难写",
        author: "发表者用户名",
        lastCommentTime: new Date(),
        commentName: "回复者用户名"
      }
    ]
  })
};
</script>