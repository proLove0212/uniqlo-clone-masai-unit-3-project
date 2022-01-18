let newMenObj=[
  {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445041/item/ingoods_30_445041.jpg?width=1008&impolicy=quality_75",
      gender : "MEN",
      size  : "S-3XL",
      name : "MEN Coach Jacket",
      desc : "Exclusive Size Online Only,New Arrivals",
      price : "Rs. 3,990.00"
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/446217/item/ingoods_00_446217.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "S-XXL",
    name : "MEN Monochrome Mickey Long Sleeve Sweatshirt",
    desc : "",
    price : "Rs. 1,990.00"
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/448383/item/ingoods_65_448383.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "S-3XL",
    name : "MEN Hickory Oversized Stand Collar Long Sleeve Shirt",
    desc : "Exclusive Size Online Only",
    price : "Rs. 2,490.00"
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444586/item/ingoods_67_444586.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "28INCH-40INCH",
    name : "MEN Regular Fit Straight Jeans",
    desc : "Exclusive Size Online Only,Limited Store",
    price : "Rs. 2,990.00"
  },
]
let product4 =document.getElementById("product4")
displayprod(newMenObj)
function displayprod(data){

  data.map(({image,gender,size,name,desc,price})=>{
     let div =document.createElement("div");
     let imgdiv = document.createElement("div");
     let sizediv =document.createElement("div");   
     let img =document.createElement("img");
     img.src =image;

     let gend = document.createElement("h3");
     gend.textContent =gender;
     let siz = document.createElement("h3");
     siz.textContent =size;

     let nam = document.createElement("h3");
     nam.textContent =name;

     let des = document.createElement("h3");
     des.textContent =desc;
     des.id ="desc"

     let pric = document.createElement("p");
     pric.textContent =price;

     imgdiv.append(img);
     sizediv.append(gend,siz);
     sizediv.id = "men"
    // sizediv.style.display ="flex"


     div.append(imgdiv,sizediv,nam,des,pric)
     product4.append(div)
  })
}

let newMenObj2= [
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444049/item/ingoods_03_444049.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-3XL",
    name :  "MEN Pile Lined Sweat Long Sleeve Full-Zip Hoodie",
    exc :  "Exclusive Size Online Only",
    striked_price : "Rs. 2,490.00",
    price : "Rs. 1,990.00",
    limited : "Limited Offer Until Jan 20",
    star : "⭐⭐⭐⭐(19)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444051/item/ingoods_03_444051.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-3XL",
    name :  "MEN Pile Lined Sweat Pants",
    exc : "Exclusive Size Online Only",
    striked_price :"Rs. 2,490.00",
    price : "Rs. 1,990.00",
    limited : "Limited Offer Until Jan 20",
    star : "⭐⭐⭐⭐(12)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/441097/item/ingoods_31_441097.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-3XL",
    name : "MEN Pile Lined Fleece Set (Long Sleeve)", 
    exc : "Exclusive Size Online Only",
    striked_price :"Rs. 2,490.00",
    price : "Rs. 1,990.00",
    limited :"Limited Offer Until Jan 20",
    star : "⭐⭐⭐⭐(29)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439589/item/ingoods_68_439589.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-3XL",
    name :  "MEN Ultra Light Down Jacket (3D Cut)",
    exc : "",
    striked_price : "",
    price : "Rs. 4,990.00",
    limited : "",
    star : "⭐⭐⭐⭐(64)",
  },
]
 let limited_off =document.getElementById("limited_offer");
 limitedOffers(newMenObj2)
