<template>
  <section class="text-black flex flex-col justify-center" id="page-header">
    <div>
      <h2 class="text-[40px] font-bold text-white blog-hearder">#Cart </h2>
      <p class="text-[20px] p-[10px] text-white">Add your coupon code & SAVE upto 70%</p>
    </div>
  </section>



  <section id="cart" class="section-p1 text-black mt-[15px] ">
    <table width="100%" class=" W-[100%] border-collapse table-fixed whitespace-nowrap">
      <thead class="border-gray-400 border-y-2 border-x-0">
        <tr>
          <td class="font-bold upprcase text-[13px] py-[18px] ">Remove</td>
          <td class="font-bold upprcase text-[13px] py-[18px] pl-[10px] ">Image</td>
          <td class="font-bold upprcase text-[13px] py-[18px] pl-[40px]">Product</td>
          <td class="font-bold upprcase text-[13px] py-[18px] pl-[40px] ">price</td>
          <td class="font-bold upprcase text-[13px] py-[18px] ">Quantity</td>
          <td class="font-bold upprcase text-[13px] py-[18px] ">Subtotsl</td>
        </tr>
      </thead>
      <tbody class="">
        <tr>
          <td>
            <a href="#">
              <font-awesome-icon :icon="['fas', 'times']" class="pl-[20px]" />
            </a>
          </td>
          <td><img src="../assets//f1.jpg" class="w-[70px] pt-[10px] pr-[5px] pb-[10px]   "  ></td>
          <td>Cartoon astronaut T-shirts</td>
          <td class="pl-[40px]">$118.19</td>
          <td><input type="number" value="1" class="w-[70px] p-["></td>
          <td >$118.19</td>
        </tr>





        <tr>
          <td>
            <a href="#">
              <font-awesome-icon :icon="['fas', 'times']" class="pl-[20px]" />
            </a>
          </td>
          <td><img src="../assets//f2.jpg" class="w-[70px] pt-[10px] pr-[5px] pb-[10px]   "  ></td>
          <td>Cartoon astronaut T-shirts</td>
          <td class="pl-[40px]">$118.19</td>
          <td><input type="number" value="1" class="w-[70px] p-["></td>
          <td >$118.19</td>
        </tr>






        <tr>
          <td>
            <a href="#">
              <font-awesome-icon :icon="['fas', 'times']" class="pl-[20px]" />
            </a>
          </td>
          <td><img src="../assets//f3.jpg" class="w-[70px] pt-[10px] pr-[5px] pb-[10px]   "  ></td>
          <td>Cartoon astronaut T-shirts</td>
          <td class="pl-[40px]">$118.19</td>
          <td><input type="number" value="1" class="w-[70px] p-["></td>
          <td >$118.19</td>
        </tr>

      </tbody>




      
    </table>

  </section>



  <section id="cart-add" class="section-p1 text-black flex flex-wrap justify-between mt-[45px] ">
    <div id="coupon" class="ml-[75px] mt-[30px]">
      <h3 class="pb-[15px] font-bold text-[25px]">apply coupon</h3>
      <div class="flex ">
      <input type="text" placeholder="enter your coupon" class="py-[5px] px-[60px] w-[100%] mr-[10px] border-2 border-gray-400 rounded">
      <button class="bg-teal-600 rounded py-[8px] px-[15px]" > apply</button>
    </div>
    </div>
      


    <div id="subtotal" class="w-[50%] mb-[30px] border-2 border-gray-500 p-[30px]" >
       <h3 class="font-bold text-[20px] pb-[30px]" >cart totals</h3>
      <table class="collapse-lg w-[100%] mb-[20px]">
        <tr>
          <td class="border-2 border-gray-500 p-[10px] w-[50%] ">cart subtotal</td>
          <td class="border-2 border-gray-500 p-[10px] w-[50%]">$ 335</td>
        </tr>
        <tr>
          <td class="border-2 border-gray-500 p-[10px] w-[50%] ">shipping</td>
          <td class="border-2 border-gray-500 p-[10px] w-[50%]">free</td>
        </tr>
        <tr>
          <td class="border-2 border-gray-500 p-[10px] w-[50%] "><strong>total</strong></td>
          <td class="border-2 border-gray-500 p-[10px] w-[50%]"><strong>$ 335</strong></td>
        </tr>
       </table>

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





  
