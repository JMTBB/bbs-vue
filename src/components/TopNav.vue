<template>
  <v-app>
    <v-app-bar color="white" dense>
      <v-container>
        <v-row justify="center" no-gutters>
          <v-col md="8" id="topbar">
            <v-row>
              <v-toolbar-title id="logo">NCU BBS</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn text v-for="item in navItems" :key="item">{{item}}</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row>
          <v-col md="8" id="maincontent">
            <v-row>
              <v-col md="9">
                <Editor></Editor>
              </v-col>
              <v-col md="3">
                <AvatarCard></AvatarCard>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <!-- <Editors></Editors> -->
    <v-footer app>
      <span>&copy; 2019-12 JAVAWEB期末</span>
    </v-footer>
  </v-app>
</template>

<script>
// import Editors from "../components/Editor";
import Editor from "../components/testpages/Editor";
import AvatarCard from "../components/AvatarCard";
export default {
  data: () => ({
    navItems: ["首页", "注册", "登录"]
  }),
  components: {
    // Editors,
    Editor,
    AvatarCard
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