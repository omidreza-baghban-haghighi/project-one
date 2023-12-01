<template>
   
  <section id="prodetails" class="section-p1  mr-[50px] tet-black flex mt-[50px]">
    <div class="single-pro-img w-[40%]">
        <img src="../assets/f1.jpg" class="w-[100%]" id="mainimg" >

        <div class="small-img-group flex justify-between">

           <div class="small-img-col flex basis-[24%] cursor-pointer		">
            <img src="../assets/f1.jpg" class="w-[100%] small-img" >
           </div>

           <div class="small-img-col basis-[24%]	cursor-pointer	">
            <img src="../assets/f2.jpg" class="w-[100%] small-img"  >
           </div> 

             <div class="small-img-col basis-[24%]	cursor-pointer	">
            <img src="../assets/f3.jpg" class="w-[100%] small-img"  >
           </div>

            <div class="small-img-col basis-[24%]	cursor-pointer	">
            <img src="../assets/f4.jpg" class="w-[100%] small-img"  >
           </div> 

        </div>
    </div>


    <div class="single-pro-details text-black w-[40%] pt-[30px] ml-[20px]">
        <h6> Home /T-shirt</h6>
        <h4 class="text-[25px] pt-[40px] pb-[20px]">Mens Fashon T Shirt</h4>
        <h2 class="text-[40px] font-bold	">$139.00</h2>
        <select class="block py-[5px] px-[10px] mb-[10px]">
            <option>Select Size</option>
            <option>Xl</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
        </select>
        <input type="number" value="1" class="w-[50px] h-[40px] pl-[10px] text-[16px] mr-[10px] border-gray-200 border-2">
        <button class="bg-teal-600 text-white p-2 rounded" >Add To Card</button>
        <h4 class="font-bold mt-5 text-[20px]">Product Details</h4>
        <span class="leading-[30px]">The Gildan Ultra cotton T-shitr is made from a substantial 6.0 oz. per sq. yd.fabric constructed from 100% cotton, this classic fit Preshrunk
            jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder, and a seamless double-needle coller,and available in a range
            of colors, it offers it all in the ultimate head-turing package.
            </span>
    </div>
  </section>
  





















  <section class="text-black text-center ">
    <h2 class="text-[60px] font-bold">Featured products </h2>
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
  
  <!-- <script>
var mainimg=document.getElementById('mainimg');
var smallimg=document.getElementsByClassName('small-img')

smallimg[0].onclick=function(){
    mainimg.src=smallimg[0].src;
}

smallimg[1].onclick=function(){
    mainimg.src=smallimg[1].src;
}
smallimg[2].onclick=function(){
    mainimg.src=smallimg[2].src;
}
smallimg[3].onclick=function(){
    mainimg.src=smallimg[3].src;
}
  
  </script> -->
  <!-- <script>
var mainimg = document.getElementById('mainimg');
var smallimg = document.getElementsByClassName('small-img');

// تعریف یک حلقه بر روی همه تصاویر کوچک
for (var i = 0; i < smallimg.length; i++) {
    smallimg[i].onclick = function () {
        mainimg.src = this.src; // از "this" برای اشاره به المانی که روی آن کلیک شده استفاده شده است
    };
}
</script> -->



<script>
document.addEventListener('DOMContentLoaded', function() {
    var mainimg = document.getElementById('mainimg');
    var smallimg = document.getElementsByClassName('small-img');

    // تعریف یک حلقه بر روی همه تصاویر کوچک
    for (var i = 0; i < smallimg.length; i++) {
        smallimg[i].onclick = function () {
            mainimg.src = this.src;
        };
    }
});
</script>


  
  <style scoped>
  #page-header {
    background-image: url('../assets/b1.jpg');
    width:100%;
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
    #prodetails{
        display: flex;
        flex-direction:column ;
    }
    #prodetails .single-pro-image{
        width: 100%;
        margin-right: 50px;
    }
  }
  </style>
  
  
   