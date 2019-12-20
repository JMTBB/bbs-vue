<template>
  <v-app>
    <v-toolbar color="white" dense max-height="48px">
      <v-row justify="center" no-gutters>
        <v-col md="6" id="topbar">
          <v-row>
            <v-toolbar-title id="logo">NCU BBS</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text v-for="item in navItem" :key="item.label" @click="goto(item.link)">{{item.label}}</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-toolbar>
    <v-content>
      <v-row>
        <v-col md="6" sm="11" id="maincontent">
          <v-row>
            <v-col md="9" sm="8">
              <router-view>

              </router-view>

            </v-col>
            <v-col md="3" sm="4">
              
              <AvatarCard :islogin="true"></AvatarCard>
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
    navItems: ["首页", "注册", "登录"],
    navItem: [
      { label: '首页', link: '/main' },
      { label: '注册', link: '/register'},
      { label: '登录', link: '/login' },
    ]
  }),
  methods: {
    goto(target) {
      this.$router.push({path: target}).catch(err => { err.length })
    }
  },
  components: {
    AvatarCard,
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