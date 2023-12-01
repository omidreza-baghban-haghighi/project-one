<!-- <template>
  <div>
    <section>
      <div  class='bg-gray-200  text-gray-600 shadow-lg fixed top-0 left-0 right-0	z-50	w-{100%} h-[55px] rounded-b flex flex-row align-baseline justify-between '>
        <div class="flex flex-row align-baseline justify-start">
          <a href="#">
            <div class=" text-[35px] ml-[40px]">
              <img src="../assets/logo.png" class="w-[50px]">
            </div>
          </a>
        </div>
        <div id="navbar" class=" flex flex-row align-baseline justify-between text-[20px] mr-[15px]  leading-loose	" v-on:click="navbar()">
          <router-link class="active" >home</router-link>
          <router-link class="m-[8px]  hover:text-rose-600 pr-3 " to="/shop">Shop</router-link>
          <router-link class="m-[8px]  hover:text-rose-600 pr-3 " to="/blog">Blog</router-link>
          <router-link class="m-[8px]  hover:text-rose-600 pr-3 " to="/contact">Contact</router-link>
          <router-link class="m-[8px]  hover:text-rose-600 pr-3 " to="/about">About</router-link>
          <router-link class="m-[8px]  rounded-lg " to="/Addcard"><img src="../assets/cartpng.parspng.com-6.png"
            class="w-[33px]"></router-link>
          </div>
          <div id="mobile" class=" mr-[30px] mt-[15px] hidden items-center"  >
            <font-awesome-icon class="text-[22px]  pl-[20px]" :icon="['fas', 'shopping-cart']"/>        
            <font-awesome-icon id="bar" class="text-[22px] w-[20px] pl-[20px] " :icon="['fas', 'bars']" />
          </div>
        </div>
      </section>   
    </div>
</template>

<script setup>
const bar=document.getElementById('bar')
const nav=document.getElementById('navbar')

 function navbar(){
  if(bar){
    nav.classList.add('active')
  }
return [navbar]
  }
  



</script>

<style scope >
@media (max-width:799px) {
  #navbar{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: -320px;
    height: 100vh;
  width: 300px;
  background-color:white;
  box-shadow: 0 40px 60px rgba(0,0,0,0.1);
  padding: 80px 0px 0px 10px;
  }
  /* #navbar.active{
    right: 0px;
  } */
  #mobile{
    display: flex;
    align-items: center;
  }
  
}
</style> -->


<template>
  <div>
    <section >
      <div
        class='bg-gray-200 text-gray-600 shadow-lg fixed top-0 left-0 right-0 z-50 w-full h-[70px] rounded-b flex flex-row align-baseline justify-between ' >
        <div class="flex flex-row align-baseline justify-start">
          <a href="#">
            <div class="text-[35px] ml-[40px]">
              <img src="../assets/logo.png" class="w-[50px] mt-[15px]" >
            </div>
          </a>
        </div>
        <div id="navbar" class="flex flex-row align-baseline justify-between text-[20px] mr-[30px] mt-[15px] leading-loose ">
          <router-link class=" hover:text-rose-600 pr-3" to="/" >home</router-link>
          <router-link class=" hover:text-rose-600 pr-3" to="/shop">Shop</router-link>
          <router-link class="  hover:text-rose-600 pr-3" to="/blog">Blog</router-link>
          <router-link class="  hover:text-rose-600 pr-3" to="/about">About</router-link>
          <router-link class="  hover:text-rose-600 pr-3" to="/contact">Contact</router-link>
          <router-link class="  rounded-lg" to="/Addcard"><img src="../assets/cartpng.parspng.com-6.png"
              class="w-[33px]" id="lg-bag"></router-link>
          <font-awesome-icon class="hidden text-2xl pl-4" :icon="['fas', 'times']" id="close" @click="close()" />
        </div>
        <div id="mobile" class="mr-[30px] mt-[15px] hidden items-center">
          <font-awesome-icon  class="text-[22px] pl-[20px]" :icon="['fas', 'shopping-cart']"  />
          <font-awesome-icon id="bar" class="	 text-[22px] w-[20px] pl-[20px]" :icon="['fas', 'bars']" @click="navbar()" />


        </div>
      </div>
    </section>
  </div>
</template>

<script setup>


function close() {

  if (Event) {
    document.getElementById('navbar').style.right = '-300px'
  }
}

function navbar() {
  if (Event) {
    document.getElementById('navbar').style.right = '0';
  }

}
</script>

<style scoped>
@media (max-width: 799px) {
  #navbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: -300px;
    height: 100vh;
    width: 300px;
    background-color: white;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
    padding: 80px 0px 0px 10px;
    margin-right: 0;
    transition: 0.5s;

  }

  #navbar.active {
    right: 0;
  }

  #mobile {
    display: flex;
    align-items: center;
  }
  #lg-bag{
  display: none;
  }

  #close {
    display: initial;
    position: absolute;
    top: 30px;
    /* left: 30px; */
    color: gary;
    font-size: 25px;
  }

}
@media (max-width: 477px) {
  #navbar{
    padding: 10px 30px;
  }
  #mobile{
    margin-right: 350px;
    margin-bottom: 10px;
  }
}





</style>
