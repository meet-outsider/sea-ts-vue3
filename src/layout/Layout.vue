<template>
  <el-container class="layout-container" style="height: 500px">
    <el-aside width="200px">
      <Aside/>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <Header/>
      </el-header>

      <el-main>
        <Main/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from "@/layout/aside/Aside.vue";
import Header from "@/layout/header/Header.vue";
import Main from "@/layout/main/Main.vue";


</script>

<style scoped>
.layout-container .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container .el-menu {
  border-right: none;
}

.layout-container .el-main {
  padding: 0;
}

.layout-container .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
