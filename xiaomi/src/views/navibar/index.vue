<template>
  <div>
  </div>
</template>

<script>
import navicell from './components/navicell.vue';
import {mapGetters} from 'vuex'
export default {
    name:'navibar',
  components: { navicell },

  computed:{
      ...mapGetters(['navibarCells'])
  }
}
</script>

<style>
</style>