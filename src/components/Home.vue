<template>
  <section class="text-black flex flex-col justify-center" id="hero">
    <div>
      <h4 class="text-[25px] pb-[10px]">Trade-in-offer</h4>
      <h2 class="text-[40px] font-bold">Super Value deals</h2>
      <h1 class="text-[43px] font-bold pb-[8px] text-teal-700">On all products</h1>
      <p class="text-[20px] text-gray-400 p-[10px]">Save more with coupons & up to 70% off!</p>
      <button class="text-teal-700 pl-[65px] pr-[80px] py-[14px] b-0 bg-no-repeat cursor-pointer	" id="bgbutton">Shop
        Now</button>
    </div>
  </section>


  <section id="feature" class=" px-[40px] py-[80px] flex items-center  justify-between flex-wrap   section-p1">

    <div class="w-[180px] px-[15px] py-[25px] my-15 text-center hover:shadow-lg rounded	shadow border-2  border-gray-300"
      id="fe-box">
      <img src="../assets/f1.png" class="w-[100%] mb-[10px]">
      <h6 class=" inline-block text-teal-700 pt-[9px] px-[8px] pb-[6px] rounded-lg bg-rose-100">Free shipping</h6>
    </div>


    <div class="w-[180px] px-[15px] py-[25px] my-15 text-center hover:shadow-lg rounded	shadow border-2  border-gray-300"
      id="fe-box">
      <img src="../assets/f2.png" class="w-[100%] mb-[10px]">
      <h6 class=" inline-block text-teal-700 pt-[9px] px-[8px] pb-[6px] rounded-lg bg-blue-100">online Order</h6>
    </div>


    <div class="w-[180px] px-[15px] py-[25px] my-15 text-center hover:shadow-lg rounded	shadow border-2  border-gray-300"
      id="fe-box">
      <img src="../assets/f3.png" class="w-[100%] mb-[10px]">
      <h6 class=" inline-block text-teal-700 pt-[9px] px-[8px] pb-[6px] rounded-lg bg-yellow-100">Save money</h6>
    </div>



    <div class="w-[180px] px-[15px] py-[25px] my-15 text-center hover:shadow-lg rounded	shadow border-2  border-gray-300"
      id="fe-box">
      <img src="../assets/f4.png" class="w-[100%] mb-[10px]">
      <h6 class=" inline-block text-teal-700 pt-[9px] px-[8px] pb-[6px] rounded-lg bg-orange-100">Promotion</h6>
    </div>



    <div class="w-[180px] px-[15px] py-[25px] my-15 text-center hover:shadow-lg rounded	shadow border-2  border-gray-300"
      id="fe-box">
      <img src="../assets/f5.png" class="w-[100%] mb-[10px]">
      <h6 class=" inline-block text-teal-700 pt-[9px] px-[8px] pb-[6px] rounded-lg bg-green-100">Happy Sell</h6>
    </div>

    <div class="w-[180px] px-[15px] py-[25px] my-15 text-center hover:shadow-lg rounded	shadow border-2  border-gray-300"
      id="fe-box">
      <img src="../assets/f6.png" class="w-[100%] mb-[10px]">
      <h6 class=" inline-block text-teal-700 pt-[9px] px-[8px] pb-[6px] rounded-lg bg-cyan-100">F24/7Support</h6>
    </div>
  </section>



 
  <section class="text-black text-center ">
    <h2 class="text-[60px] font-bold">New Arrivals</h2>
    <P class="text-[25px] text-gray-400">Summer Collection New Morden design</P>
    <div class="flex justify-between flex-wrap pt-20  product">
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

  </section>




  <section id="bgbnr"
    class="text-black h-[40vh] bg-cover flex flex-col justify-center items-center text-center w-[100%] omid">
    <h4 class="text-[25px] text-gray-200 ">Repair services</h4>
    <h2 class="text-[40px] text-gray-200 py-5"> Up to <span class="text-red-600">70% off</span> All t-Shirts & Accessories
    </h2>
    <button
      class="text-[14px] text-black font-bold cousor-pointer hover:bg-teal-600 hover:text-white rounded-lg py-[15px] bg-slate-200 px-[30px]">Explore
      More</button>
  </section>


  <section class="text-black text-center ">
    <h2 class="text-[60px] font-bold">New Arrivals</h2>
    <P class="text-[25px] text-gray-400">Summer Collection New Morden design</P>
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



  <section class="text-black flex justify-between flex-wrap " id="bn">


    <div id="bnr1"
      class="mb-[20px] text-black h-[50vh] bg-cover flex flex-col justify-center items-start  bg-center p-[30px]    min-w-[670px]">
      <h4 class="text-[25px] text-white text-300">crazy deals</h4>
      <h2 class="text-[40px] text-white font-extrabold">buy 1 get 1 free</h2>
      <span class="text-[20px] font-medium text-white pb-[15px]">The best classic dress is on sale at cara </span>

      <button
        class="text-[14px]  font-bold cousor-pointer hover:bg-teal-600 text-white rounded-lg py-[15px] bg-transparent border-2 border-gray-100 px-[30px]">Learn
        More</button>
    </div>

    <div id="bnr2"
      class="text-black h-[50vh] bg-cover flex flex-col justify-center items-start  bg-center p-[30px]    min-w-[670px]">
      <h4 class="text-[25px] text-white text-300">spring/summer</h4>
      <h2 class="text-[40px] text-white font-extrabold">upcomming season</h2>
      <span class="text-[20px] font-medium text-white pb-[15px]">The best classic dress is on sale at cara </span>

      <button
        class="text-[14px]  font-bold cousor-pointer hover:bg-teal-600 text-white rounded-lg py-[15px] bg-transparent border-2 border-gray-100 px-[30px]">Collection</button>
    </div>

  </section>


  <section class="flex flex-row justify-between flex-wrap omiid m-[15 px] " id="bnr33">

    <div id="bnr3"
      class="mb-[20px] text-black h-[30vh] bg-cover flex flex-col justify-center items-start  bg-center p-[20px]    min-w-[32%]">
      <h2 class="text-[25px] text-white font-extrabold">SEASONAL SALE</h2>
      <h3 class="text-white text-[15px] font-medium">WINTER Collection -50% OFF </h3>
    </div>



    <div id="bnr4"
      class="mb-[20px] text-black h-[30vh] bg-cover flex flex-col justify-center items-start  bg-center p-[20px]    min-w-[32%]">
      <h2 class="text-[25px] text-white font-extrabold">NEW FOOTWEAR COLLECTION</h2>
      <h3 class="text-white text-[15px] font-medium">Spring / summer 2024 </h3>
    </div>






    <div id="bnr5"
      class="mb-[20px] text-black h-[30vh] bg-cover flex flex-col justify-center items-start  bg-center p-[20px]    min-w-[32%]">
      <h2 class="text-[25px] text-white font-extrabold">T-SHIRT</h2>
      <h3 class="text-white text-[15px] font-medium">New trending Prints </h3>
    </div>




  </section>


<section id="bnr6" class="text-black flex justify-around items-center h-[20vh] ">
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
// مسیر به فایل StarRating.vue خود را تنظیم کنید

</script>

<style scoped>
#hero {
  background-image: url('../assets/hero.png');
  height: 90vh;
  width: 100%;
  /* background-repeat: no-repeat; */
  /* background-position: top 25% right 0; */
  background-size: cover;
  background-position: top 15% right 20%;
  padding: 0 80px;
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
  #bnr6{
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
  #hero>h2{
    font-size: 32px;
  }
  #hero>h1{
    font-size: 2px;
  }
  

}

</style>


