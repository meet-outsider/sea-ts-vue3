<script setup lang="ts">
import {useRouter} from "vue-router";
import {useUserStore} from "@/pinia/modules/user";
import message from "@/utils/message";

const router = useRouter()
const userStore = useUserStore()

const printUser = () => {
  console.log(JSON.stringify(userStore.getUser))
}
const show = () => {
  message.success("sss")
}
</script>

<template>
  <el-button type="primary" @click="router.push('/login')">login</el-button>
  <el-button type="primary" @click="printUser">getInfo</el-button>
  <el-button type="primary" @click="useUserStore().logout()">logout</el-button>
  <el-button type="primary" @click="router.push('/hello')">hello</el-button>
  <el-button type="primary" @click="show">error</el-button>
  {{ userStore.getUser.username }}<br>
  {{ userStore.getUser.routes }}<br>

  dashboard
</template>
