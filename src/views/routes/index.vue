<script setup lang="ts">
import {onMounted, onUpdated} from "vue";
import {useRouter} from "vue-router";
const router=useRouter()

onMounted(() => {
  console.log("onMounted event")
})
onUpdated(() => {
  console.log("onUpdated event")
})
</script>

<template>
  <div class="app-container">
    <el-button class="link" type="primary" size="large" round>点击</el-button>
    <el-button class="link" type="primary" size="large" round
               style=" background: linear-gradient(to bottom right, #00c4ff, pink);" @click="router.push('/')">点击
    </el-button>
    <el-button class="link" type="primary" size="large" round
               style=" background: linear-gradient(to bottom right, blue, pink);">点击
    </el-button>
    <el-button class="link" type="primary" size="large" round
               style=" background: linear-gradient(to bottom right, #00c4ff, pink);">点击
    </el-button>
    <div class="box">
      <el-button class="link" type="primary" size="large" round
                 style=" background: linear-gradient(to bottom right, #00c4ff, pink);">点击
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/wave.scss";
@mixin link {
  width: 500px;
  height: 60px;
  background-size: 200%;
  background: linear-gradient(to bottom right, red,#00c4ff, pink);
  transition: background-position .5s;
  margin:20px auto;
}

.link {
  @include link
}

.link:hover {
  background-position: 100% 0;
}

.app-container {
  display: flex;
  flex-flow: column;
}

</style>
