<template>
  <v-card>
    <v-card-text>
      <v-row class="px-2">
        <span>添加一条回复</span>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-form lazy-validation v-model="valid">
      <v-textarea
        class="mx-2 mt-2"
        filled
        counter
        rows="3"
        label="回复"
        v-model="content"
        :rules="contentRule"
      ></v-textarea>
    </v-form>

    <v-divider></v-divider>

    <v-card-actions>
      <v-row class="px-2">
        <v-container>
          <v-btn color="success" small @click="handleComment" :disabled="!valid">回复</v-btn>
        </v-container>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script>
import { addComment } from "@/api/api";
export default {
  data: () => ({
    name: "reply",
    content: "",
    valid: false,
    contentRule: [v => v.length <= 250 || "回复不得超过250字符"]
  }),
  props: {
    post_id: {
      default: 0
    }
  },
  computed: {
    user_id() {
      return JSON.parse(window.localStorage.getItem("user"));
    }
  },
  methods: {
    handleComment() {
      let params = new FormData();
      params.append("post_id", this.post_id);
      params.append("userid", this.user_id);
      params.append("content", this.content);
      addComment(params).then(dataBack => {
        if (dataBack.code == 200) {
          this.content = " ";
          console.log("评论成功");
          this.$emit("custom");
        } else {
          console.log("评论失败");
        }
      });
    }
  }
};
</script>