function limitedOffers(data){

  data.map(({image,gender,size,name,exc,striked_price,price,limited,star})=>{
    let div =document.createElement("div");
    let imgdiv = document.createElement("div");
    let sizediv =document.createElement("div");   
    let img =document.createElement("img");
    img.src =image;

    let gend = document.createElement("h4");
    gend.textContent =gender;
    let siz = document.createElement("h4");
    siz.textContent =size;

    let nam = document.createElement("h3");
    nam.textContent =name;

    let des = document.createElement("p");
    des.textContent =exc;
    des.id ="desc"

    let striked = document.createElement("p");
    striked.textContent =striked_price;
    striked.id ="strikedprice"
    let pric = document.createElement("p");
    pric.textContent =price;
    pric.id ="redprice"

    let limit = document.createElement("p");
    limit.textContent =limited;
    limit.style.color ="red"
       
    let str = document.createElement("p");
    str.textContent =star;
    // str.style.border ="0"
    imgdiv.append(img);
    sizediv.append(gend,siz);
    sizediv.id = "men"
    div.append(imgdiv,sizediv,nam,des,striked,pric,limit,str);
    limited_off.append(div)
  })
}


let newMenObj3= [
  {
    image : "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446519/item/goods_69_446519.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "XS-XXL",
    name :  "MEN Easy Work Trousers",
    exc :  "Exclusive Size Online Only",
    striked_price : "Rs. 4,990.00",
    price : "Rs. 3,990.00",
    limited : "Sale",
    star : "⭐(1)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/448661/item/ingoods_01_448661.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-3XL",
    name :  "MEN Smart Ankle Trousers 2WAY Stretch Cotton",
    exc : "Exclusive Size Online Only,New Arrivals",
    striked_price :"Rs. 2,490.00",
    price : "Rs. 1,990.00",
    limited : "Sale",
    star : "⭐⭐⭐⭐⭐(2)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/438793/item/ingoods_69_438793.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-3XL",
    name : "MEN Souffle Yarn Mock Neck Long Sleeve Sweater", 
    exc : "Exclusive Size Online Only",
    striked_price :"Rs. 2,490.00",
    price : "Rs. 1,990.00",
    limited :"Sale",
    star : "⭐⭐⭐⭐(2)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446430/item/goods_08_446430.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  :  "S-L",
    name :  "MEN Supima Cotton Oversized Stand Collar Shirt",
    exc : "Online Only",
    striked_price : "Rs. 2,990.00",
    price : "Rs. 1,990.00",
    limited : "Sale",
    star : "",
  },
]
 let sale =document.getElementById("sale_product")
 SaleOffers(newMenObj3)
function  SaleOffers(data){

  data.map(({image,gender,size,name,exc,striked_price,price,limited,star})=>{
    let div =document.createElement("div");
    let imgdiv = document.createElement("div");
    let sizediv =document.createElement("div");   
    let img =document.createElement("img");
    img.src =image;

    let gend = document.createElement("h4");
    gend.textContent =gender;
    let siz = document.createElement("h4");
    siz.textContent =size;

    let nam = document.createElement("h3");
    nam.textContent =name;

    let des = document.createElement("p");
    des.textContent =exc;
    des.id ="desc"

    let striked = document.createElement("p");
    striked.textContent =striked_price;
    striked.id ="strikedprice"
    let pric = document.createElement("p");
    pric.textContent =price;
    pric.id ="redprice"

    let limit = document.createElement("p");
    limit.textContent =limited;
    limit.style.color ="red"
       
    let str = document.createElement("p");
    str.textContent =star;
    // str.style.border ="0"
    imgdiv.append(img);
    sizediv.append(gend,siz);
    sizediv.id = "men"
    div.append(imgdiv,sizediv,nam,des,striked,pric,limit,str);
    sale.append(div)
  })
}


