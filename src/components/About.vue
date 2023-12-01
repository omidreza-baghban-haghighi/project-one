<template>
  <section class="text-black flex flex-col justify-center" id="page-header">
    <div>
      <h2 class="text-[40px] font-bold text-white blog-hearder">#knowUs</h2>
      <p class="text-[20px] p-[10px] text-white">Lorem ipsum dolor sit amet consectetur</p>
    </div>
  </section>



<Section id="about-head" class="about-header text-black flex items-center ">
  <img   src="../assets/a6.jpg" class="w-[50%] h-[auto]" >
  <div class="pl-[40px]">
    <h2 class="text-[40px] font-bold">Who We Are?</h2>
    <P class="text-[20px] mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus error ipsam corrupti cupiditate possimus 
      aliquid, facere placeat facilis tempore, mollitia reprehenderit minus ad earum iure aperiam minima quos,
       distinctio harum.</P>

       <abbr class="text-[18px] " title="">create stunning images with as much or as little control as you like thanks to a choice of basic and creative modes.  </abbr>

       <br>
       <marquee class="bg-gray-300 w-[100%] text-black mt-[15px]" loop="-1" scrollamount="5" >create stunning images with as much or as little control as you like thanks to a choice of basic and creative modes.</marquee>
  </div>
</Section>


<section id="about-app" class="section-p1 text-black  text-center ">
  <h1 class="text-[35px] mt-[15px]">Download Our<a href="#" class="text-blue-500"> App</a></h1>
  <video autoplay muted loop src="../assets/1.mp4 " class="w-[70%] h-[100%] mt-[30px] rounded-2xl mr-auto mb-0 ml-auto "></video>

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


</script>

<style scoped>
#page-header {
  background-image: url('../assets/banner.png');
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




