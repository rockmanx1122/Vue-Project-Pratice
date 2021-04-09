<template>
  <el-menu-item>
    <naviitem :title="cell.title" />
  </el-menu-item>
</template>

<script>
import naviitem from "./naviitem.vue";
export default {
  name: "navibarcell",
  components: { naviitem },
  props: {
    cell: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
