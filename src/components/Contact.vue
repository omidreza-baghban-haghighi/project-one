<template>
  <section class="text-black flex flex-col justify-center" id="page-header">
    <div>
      <h2 class="text-[40px] font-bold text-white blog-hearder">#lets_talk </h2>
      <p class="text-[20px] p-[10px] text-white">LEAVE A MESSAGE, We love to hear from you!</p>
    </div>
  </section>


  <section id="contact-details" class="section-p1 text-black  flex items-center justify-between mt-[15px]" >

    <div class="details w-[40%  ]">
      <span class="text-[15px] text-gray-500 ml-[20px]">GET IN TOUCH</span>
      <h2 class="text-[30px] leading-9	p-[20px] font-bold">Visit one of our agency location or contact us today</h2>
      <h3 class="text-[17px] pb-[15px] font-bold ml-[20px]" >Head OFFice</h3>

      <div class="ml-[20px]">
        <li class="list-none flex py-[10px]">
          <font-awesome-icon :icon="['fas', 'map']" class="text-[14px] pr-[22px]" />
          <p class="m-0 text-[18px] text-gray-500">56 Glassford Street Glasgow G1 1Ul New York</p>
        </li>

        <li class="list-none flex py-[10px]">
          <font-awesome-icon :icon="['fas', 'envelope']"  class="text-[14px] pr-[22px]"  />
          <p class="m-0 text-[18px] text-gray-500">contact@example.com</p>
        </li>


        <li class="list-none flex py-[10px]">
          <font-awesome-icon :icon="['fas', 'phone-alt']"  class="text-[14px] pr-[22px]" />
          <p class="m-0 text-[18px] text-gray-500">contact@example.com</p>
        </li>

        <li class="list-none flex py-[10px]">
          <font-awesome-icon :icon="['fas', 'clock']"  class="text-[14px] pr-[22px]"  />
          <p class="m-0 text-[18px] text-gray-500">Monday to saturday:9.00am to 16.pm</p>
        </li>
      </div>
    </div>
    <div class="map w-[45%] h-[400px] ">
    <iframe class="w-[100%] h-[100%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.0754342176!2d51.51246591933518!3d35.70774021768697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2z2KrZh9ix2KfZhtiMINin2LPYqtin2YYg2KrZh9ix2KfZhtiMINin24zYsdin2YY!5e0!3m2!1sfa!2snl!4v1701371587626!5m2!1sfa!2snl"
     width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>




  <section id="form-details" class="text-black mt-[50px] flex justify-between m-30 p-[80px] border-2 border-gray-300">
    <form action="" class="w-[65%] flex flex-col items-start"  >
      <span class="text-12px">LEAVE A MESSAGE</span>
      <h2 class="text-[26px] leading-9	py-[20px]">WE LOVE to hear from you</h2>
      <input class="w-[100%] py-[12px] px-[15px] mb-[20px] border-2 border-gray-300 outline-none"  type="text" placeholder="your Name">
      <input class="w-[100%] py-[12px] px-[15px] mb-[20px] border-2 border-gray-300 outline-none" type="text" placeholder="E-mail">
      <input class="w-[100%] py-[12px] px-[15px] mb-[20px] border-2 border-gray-300 outline-none" type="text" placeholder="subject">
      <textarea class="w-[100%] py-[12px] px-[15px] mb-[20px] border-2 border-gray-300 outline-none" name="" id="" cols="30" rows="10" placeholder="YOUR MESSAGE"></textarea>
      <button class="text-white bg-teal-600 py-[10px] px-[20px] rounded" >Submit</button>

    </form> 



    <div class="people  mt-[100px]" >
      <div class="pb-[25px] flex items-start text-gray-500">
        <img src="../assets/1.png" class="w-[65px] h-[65px] object-cover mr-[15px] ">
        <p class="m-0 text-[13px] leading-6"><span class="block text-[16px] font-semibold ">john doe</span>senior markting manager<br>
        phone:+000 123 00 77 88<br>Email:contact@example.com</p>
      </div>


      <div class="pb-[25px] flex items-start text-gray-500">
        <img src="../assets/2.png" class="w-[65px] h-[65px] object-cover mr-[15px] ">
        <p class="m-0 text-[13px] leading-6"><span  class="block text-[16px] font-semibold ">William Smith</span>senior markting manager<br>
        phone:+000 123 00 77 88<br>Email:contact@example.com</p>
      </div>

      <div class="pb-[25px] flex items-start text-gray-500">
        <img src="../assets/3.png" class="w-[65px] h-[65px] object-cover mr-[15px] ">
        <p class="m-0 text-[13px] leading-6"><span  class="block text-[16px] font-semibold ">Emma stone</span>senior markting manager<br>
        phone:+000 123 00 77 88<br>Email:contact@example.com</p>
      </div>

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
}
</style>





  
