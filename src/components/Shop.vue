<template>
  <section class="text-black flex flex-col justify-center" id="page-header">
    <div>
      <h2 class="text-[40px] font-bold text-white">#stay home</h2>
      <p class="text-[20px] p-[10px] text-white">Save more with coupons & up to 70% off!</p>
    </div>
  </section>


  <section class="text-black text-center     ">

    <div class="flex justify-between flex-wrap pt-20  product "
    @click="redirectToSproduct">
      <div
        class="w-[23%] relative min-w-250px	py-[10px]  px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md product">
        <img src="../assets/f1.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute  right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>



      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md  product">
        <img src="../assets/f2.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>





      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md   product">
        <img src="../assets/f3.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>






      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md  product">
        <img src="../assets/f4.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>







      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md  product">
        <img src="../assets/f5.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>





      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md  product">
        <img src="../assets/f6.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>





      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md  product">
        <img src="../assets/f7.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>






      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md  product">
        <img src="../assets/f8.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>
    </div>


    <div class="flex justify-between flex-wrap pt-20  product">
      <div
        class="w-[23%] relative min-w-250px	py-[10px]  px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md product">
        <img src="../assets/n1.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute  right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>



      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md  product">
        <img src="../assets/n2.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>





      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md   product">
        <img src="../assets/n3.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>






      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md  product">
        <img src="../assets/n4.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>







      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md  product">
        <img src="../assets/n5.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>





      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md  product">
        <img src="../assets/n6.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>





      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md  product">
        <img src="../assets/n7.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>






      <div
        class="w-[23%] relative min-w-250px	py-[10px] px-[12px] mb-10 border-2 border-gray-300 hover:shadow-2xl rounded-lg mx-[5px] cursor-pointer shadow-md  product">
        <img src="../assets/n8.jpg " class="w-[100%] rounded-lg">
        <div class="text-start py-[10px]">
          <span class="text-gray-400 text-[15px]">adidas</span>
          <h5 class="pt-[7px] text-gray-700 text-[14px]">Cartoon Astronaut T-shirt</h5>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 " />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          </div>
          <h4 class="font-bold pt-[7px] text-teal-600 text-[15px]  ">$88</h4>
        </div>
        <!-- <a href="#"><i class="fas fa-shopping-cart"></i></a> -->
        <a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"
            class="w-[20px]  border-gray-200 absolute ] right-5 bottom-2 border-2 h-[20px] p-[10px] rounded-full leading-8 bg-teal-100 text-teal-700" /></a>
      </div>
    </div>

  </section>



  <section id="pagination" class="text-black text-center ">
    <a class="bg-teal-600 rounded text-white font-semibold py-[15px] px-[20px] mr-[5px]" href="#">1</a>
    <a class="bg-teal-600 rounded text-white font-semibold py-[15px] px-[20px] mr-[5px]" href="#">2</a>
    <a class="bg-teal-600 rounded text-white font-semibold py-[15px] px-[20px] mr-[5px]" href="#">
      <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']"
        class="text-[16 px] text-white  font-semibold"></font-awesome-icon>
    </a>


  </section>



  <section id="bnr6" class="text-black flex justify-around items-center h-[20vh] mt-10">
    <div class="ml-[30px]">
      <h4 class="text-[25px] font-semibold pb-[12px] "> Sign Up Newsletters </h4>
      <P class=" text-gray-500 text-[16px] font-medium "> Get E-mail update about our latest shop and<span
          class="text-[16px] text-yellow-600"> special offers.</span></P>
    </div>

    <div class="flex ml-[25px] mt-[20px]">
      <input type="text" placeholder="Your email address" class="h-[px] w-[500px] p-[15px]  text-[17px] border-2 border-transparent 
