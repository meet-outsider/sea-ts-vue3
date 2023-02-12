<script setup lang="ts">

const avatar_url='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const preview='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
</script>

<template>
  <div class="demo-image__preview">
    <el-image
        style="width: 100px; height: 100px; border-radius: 50%"
        :src="avatar_url"
        :zoom-rate="1.2"
        :preview-src-list="[preview]"
        :initial-index="4"
        fit="cover"
    />
  </div>
</template>
