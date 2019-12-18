<template>
  <div>
    <v-app-bar color="primary" dense>
      <v-container justify="center">
        <v-row justify="center">
          <v-col md="2"></v-col>
          <v-col md="2">
            <v-toolbar-title id="logo">NCU BBS</v-toolbar-title>
          </v-col>
          <v-spacer></v-spacer>
          <v-col md="2" align="center">
            <v-btn text v-for="item in navItems" :key="item">{{item}}</v-btn>
          </v-col>
          <v-col md="2"></v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <Editors></Editors>
  </div>
</template>

<script>
import Editors from '../components/Editor'
export default {
  data:() => ({
    navItems: [
      "首页",
      "注册",
      "登录"
    ]
  }),
  components: {
    Editors
  }
}
</script>

<style scoped>
#logo {
  font-weight: bold;
  font-size: 30px;
  font-style: italic;
  color: #607d8b;
}
</style>