<template>
  <v-card>
    <v-card-text>
      <router-link to>NCUBBS</router-link>
      <span>&nbsp; >&nbsp;</span>
      <span>设置</span>
    </v-card-text>
    <v-divider></v-divider>
    <v-container class="pb-0">
      <v-row justify="center">
        <v-avatar color="indigo" size="80">
          <v-icon dark>mdi-account-circle-outline</v-icon>
        </v-avatar>
      </v-row>
      <v-row justify="center">
        <span class="title my-2">用户名</span>
      </v-row>
      <v-row justify="center">
        <span class="subtitle">邮箱：</span>
      </v-row>

        <v-divider class="px-4 my-4"></v-divider>
      

      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="联系方式" dense prepend-icon="mdi-cellphone"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="工作性质" dense prepend-icon="mdi-alien-outline"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-text-field label="工作地点" dense prepend-icon="mdi-map-marker"></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-card-actions>
      <v-row justify="center">
        <v-col cols="6" class="pt-0">
          <v-btn color="warning">保存</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>