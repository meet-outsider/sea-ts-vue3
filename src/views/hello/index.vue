<script setup lang="ts">
import {ref} from "vue";
import {hello} from "@/api/auth";

const msg = ref<string>("")
const fetch = () => {
  hello().then(res => {
    console.log(res)
    msg.value = <string>res.data
  })
}
</script>

<template>
  <el-button @click="fetch">请求</el-button>
  {{ msg }}
</template>
