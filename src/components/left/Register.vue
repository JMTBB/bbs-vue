<template>
  <v-card>
    <v-card-text>
      <router-link to>NCUBBS</router-link>
      <span>&nbsp; >&nbsp;</span>
      <span>注册</span>
    </v-card-text>
    <v-divider></v-divider>
    <v-container class="pb-0">
      <v-form lazy-validation v-model="valid">
        <v-row justify="center">
          <v-col cols="6" class="pt-0">
            <v-text-field label="账号"
              :rules="accountRules"
             v-model="info.userid" dense prepend-icon="mdi-account-outline"></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6" class="pt-0">
            <v-text-field
              label="用户名"
              v-model="info.username"
              dense
              prepend-icon="mdi-account-outline"
              :rules="nameRules"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6" class="pt-0">
            <v-text-field
              label="邮箱"
              v-model="info.useremail"
              dense
              prepend-icon="mdi-email-outline"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6" class="pt-0">
            <v-text-field
              label="密码"
              type="password"
              v-model="info.userpassword"
              dense
              prepend-icon="mdi-key-outline"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6" class="pt-0">
            <v-text-field label="确认密码" type="password" :rules="passwordConfirmRules" v-model="repwd" dense prepend-icon="mdi-key-outline"></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
    <v-card-actions>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-btn color="success" @click="handleRegister" :disabled="!valid">注册</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script>
import { register } from "@/api/api";
export default {
  data: () => ({
    info: {
      userid: null,
      userpassword: "",
      username: "",
      userphone: null,
      useroccu: null,
      userorg: null,
      useradmin: null,
      userpoint: null,
      useremail: ""
    },
    repwd: '',
    valid: false,
    nameRules: [v => !!v || "请输入用户名"],
    accountRules: [
      v => !!v || "请输入账号",
      v => (v && /\d{3,10}/.test(v)) || "账号为3-10位的数字"
    ],
    passwordRules: [v => !!v || "请输入密码"],
  }),
  methods: {
    handleRegister: function() {
      register(this.info).then(dataBack => {
        console.log(dataBack.message);
        if (dataBack.code == 200) {
          this.$router.push({ path: "/login" });
        }
      });
    }
  },
  computed: {
    passwordConfirmRules() {
      return [
        () =>
          this.info.userpassword === this.repwd ||
          "输入的两次密码不一致"
      ];
    }
  }
};
</script>