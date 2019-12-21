<template>
  <v-card>
    <v-card-text>n回复</v-card-text>
    <v-divider></v-divider>
    <v-list v-for="(mo, i) in mock" :key="i">
      <v-list-item>
        <v-row>
          <v-col cols="1">
            <v-avatar>
              <v-icon size="50">mdi-account-circle-outline</v-icon>
            </v-avatar>
          </v-col>
          <v-col cols="10">
            <v-list-item-subtitle>{{mo.name}}-{{mo.time}}</v-list-item-subtitle>
            <p class="pt-2">{{mo.content}}</p>
          </v-col>

          <v-col cols="1" class="pt-0">
            <v-menu>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item>
                  <v-list-item-title>采纳</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>

        <!-- <v-list-item-avatar color="light-blue mt-0">
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-list-item-avatar>
        <v-list-item-content class="pt-0">
          <v-list-item-subtitle>{{mo.name}}-{{mo.time}}</v-list-item-subtitle>
          <p class="pt-2">{{mo.content}}</p>
        </v-list-item-content>-->
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    mock: [
      {
        name: "回复者用户名",
        content:
          "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      },
      {
        name: "回复者用户名",
        content: "回复的内容aaaaaaaaaaaaaaaaaaaaaaahkjdfjfjds回复内容",
        time: "回复时间"
      }
    ]
  })
};
</script>