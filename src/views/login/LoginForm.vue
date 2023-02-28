<script setup lang="ts">
import {ref} from "vue";
import {useUserStore} from "@/pinia/modules/user";

const username = ref("admin")
const password = ref("123456")
const emit = defineEmits(['callback'])
const login = () => {
  useUserStore().login(username.value, password.value).then(() => {
    let user = useUserStore().getUser
    console.log("用户是否已经登陆？ ", user)
    if (user !== null) {
      emit('callback')
    }
  })
}
</script>

<template>
  <el-card class="box-card">
    <div class="body">
      <div class="left">
        <el-form
            :label-position="'left'"
            label-width="100px"
            style="max-width: 460px"
        >
          <el-form-item label="用户名">
            <el-input v-model="username"/>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password"/>
          </el-form-item>
          <el-form-item label="">
            <el-button type="primary" @click="login">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
      <hr/>
      <div class="right">

      </div>
    </div>
  </el-card>
</template>
<style lang="scss">
.body {
  display: flex;

  .left {

  }

  .right {

  }
}


</style>