rounded-l-lg">
      <button
        class="text-[14px] text-black font-bold cousor-pointer hover:bg-teal-600 hover:text-white rounded-r-lg py-[8px] bg-slate-200 px-[12px]">Sign
        Up</button>
    </div>

  </section>


  <footer class="text-black  flex flex-wrap justify-between  mx-[80px]">
    <div class="flex  flex-col items-start mb-[20px]">
      <img src="../assets/logo.png" class="w-[50px] mb-[30px] m-[20px]">
      <h4 class="text-[20px] pb-[20px]">Contact</h4>
      <P class="text-[13px] mb-[8px]">Address:<strong>562 Wellington road, Street 32, sa francisco</strong></P>
      <P class="text-[13px] mb-[8px]">phone:<strong>+01 2222 365/(+91) 01 2345 6789</strong></P>
      <P class="text-[13px] mb-[8px]">Hours:<strong>10:00 - 18:00, mon -sat</strong></P>

      <div class="flex  flex-col items-start mb-[20px] m-[20px]">
        <h4 class="text-[25px]">Follow us</h4>
        <div class="flex  items-start mb-[20px]">
          <font-awesome-icon :icon="['fab', 'instagram']"
            class="w-[26px]  text-gray-600 pr-[5px] cursor-pointer   hover:text-teal-600" />
          <font-awesome-icon :icon="['fab', 'twitter']"
            class="w-[26px]    text-gray-600 pr-[5px] cursor-pointer   hover:text-teal-600                    " />
          <font-awesome-icon :icon="['fab', 'facebook']"
            class="w-[26px]   text-gray-600 pr-[5px] cursor-pointer   hover:text-teal-600                   " />
          <font-awesome-icon :icon="['fab', 'youtube']"
            class="w-[26px]    text-gray-600 pr-[5px] cursor-pointer   hover:text-teal-600                   " />
          <font-awesome-icon :icon="['fab', 'pinterest']"
            class="w-[26px]  text-gray-600 pr-[5px] cursor-pointer   hover:text-teal-600                   " />
        </div>
      </div>
    </div>



    <div class="flex  flex-col items-start mb-[20px] m-[20px]">
      <h4 class="text-[25px]"> About</h4>
      <a href="#" class="text-[17px] text-black mb-[10px] hover:text-gray-400">About us</a>
      <a href="#" class="text-[17px] text-black mb-[10px] hover:text-gray-400">Delivety Information</a>
      <a href="#" class="text-[17px] text-black mb-[10px] hover:text-gray-400">Privacy policy</a>
      <a href="#" class="text-[17px] text-black mb-[10px] hover:text-gray-400">Terms & Conditions</a>
      <a href="#" class="text-[17px] text-black mb-[10px] hover:text-gray-400">Contact Us</a>
    </div>



    <div class="flex  flex-col items-start mb-[20px] m-[20px]">
      <h4 class="text-[25px] ">My account</h4>
      <a href="#" class="text-[17px] mb-[10px]  hover:text-gray-400">Sign In</a>
      <a href="#" class="text-[17px] mb-[10px]  hover:text-gray-400">View cart</a>
      <a href="#" class="text-[17px] mb-[10px]  hover:text-gray-400">My Wishlist</a>
      <a href="#" class="text-[17px] mb-[10px]  hover:text-gray-400">Track My Order</a>
      <a href="#" class="text-[17px] mb-[10px]  hover:text-gray-400">Help</a>
    </div>


    <div class="m-[20px]">
      <h4 class="text-[25px]">Install App</h4>
      <P>From App Store or Google Play</P>
      <div class="flex">
        <img src="../assets/app.jpg" class="border-2 border-teal-500 rounded-md  mt-[10px] mb-[15px]  ">
        <img src="../assets/play.jpg" class="border-2 border-teal-500 rounded-md  mt-[10px] mb-[15px] m-2">


      </div>
      <P>Secured Payment Gateways</P>
      <img src="../assets/pay.png">


    </div>





    <div class="ml-[300px]  mb-[30px] text-black ">
      <p class="text-[18px]">2023, Tech etc -Html Css Ecommerce Template <span class="text-red-700"><a href="">('omidreza
            baghba haghighi')$</a></span> </p>
    </div>
  </footer>
</template>

<script>
  import Sproduct from '../components/Sproduct.vue';

export default {
  setup() {
    const redirectToSproduct = () => {
      // انتقال به صفحه Sproduct
      window.location.href = '/Sproduct';
    };

    return {
      redirectToSproduct,Sproduct
    };
  },
};
</script>

<style scoped>
#page-header {
  background-image: url('../assets/b1.jpg');
  width: 100%;
  height: 40vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 14px;
}

#bgbutton {
  background-image: url(../assets/button.png);
}

#bgbnr {
  background-image: url(../assets/b2.jpg);

}

#bnr1 {
  background-image: url(../assets/b17.jpg);
}

#bnr2 {
  background-image: url(../assets/b10.jpg);
}

#bnr3 {
  background-image: url(../assets/b7.jpg);
}

#bnr4 {
  background-image: url(../assets/b4.jpg);
}

#bnr5 {
  background-image: url(../assets/b18.jpg);
}

#bnr6 {
  background-image: url(../assets/b143.png);
  width: 100%;
  background-size: cover;
}



@media (max-width: 799px) {
  .section-p1 {
    padding: 40px 30px;
  }

  #hero {
    height: 70vh;
    padding: 0 30px;
    position: top 30%;
  }

  #feature {
    justify-content: center;
  }

  #fe-box {
    margin: 15px 15px;
  }

  .product {
    /* width: 50%; */
    justify-content: center;
    margin-left: 40px;
    margin-right: 40px;
  }

  #bgbnr {
    height: 20vh;
  }

  #bn {
    min-width: 100%;
    /* height: 30vh; */
    margin-left: 50px;
  }

  #bnr33 {
    margin-left: 45px;
  }

  .omiid>#bnr3 {
    width: 28%;
  }

  .omiid>#bnr4 {
    width: 28%;
  }

  .omiid>#bnr5 {
    width: 28%;
  }

  #bnr6 {
    display: block;
    width: 100%;
    ;
  }
}


@media(max-width:477px) {
  #hero {

    padding: 0 10px;
    background-position: 60%;

  }

  #hero>h2 {
    font-size: 32px;
  }

  #hero>h1 {
    font-size: 2px;
  }
}</style>