let newMenObj4=[
  {
      image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444553/item/ingoods_67_444553.jpg?width=1008&impolicy=quality_75",
      gender : "MEN",
      size  : "S-XXL",
      name : "MEN Utility Parka",
      desc : "Limited Store",
      price : "Rs. 4,990.00",
      star : "⭐⭐⭐⭐⭐(1)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/440522/item/ingoods_66_440522.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "S-3XL",
    name : "Waffle Crew Neck Long Sleeve T-Shirt",
    desc : "Exclusive Size Online Only",
    price : "Rs. 1,990.00",
    star : "⭐⭐⭐⭐⭐(3)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/444583/item/ingoods_05_444583.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "28INCH-38INCH",
    name : "MEN Extra Stretch Skinny Fit Jeans",
    desc : "Exclusive Size Online Only",
    price : "Rs. 2,990.00",
    star : "⭐⭐⭐⭐⭐(1)",
  },
  {
    image : "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/448134/item/ingoods_04_448134.jpg?width=1008&impolicy=quality_75",
    gender : "MEN",
    size  : "S-3XL",
    name : "MEN Ultra Stretch Dry Sweat Trousers",
    desc : "Exclusive Size Online Only,New Arrivals",
    price : "Rs. 2,490.00",
    star : "⭐⭐⭐⭐⭐(5)",
  },
]

let feature =document.getElementById("featured_offer")
featureprod(newMenObj4)
function featureprod(data){

  data.map(({image,gender,size,name,desc,price,star})=>{
     let div =document.createElement("div");
     let imgdiv = document.createElement("div");
     let sizediv =document.createElement("div");   
     let img =document.createElement("img");
     img.src =image;

     let gend = document.createElement("h4");
     gend.textContent =gender;
     let siz = document.createElement("h4");
     siz.textContent =size;

     let nam = document.createElement("h3");
     nam.textContent =name;

     let des = document.createElement("h3");
     des.textContent =desc;
     des.id ="desc"

     let pric = document.createElement("h4");
     pric.textContent =price;

     let str = document.createElement("h4");
     str.textContent =star;

     imgdiv.append(img);
     sizediv.append(gend,siz);
     sizediv.id = "men"
    // sizediv.style.display ="flex"


     div.append(imgdiv,sizediv,nam,des,pric,str)
     feature.append(div)
  })
}
let pickupimg =[
  {
    image : "https://im.uniqlo.com/global-cms/spa/res8d80b49276715e269314f640dc787af7fr.jpg",
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/resb017b915e0496d3f006995675f290d86fr.jpg",
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/rese86928c1ccc41b21e28feeb046b35bd1fr.jpg",
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/res9c1cfa476bbfd0e0886a79738894c8a3fr.jpg"
  },
  {
    image :"https://im.uniqlo.com/global-cms/spa/res3d3695458dbf64a866666af18a51d948fr.jpg"
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/res56abd7a444e2e4077a5d0193e0a07e52fr.jpg"
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/res8caeee0cec0c5885a8fa1edb836fa95cfr.jpg"
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/resb396bd6cdd7368d6a2d8dbabb350266efr.jpg"
  },
  {
    image : "https://im.uniqlo.com/global-cms/spa/resb62383efa267630e25929bcbcf086bf2fr.jpg"
  }
]
let pickup =document.getElementById("pickup");
pickupCAtegory(pickupimg)
function pickupCAtegory(data){
   data.map(({image})=>{
     let div =document.createElement("div")
     let img = document.createElement("img");
     img.src =image
     div.append(img)
     pickup.append(div)
   })
} 

let featuredobj =[
  {
    image : "https://im.uniqlo.com/global-cms/spa/res5efd0925742055f25d72b0ac617cf7c0fr.jpg"
  },
  // {
  //   image : "https://im.uniqlo.com/global-cms/spa/res5efd0925742055f25d72b0ac617cf7c0fr.jpg"
  // },
  // {
  //   image : "https://im.uniqlo.com/global-cms/spa/res5efd0925742055f25d72b0ac617cf7c0fr.jpg"
  // },
]
 let featurenews =document.getElementById("featured_news");
 featurednews(featuredobj)
function featurednews(data){
   data.map(({image})=>{
     let img =document.createElement("img");
     img.src =image;
     featurenews.append(img)
   })
}