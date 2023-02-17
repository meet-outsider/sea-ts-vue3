<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<template>
  <div>
    <h1>welcome to my index</h1>
    <el-row class="mb-4">
      <el-button type="primary" @click="router.push('/dashboard')">主页</el-button>
      <el-button type="success" @click="router.push('/login')">登陆</el-button>
      <el-button type="success" @click="router.push('/registry')">注册</el-button>
    </el-row>
  </div>
</template>
