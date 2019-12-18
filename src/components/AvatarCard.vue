<template>
  <v-card>
    <v-card-title>
      <v-row align="center">
        <v-col md="3">
          <v-avatar color="indigo">
            <v-icon dark>mdi-account-circle-outline</v-icon>
          </v-avatar>
        </v-col>
        <v-col md="9">用户名</v-col>
      </v-row>
    </v-card-title>

    <v-divider></v-divider>
    <v-card-text>
      <v-icon>mdi-pencil-outline</v-icon>发布新帖子
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text>
      <v-row class="ml-2 mr-2">
        <a href>0条未读消息</a>
        <v-spacer></v-spacer>
        <v-icon>mdi-coin-outline</v-icon>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    name: "avatarcard"
  })
};
</script>