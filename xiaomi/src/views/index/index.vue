<template>
  <div>
      <div>
         <navibar />
      </div>
      <div>
          <banner />
      </div>
  </div>
</template>

<script>
import Banner from './components/banner/index.vue'
import Navibar from '@/views/navibar/index.vue'
export default {
name:'index',
components:{Banner,Navibar}
}
</script>

<style>

</style>