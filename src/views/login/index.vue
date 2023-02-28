<script setup lang="ts">



</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span style="font-weight: bolder">登陆</span>
        <el-icon>
          <Close/>
        </el-icon>
      </div>
    </template>
    <div class="body">
      <div class="left">
        sss
      </div>
      <div class="right">
        aaa
      </div>
    </div>
  </el-card>
</template>
<style lang="scss">


.box-card {
  width: 600px;
  height: 350px;

  .card-header {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
    }

    .right {
      display: flex;
      align-items: center;
    }
  }

  .body {
    display: flex;

    .left {

    }

    .right {

    }
  }

}


</style>
