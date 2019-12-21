<template>
  <v-card>
    <v-card-text>
      <v-row class="px-2">
        <span>添加一条回复</span>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-textarea
      class="mx-2 mt-2"
      filled
      counter
      rows="3"
      label="回复"
      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
    ></v-textarea>
    <v-divider></v-divider>
    <v-card-action>
      <v-row class="px-2">
        <v-container>
          <v-btn color="success" small>回复</v-btn>
        </v-container>
      </v-row>
    </v-card-action>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    name: "reply"
  })
};
</script>