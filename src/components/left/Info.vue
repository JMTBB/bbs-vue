<template>
  <v-card>
    <v-card-text>
      <router-link to>NCUBBS</router-link>
      <span>&nbsp; >&nbsp;</span>
      <span>个人信息</span>
    </v-card-text>
    <v-divider></v-divider>
    <v-container class="pb-0">
      <v-row justify="center">
        <v-avatar color="indigo" tile size="80">
          <v-img :src="avatarUrl"></v-img>
        </v-avatar>
      </v-row>
      <v-row justify="center">
        <span class="title my-2">{{info.username}}</span>
      </v-row>
      <v-row justify="center">
        <span class="subtitle">邮箱：{{info.useremail}}</span>
      </v-row>

      <v-divider class="px-4 my-4"></v-divider>
      <v-row justify="center">
        <table>
          <tr>
            <td>
              <v-icon>mdi-cellphone</v-icon>联系方式：
            </td>
            <td>{{info.userphone}}</td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-alien-outline</v-icon>工作性质：
            </td>
            <td>{{info.useroccu}}</td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-map-marker</v-icon>工作地点：
            </td>
            <td>{{info.userorg}}</td>
          </tr>
        </table>
      </v-row>

      <!-- <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="联系方式" v-model="info.userphone" dense prepend-icon="mdi-cellphone"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="工作性质" v-model="info.useroccu" dense prepend-icon="mdi-alien-outline"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="工作地点" v-model="info.userorg" dense prepend-icon="mdi-map-marker"></v-text-field>
        </v-col>
      </v-row>-->
    </v-container>

    <v-card-actions>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-row class="px-4" justify="center">
            <v-btn color="primary" @click="goHome">返回主界面</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { getUser } from "@/api/api";
import { updateUser } from "@/api/api";
export default {
  data: () => ({
    info: {
      userid: null,
      username: "",
      userphone: null,
      useroccu: null,
      userorg: null,
      useradmin: null,
      userpoint: null,
      useremail: ""
    }
  }),
  computed: {
    avatarUrl() {
      return (
        this.$store.state.avatarBase +
        this.$md5(this.userId) +
        this.$store.state.avatarTail
      );
    },
    userId() {
      return parseInt(this.$route.query.id);
    }
  },
  methods: {
    goHome: function() {
      this.$router.push({ path: "/main" });
    },
    getInfo: function() {
      getUser(this.userId).then(dataBack => {
        this.info = dataBack.data;
      });
    },
    update: function() {
      updateUser(this.userId, this.info).then(dataBack => {
        console.log(dataBack.message);
      });
    },
    logout: function() {
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("admin");
      this.$router.push({ path: "/main" });
    }
  },
  mounted() {
    this.getInfo();
  }
};
</script>