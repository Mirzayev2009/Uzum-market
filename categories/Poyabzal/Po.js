import axios from "axios";
let base = "http://localhost:5400/";

let arrProducts = []



async function createProducts() {
    try {
        let product = await axios.get(`${base}products`);
        console.log(product);
        ElektronikaProducts(product.data);
    } catch (error) {
        console.error("Error fetching product data:", error);
    }
}


function ElektronikaProducts(productData){
    for (let i = 0; i < productData.length; i++) {
        let mainContainer = document.querySelector(".mainconteiner")
        
        if(productData[i].category === "poyabzal" ){

            
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
                    
                    heart.classList.add("bx", "bx-heart");
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
                    
                    // Appending elements to the main container
                    mainContainer.append(mainBox);
                    
                    mainBox.append(imgBox);
                    mainBox.append(infoBox);
                    
                    imgBox.append(heart);
                    
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
                            images: productData[i].images
                          };
                          
                          console.log(obj);
                          localStorage.setItem("productDraw", JSON.stringify(obj));
                          //   location.pathname = "./ProductDraw/front/product.html";
                          if (e.target == heart) {
                              console.log("working");
                              heart.addEventListener("click", () => {
                                  
                                  
                                  
                                  if(heart.classList.contains("bx-heart")){
                                      heart.classList.remove("bx-heart")
                                      heart.classList.add("bxs-heart")
                                      LikeMassive.push(obj)
              
                                      
                                } else{
                                  heart.classList.add("bx-heart")
                                  heart.classList.remove("bxs-heart")
                                  LikeMassive = LikeMassive.filter(item => 
                                     item.id != obj.id 
                                  )
                                }
              
                                  
              
              
                                  
                              })
                              
                          } else {
                              location.pathname = "./ProductDraw/front/product.html";
                              
                          }
                          localStorage.setItem("LikeDraw", JSON.stringify(LikeMassive))
      
                      }
                   
                     ) };
  
                          
         
  
  
  
                  
          }
  }

createProducts()

let Elektronika = document.querySelector(".Elektronika")
let Texnika = document.querySelector(".Texnika")
let Kiyim = document.querySelector(".Kiyim")
let Poyabzal = document.querySelector(".Poyabzal")
let Aksessuarlar = document.querySelector(".Aksessuarlar")
let Parvaraish = document.querySelector(".Parvarish")



Elektronika.addEventListener("click", () =>{
    location.pathname = "./categories/Elektronika/elek.html"
})
Texnika.addEventListener("click", () =>{
    location.pathname = "./categories/Texnika/T.html"
})
Kiyim.addEventListener("click", () =>{
    location.pathname = "./categories/Kiyim/kiyim.html"
})
Poyabzal.addEventListener("click", () =>{
    location.pathname = "./categories/Poyabzal/Po.html"
})
Aksessuarlar.addEventListener("click", () =>{
    location.pathname = "./categories/Aksessuarlar/aksessuar.html"
})
Parvaraish.addEventListener("click", () =>{
    location.pathname = "./categories/Parvarish/P.html"
})

let logo = document.querySelector(".buttonLogo")

logo.addEventListener("click", ()=>{
    location.pathname = "./index.html"
})


let searchBar = document.querySelector(".searchBar");
let containerSearch = document.querySelector(".bigRB");



document.addEventListener("DOMContentLoaded", () => {
    searchBar.addEventListener("keyup", (e) => {
        let value = e.target.value.toLowerCase();
        console.log(value);

        // Clear previous search results
        containerSearch.innerHTML = "";

        // Filter products
        let filtered = arrProducts[0].filter(item => 
            item.title.toLowerCase().includes(value)
        );

        console.log(filtered);

        // Create result container
        let resultBox = document.createElement("div");
        resultBox.classList.add("resultBox");
        containerSearch.append(resultBox);


        if(filtered.length > 0){
            containerSearch.style.display = "block"
        } else{
            containerSearch.style.display = "none"
        }

        // Populate with filtered results
        for (let i = 0; i < filtered.length; i++) {
            let miniResultBox = document.createElement("div");
            let imagesResult = document.createElement("img");
            let titleResult = document.createElement("h1");
            let salePriceResult = document.createElement("p");
            let realPriceResult = document.createElement("p");
            let item2 = document.createElement("div")

            miniResultBox.classList.add("miniRB");
            imagesResult.classList.add("imageResult");
            titleResult.classList.add("titleResult");
            salePriceResult.classList.add("salePR");
            realPriceResult.classList.add("realPR");
            item2.classList.add("resultItem2")

            imagesResult.setAttribute("src", filtered[i].images[0]);
            titleResult.innerHTML = filtered[i].title;
            salePriceResult.innerHTML = filtered[i].saleprice + " so'm";
            realPriceResult.innerHTML = filtered[i].realprice + " so'm";

            // Append elements to miniResultBox
            item2.append( titleResult, salePriceResult, realPriceResult)
            miniResultBox.append(imagesResult, item2);
            resultBox.append(miniResultBox);
        }
    });
});


