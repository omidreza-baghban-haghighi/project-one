<template>
  <div>
    <Header />
    <!-- <shop/> -->
    
  </div>
  <router-view></router-view>
</template>


<script >
import Sproduct from './components/Sproduct.vue'
import Header from './components/Header.vue'
// import Shop from './components/Shop.vue'
export default {
  components: {
    Header: Header,
    Sproduct:Sproduct
    // Shop:Shop
  },
  setup() {

  }
}



</script>

<style>
*{
  box-sizing: border-box;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
body{
  width: 100%;
  background-color: aliceblue;
  
}
</style>

