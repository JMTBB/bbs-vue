<template>
  <v-app>
    <v-toolbar color="white" dense max-height="48px">
      <v-row justify="center" no-gutters>
        <v-col md="6" sm="11" id="topbar">
          <v-row align="center">
            <v-toolbar-title id="logo">
              <img class="mt-2" width="100px" alt="NCU BBS" src="../assets/ncuhub.png" />
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn
              text
              v-for="item in curItem"
              :key="item.label"
              @click="goto(item.link)"
            >{{item.label}}</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-toolbar>
    <v-content>
      <v-row>
        <v-col md="6" sm="11" id="maincontent">
          <v-row>
            <v-col md="9" sm="8">
              <router-view></router-view>
            </v-col>
            <v-col md="3" sm="4">
              <AvatarCard :islogin="islogin" :key="islogin"></AvatarCard>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-content>
    <!-- <Editors></Editors> -->
    <v-footer app>
      <span>&copy; 2019-12 JAVAWEB期末</span>
    </v-footer>
  </v-app>
</template>

<script>
// import Editors from "../components/Editor";
import AvatarCard from "../components/AvatarCard";

export default {
  data: () => ({
    navItem: [
      { label: "首页", link: "/main" },
      { label: "注册", link: "/register" },
      { label: "登录", link: "/login" }
    ],
    loginedItem: [
      { label: "首页", link: "/main" },
      { label: "设置", link: "/setting" }
    ],
    logined: false,
 
    
  }),
  methods: {
    goto(target) {
      this.$router.push({ path: target }).catch(err => {
        err.length;
      });
    },
    
  },
  components: {
    AvatarCard
  },
  computed: {
    curItem() {
      if (this.$store.state.logined) {
        return this.loginedItem;
      } else {
        return this.navItem;
      }
    },
    islogin() {
      return this.$store.state.logined;
    }
  },
  created() {
    if (window.localStorage.getItem("user") != null) {
      this.$store.commit("login");
    } else {
      this.$store.commit("logout");
    }
  }
};
</script>

<style scoped>
#logo {
  font-weight: bold;
  font-size: 30px;
  font-style: italic;
  color: #607d8b;
}
#topbar,
#maincontent {
  margin: auto;
}
</style>