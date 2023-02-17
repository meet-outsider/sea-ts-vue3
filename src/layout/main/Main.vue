<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted} from "vue";

const router=useRouter()
onMounted(()=>{
  router.push('/')
})
</script>

<template>
  <el-scrollbar>
    <router-view/>
  </el-scrollbar>
</template>
