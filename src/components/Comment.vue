<template>
  <v-card>
    <v-card-text>
      <v-row class="mx-1">
        <span>{{counter}}</span>
        <v-spacer></v-spacer>
        <v-chip>TEST</v-chip>
      </v-row>
    </v-card-text>
    <v-list>
      <v-list-item></v-list-item>
      <v-divider></v-divider>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    counter: 20,
    comment: {
        user_id: 2313,
        comment_con: 'http 是基于 tcp 的，你最后一段话是说的与 http 程序的连接不断？ tcp 连接即使由一端关闭也不会马上释放，udp 貌似一样的',
        comment_time: new Date().toISOString(),

    }
  }),
  props: {
      
  }
};
</script>