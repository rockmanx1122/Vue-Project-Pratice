<template>
  <el-link :href="cell.href">
    <naviitem :title="123" />
  </el-link>
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

<style>
</style>