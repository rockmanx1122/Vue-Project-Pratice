<template>
  <div class="site-top">
    <div class="container">
      <div class="naviBar">
        <el-menu mode="horizontal" text-color="#b0b0b0">
          <navicell
            v-for="cell in navibarCells"
            :cell="cell"
            :key="cell.title"
          />
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import navicell from "./components/navicell";
import { mapGetters } from "vuex";
export default {
  name: "navibar",
  components: { navicell },

  computed: {
    ...mapGetters(["navibarCells"]),
  },
};
</script>

<style lang="scss" scoped>
.site-top {
  height: 40px;
  background-color: #333 !important;
}

.container {
  width: 1226px;
  margin-left: auto;
  margin-right: auto;
}
.naviBar {
  height: 40px !important;
  background: #333 !important;
  .el-menu {
     display: flex;
     flex-direction: row;
     justify-content: flex-start;
     align-items: center;
    //background-color: #333 !important;
    height: 40px;

    .el-menu-item {
      font-size: 12px;
      height: 40px;
      line-height: 40px !important;
      padding-left: 5px;
      &:hover {
        background-color: transparent !important;
        color: azure !important;
      }
      &:focus {
        background-color: transparent !important;
        color: #b0b0b0;
      }
    }
  }
}

.cartTigger .el-menu-item {
  padding-right: 0px;
  margin-right: 0px;
}
</style>
