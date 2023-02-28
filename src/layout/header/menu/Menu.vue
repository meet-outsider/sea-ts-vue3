<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from "vue-router";

const activePath = ref("/")
const router = useRouter()
const menuData = ref([
  {
    title: '首页',
    path: '/'
  },
  {
    title: 'hello',
    path: '/hello'
  },
  {
    title: 'menu',
    path: '/menu',
    children: [
      {
        title: 'sub1',
        path: '/sub1'
      },
      {
        title: 'sub2',
        path: '/sub2'
      }
    ]
  }
])

const handleSelect = (key: string, keyPath: string[]) => {
  // console.log('key', key, 'path ', keyPath)
  router.push(key)

}


</script>

<template>
  <el-menu
      :default-active="activePath"
      mode="horizontal"
      @select="handleSelect"
  >
    <template v-for="item in menuData">
      <el-sub-menu v-if="item.children" :index="item.path">
        <template #title>{{ item.title }}</template>
        <el-menu-item v-for="subItem in item.children" :key="subItem.path" >{{ subItem.title }}</el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :key="item.path" :index="item.path">{{ item.title }}</el-menu-item>
    </template>
  </el-menu>
</template>



