<template>
  <v-card>
    <v-card-text>
      <router-link to>NCUBBS</router-link>
      <span>&nbsp; >&nbsp;</span>
      <span>注册</span>
    </v-card-text>
    <v-divider></v-divider>
    <v-container class="pb-0">
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="账号" v-model="info.userid" dense prepend-icon="mdi-account-outline"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field
            label="用户名"
            v-model="info.username"
            dense
            prepend-icon="mdi-account-outline"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="邮箱" v-model="info.useremail" dense prepend-icon="mdi-email-outline"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="密码" v-model="info.userpassword" dense prepend-icon="mdi-key-outline"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="确认密码" dense prepend-icon="mdi-key-outline"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-btn color="success" @click="handleRegister">注册</v-btn>
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
    }
  }),
  methods: {
    handleRegister: function() {
      register(this.info).then(dataBack => {
        console.log(dataBack.message);
      });
    }
  }
};
</script>