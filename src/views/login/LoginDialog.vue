<script setup lang="ts">
import {ref} from "vue";
import {useDialogStore} from "@/pinia/modules/login_dialog";
import LoginForm from "@/views/login/LoginForm.vue";

const dialogStore = useDialogStore();
const handleClose = () => {
  console.log("pare close")
  dialogStore.close()
}
</script>

<template>
  <el-dialog
      v-model="dialogStore.getDialog.isVisible"
      title="登陆"
      width="30%"
      :before-close="handleClose"
  >
   <Login-form @callback="handleClose"/>
  </el-dialog>
</template>

<style lang="scss">
.el-dialog{
  width: 600px;
  height: 350px;
}
</style>
