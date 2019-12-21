<template>
  <v-card>
    <v-card-text>
      <router-link to>NCUBBS</router-link>
      <span>&nbsp; >&nbsp;</span>
      <span>登录</span>
    </v-card-text>
    <v-divider></v-divider>
    <v-container class="pb-0">
      <v-form lazy-validation v-model="valid">
        <v-row justify="center">
          <v-col cols="6" class="pt-0">
            <v-text-field
              label="账号"
              dense
              prepend-icon="mdi-account-outline"
              v-model="userInfo.id"
              :rules="idRules"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="6" class="pt-0">
            <v-text-field
              label="密码"
              dense
              prepend-icon="mdi-key-outline"
              v-model="userInfo.password"
              :rules="passwordRule"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-container>

    <v-card-actions>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-btn :disabled="!valid" color="primary" @click="handleLogin">登录</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script>
import { login } from "@/api/api";
export default {
  data: () => ({
    test: false,

    //用户登录信息
    userInfo: {
      id: null,
      password: ""
    },
    //前端校验数据部分
    valid: false,
    idRules: [
      v => !!v || "请输入账号",
      v => (v && /\d{3,10}/.test(v)) || "账号为3-10位的数字"
    ],
    passwordRule: [v => !!v || "密码不能为空"]
  }),
  methods: {
    handleLogin() {
      let params = new FormData();
      params.append("id", this.userInfo.id);
      params.append("password", this.userInfo.password);
      login(params).then(dataBack => {
        let { message, code, data } = dataBack;
        message.length;
        if (code != 400) {
          window.localStorage.removeItem("user");
          window.localStorage.removeItem("admin");
          window.localStorage.setItem("user", data);
          this.$store.commit("login");
          if (code == 201) {
            this.$store.commit("setAdmin");
            window.localStorage.setItem("admin", true);
          }
          this.$router.push({ path: "/main" });
          console.log(this.$store.state.logined + " " + this.$store.state.logined )

        }else {
          console.log('登录失败');
        }

      });
    }
  }
};
</script>