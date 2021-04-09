<template>
  <div class="site-banner">
    <div class="container">
      <div class="banner">
        <el-carousel>
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
};
</script>

<style lang='scss'>
.site-banner {
  height: 460px;
}
.container {
  width: 1226px;
  margin-left: auto !important;
  margin-right: auto !important;
}
.banner {
  height: 460px !important;
  .el-carousel {
    display: flex;
    flex-direction: column;

    height: 460px;
    background: gray;
    .el-carousel__item {
      text-align: center;
      line-height: 50px;
      color: red;
    }
    .el-carousel__arrow{
        top: 70%;
    }
    .el-carousel__indicators{
      &.el-carousel__indicators--horizontal {
        left: 80%;
      }
    }
  }
}
</style>