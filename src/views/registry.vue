<script setup lang="ts">
import {useRouter} from "vue-router";

const router=useRouter()
</script>

<template>
  <el-button type="primary" @click="router.go(-1)">回到主页</el-button>
  注册页
</template>
