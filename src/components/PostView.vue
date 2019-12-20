<template>
  <v-card>
    <v-card-text class="py-2">
      <v-row align="center" class="ml-1">
        <router-link to>NCUBBS</router-link>
        <span>&nbsp; > &nbsp;</span>
        <span>Post</span>
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i" dense>
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-title class="headline">{{post.title}}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="3" class="caption pt-0 pb-0">
          来自：
          <strong>{{post.author}}</strong>
        </v-col>
        <v-col cols="9" class="caption pt-0 pb-0">
          发帖时间：
          <strong>{{post.time}}</strong>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text class="subtitle-1">{{post.content}}</v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    post: {
      title: "近年来 golang 在国内真的越来越火,请问软测人员有必要学 golang 吗?",
      //content: `哪里火?\n有 php 好?有 java 多?有 rust 狠?有还是大学教材有 go?TIOBE 排行榜都被 Ruby 甩了好几名～\n只是在部分人群的心里比较香...\n我也有在看.`,
      author: "这里是作者名啊啊",
      time: new Date().toISOString(),
      content: `两个 golang 程序，一个实现通用的功能，接口是 udp server ；\n另一个根据业务处理数据，并提供 http 接口；\n另外一个 shell 脚本，用 curl 定时调用 http 接口，间接调用了 udp 接口。\n结果 netstat 发现与 udp 的连接越来越多，偶尔会减一个，总体一直在增长；\nnetstat 发现进程 id 是提供 http 接口的那个程序，我使用的是短连接，net.Dial 后，就 defer conn.Close()，按理说肯定能关闭，事实也是并非连接数量不减小，但减小速度太慢了。`,
      test: ""
    },
    items: ["编辑", "删除", "置顶", "加精"]
  })
};
</script>

