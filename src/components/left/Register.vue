<template>
  <v-card>
    <v-card-text>
      <router-link to>NCUBBS</router-link>
      <span>&nbsp; >&nbsp;</span>
      <span>注册</span>
    </v-card-text>
    <v-divider></v-divider>
    <v-container  class="pb-0">
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="用户名" dense prepend-icon="mdi-account-outline"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="邮箱" dense prepend-icon="mdi-email-outline"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="密码" dense prepend-icon="mdi-key-outline"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="确认密码" dense prepend-icon="mdi-key-outline"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-row justify="center" >
        <v-col cols="6"  class="pt-0">
          <v-btn color="success">注册</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>