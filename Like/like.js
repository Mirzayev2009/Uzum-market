

let LikeData = JSON.parse(localStorage.getItem("LikeDraw"));

console.log(LikeData);
console.log(LikeData.length);

console.log(LikeData);     
createBox(LikeData)


function createBox(productData) {
    let mainConteiner = document.querySelector(".mainconteiner")
    for (let i = 0; i < productData.length; i++) 
        {



        let mainBox = document.createElement("div");

        let imgBox = document.createElement("div");
        let infoBox = document.createElement("div");

        let heart = document.createElement("i");
        let info1Item = document.createElement("div");
        let title = document.createElement("h1");
        let ratingItem = document.createElement("div");
        let star = document.createElement("i");
        let rate = document.createElement("p");
        let monthPrice = document.createElement("p");
        let info2Item = document.createElement("div");
        let miniItem1 = document.createElement("div");
        let realPrice = document.createElement("p");
        let salePrice = document.createElement("h3");
        let miniItem2 = document.createElement("div");
        let savat = document.createElement("i");

        // Adding classes
        mainBox.classList.add("mainBox");
        imgBox.classList.add("imgBox");
        infoBox.classList.add("infoBox");

        heart.classList.add("bx", "bxs-heart");
        info1Item.classList.add("info1Item");
        title.classList.add("title");
        ratingItem.classList.add("ratingItem");
        star.classList.add("bx", "bx-star");
        rate.classList.add("rate");
        monthPrice.classList.add("monthPrice");
        info2Item.classList.add("info2Item");
        miniItem1.classList.add("miniItem1");
        realPrice.classList.add("realPrice");
        salePrice.classList.add("salePrice");
        miniItem2.classList.add("miniItem2");
        savat.classList.add("bx", "bx-shopping-bag");

        // Setting attributes and content
        title.textContent = productData[i].title;
        rate.textContent = productData[i].score;
        monthPrice.textContent = productData[i].formonths + " so'm/oyiga";
        realPrice.textContent = productData[i].realprice;
        salePrice.textContent = productData[i].saleprice + " so'm";

        // Set the background image with CSS
        imgBox.style.backgroundImage = `url('${productData[i].images[0]}')`;

        
        let img = document.createElement("img")
        // img.setAttribute("src",`${productData[i].img}` )

        // Appending elements to the main container
        mainConteiner.append(mainBox);

        mainBox.append(imgBox);
        mainBox.append(infoBox);

        imgBox.append(heart);
        imgBox.append(img)


        infoBox.append(info1Item);
        infoBox.append(info2Item);
        info1Item.append(title);
        info1Item.append(ratingItem);
        ratingItem.append(star);
        ratingItem.append(rate);
        info1Item.append(monthPrice);
        info2Item.append(miniItem1);
        miniItem1.append(realPrice);
        miniItem1.append(salePrice);
        info2Item.append(miniItem2);
        miniItem2.append(savat);

        // Adding other attributes and elements
        mainBox.setAttribute("id", productData[i].id)
        let salepercent = document.createElement("p");
        salepercent.classList.add("salepercent", "hide");
        salepercent.textContent = productData[i].salepercent;
        let howmanytaken = document.createElement("p");
        howmanytaken.textContent = productData[i].howmanytaken;
        howmanytaken.classList.add("HMT", "hide");
        let description = document.createElement("p");
        description.classList.add("description", "hide");
        description.textContent = productData[i].description;
        let count = document.createElement("p");
        count.classList.add("count", "hide");
        count.textContent = productData[i].count;

        mainBox.append(salepercent, howmanytaken, description, count);

      

        mainBox.addEventListener("click", (e) => {
            console.log(e.target);
            let draw = e.target.closest(".mainBox");
            
            let obj = {
                id: draw.id,
                title: mainBox.querySelector(".title").textContent,
                realprice: mainBox.querySelector(".realPrice").textContent,
                saleprice: mainBox.querySelector(".salePrice").textContent,
                salepercent: mainBox.querySelector(".salepercent").textContent,
                formonths: mainBox.querySelector(".monthPrice").textContent.trim().replace(" so'm/oyiga", ""),
                howmanytaken: mainBox.querySelector(".HMT").textContent,
                description: mainBox.querySelector(".description").textContent,
                count: mainBox.querySelector(".count").textContent,
                score: mainBox.querySelector(".rate").textContent,
                images: LikeData[i].images
              };
              
              console.log(obj);
              // localStorage.setItem("productDraw", JSON.stringify(obj));
              //   location.pathname = "./ProductDraw/front/product.html";
              if (e.target == heart) {
                  console.log("working");
                  heart.addEventListener("click", () => {
                      
                      
                      
                      if(heart.classList.contains("bxs-heart")){
                          heart.classList.remove("bxs-heart")
                          heart.classList.add("bx-heart")
                   
                          let itemId = e.target.dataset.id;
  
                          // Remove item from bagData array and update localStorage
                          productData = productData.filter(item => item.id !== itemId);
                          localStorage.setItem("LikeDraw", JSON.stringify(LikeData));
                      
                          // Remove item from the DOM
                          e.target.closest(".mainBox").remove();
  
                          
                    } 
  
                      
  
  
                      
                  })
                  
              } else {
                  location.pathname = "./ProductDraw/front/product.html";
                  
              }
             
          }
       
         ) };

              




      
}




let Elektronika = document.querySelector(".Elektronika")
let Texnika = document.querySelector(".Texnika")
let Kiyim = document.querySelector(".Kiyim")
let Poyabzal = document.querySelector(".Poyabzal")
let Aksessuarlar = document.querySelector(".Aksessuarlar")
let Parvaraish = document.querySelector(".Parvarish")



Elektronika.addEventListener("click", () => {
    location.pathname = "./categories/Elektronika/elek.html"
})
Texnika.addEventListener("click", () => {
    location.pathname = "./categories/Texnika/T.html"
})
Kiyim.addEventListener("click", () => {
    location.pathname = "./categories/Kiyim/kiyim.html"
})
Poyabzal.addEventListener("click", () => {
    location.pathname = "./categories/Poyabzal/Po.html"
})
Aksessuarlar.addEventListener("click", () => {
    location.pathname = "./categories/Aksessuarlar/aksessuar.html"
})
Parvaraish.addEventListener("click", () => {
    location.pathname = "./categories/Parvarsish/P.html"
})


let Like = document.querySelector(".Like")
let Bag = document.querySelector(".Bag")

Like.addEventListener("click", () => {

    location.pathname = "./Like/like.html"
})

Bag.addEventListener("click", () => {

    location.pathname = "./Bag/bag.html"
})

let logo = document.querySelector(".buttonLogo")

logo.addEventListener("click", ()=>{
    location.pathname = "./index.html"
})
// mainBox.addEventListener("click", (event) => {
//     if (event.target.classList.contains("bxs-heart")) {
//       let itemId = event.target.dataset.id;
  
//       // Remove item from bagData array and update localStorage
//       drawData = drawData.filter(item => item.id !== itemId);
//       localStorage.setItem("LikeDraw", JSON.stringify(LikeData));
  
//       // Remove item from the DOM
//       event.target.closest(".mainBox").remove();
//     }
//   });






