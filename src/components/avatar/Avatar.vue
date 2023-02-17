<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  width: string,
  enablePreview: Boolean;
}>()
const avatar_url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const preview = avatar_url
const img_style = computed(() => {
  const width = props.width
  return width == null ? {
    width: '50px',
    height: '50px'
  } : {
    width: width,
    height: width
  }
})
</script>

<template>
  <div class="demo-image__preview">
    <el-image
        style="border-radius: 50%"
        :style="img_style"
        :src="avatar_url"
        :zoom-rate="1.2"
        :preview-src-list="props.enablePreview?[preview]:[]"
        :initial-index="4"
        fit="cover"
    />
  </div>
</template>
