<template>
  <v-card>
    <v-card-title>
      <v-row align="center" v-if="islogin">
        <v-col md="3">
          <v-avatar color="indigo" tile>
            <v-img :src="avatarUrl"></v-img>
          </v-avatar>
        </v-col>
        <v-col md="9">{{name}}</v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12" class="pt-0 pb-0">
          <p class="title font-italic mb-0">NCU BBS</p>
        </v-col>
        <v-col cols="12" class="pt-0 pb-0">
          <p class="mb-0 subtitle-2">分享你的生活</p>
        </v-col>
      </v-row>
    </v-card-title>

    <v-divider></v-divider>
    <v-card-text v-if="islogin" justify="center">
      <v-btn text @click="goto('editor')">
        <v-icon>mdi-pencil-outline</v-icon>发布新帖子
      </v-btn>
    </v-card-text>
    <v-card-text v-else>
      <v-row justify="center">
        <v-btn color="success" @click="goto('/register')">现在注册</v-btn>
      </v-row>
      <v-row justify="center" align="center" class="mt-1">
        <p class="mb-0">已注册用户请</p>
        <router-link to="/login">登录</router-link>
      </v-row>
    </v-card-text>
    <v-divider v-if="islogin"></v-divider>
    <v-card-text v-if="islogin">
      <v-row class="ml-2 mr-2">
        <span>你的金币数为：{{coins}}</span>
        <v-spacer></v-spacer>
        <v-icon>mdi-coin-outline</v-icon>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import { getUser } from "@/api/api";
export default {
  data: () => ({
    name: "",
    user_id: 0,
    coins: 0,
    userId: 0,
  }),
  methods: {
    goto(target) {
      this.$router.push({ path: target }).catch(err => {
        err.length;
      });
    },
    getuserName: function() {
      getUser(this.user_id).then(dataBack => {
        this.name = dataBack.data.username;
        this.coins = dataBack.data.userpoint;
      });
    },

  },
  computed: {
    avatarUrl() {
      return (
        this.$store.state.avatarBase +
        this.$md5(this.user_id) +
        this.$store.state.avatarTail
      );
    },
    // userId() {
    //    return JSON.parse(window.localStorage.getItem("user"));
    // },
  },
  watch: {
    islogin: function() {
      this.user_id = JSON.parse(window.localStorage.getItem("user"));
    }
  },

  props: {
    islogin: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log("安装中....");
    this.user_id = JSON.parse(window.localStorage.getItem("user"));
    this.getuserName();
  }
};
</script>