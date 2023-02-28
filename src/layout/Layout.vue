<template>
  <el-container class="layout-container">
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <Header/>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <Dialog/>
  </el-container>
</template>

<script lang="ts" setup>
import Header from "@/layout/header/Header.vue";
import Dialog from "@/views/login/LoginDialog.vue";


</script>

<style scoped lang="scss">
.layout-container {
  height: 100vh;
  .el-header {
    position: relative;
    background-color: white;
    color: var(--el-text-color-primary);
  }

  .el-main {
    height: 100%;
    background-color: #adb5ee;;
    padding: 0;
  }
}


</style>
