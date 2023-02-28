<script setup lang="ts">
import {useDialogStore} from "@/pinia/modules/login_dialog";
import {useUserStore} from "@/pinia/modules/user";
import Menu from "@/layout/header/menu/Menu.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import {computed} from "vue";

const dialogStore = useDialogStore();
const userStore = useUserStore();
const handleClick = () => {

}
const isLogin = computed(() => {
  return userStore.getUser
})
</script>

<template>
  <div class="header">
    <div class="left">
      <svg-icon name="vite" size="50px"/>
    </div>

    <div class="menu">
      <Menu/>
    </div>

    <div class="right">
      <el-dropdown split-button type="primary" @click="handleClick" v-if="isLogin">
        Dropdown List
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div v-if="!isLogin">
        <el-button type="primary" link size="small" @click="dialogStore.open">登陆</el-button>
        <el-button type="success" link size="small" @click="dialogStore.open">注册</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  flex-flow: row;
}
</style>
