
import axios from "axios";
let base = "http://localhost:5400/";

let arrProducts = []
// Function to fetch swiper data and create swiper elements
async function getData() {
    try {
        let response = await axios.get(`${base}swiper`);
        console.log(response);
        createSwiper(response.data);


    } catch (error) {
        console.error("Error fetching swiper data:", error);
    }
}

getData();



function createSwiper(data) {
    let swiperContainer = document.querySelector(".mySwiper");

    for (let i = 0; i < data.length; i++) {
        let swiper = document.createElement("swiper-slide");
        let img = document.createElement("img");
        img.setAttribute("src", data[i].url); // Corrected attribute for img source

        swiper.append(img);
        swiperContainer.append(swiper);
    }
}

// Function to fetch product data and create product boxes
async function createProducts() {
    try {
        let product = await axios.get(`${base}products`);
        console.log(product);
        createBox(product.data);

        setTimeout(() => {
            arrProducts.push(product.data)
            console.log(arrProducts);
        }, 2000)
    } catch (error) {
        console.error("Error fetching product data:", error);
    }
}

let mainContainer = document.querySelector(".mainconteiner");

let famous = document.createElement("h1")
famous.classList.add("mashhur")
mainContainer.append(famous)
famous.innerHTML = "Mashhur >"
let LikeMassive = [

]

function createBox(productData) {
    for (let i = 0; i < 10; i++) {



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
        // imgBox.style.backgroundImage = `url('${productData[i].images[0].url1}')`

        let img = document.createElement("img")
        img.setAttribute("src", `${productData[i].images[0]}`)
        img.classList.add("img")

        // Appending elements to the main container
        mainContainer.append(mainBox);

        mainBox.append(imgBox);
        mainBox.append(infoBox);

        imgBox.append(img)
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
        let category = productData[i].category
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

        console.log(productData[i].images);



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


            }

            console.log(obj);
            localStorage.setItem("productDraw", JSON.stringify(obj));

            if (e.target == heart) {

                heart.addEventListener("click", () => {



                    if (heart.classList.contains("bx-heart")) {
                        heart.classList.remove("bx-heart")
                        heart.classList.add("bxs-heart")
                        LikeMassive.push(obj)
                        console.log("salom");


                    } else {
                        heart.classList.remove("bxs-heart")
                        heart.classList.add("bx-heart")
                        LikeMassive = LikeMassive.filter(item =>
                            item.id != obj.id
                        )
                    }





                })

            } else {
                location.pathname = "./ProductDraw/front/product.html";

            }
            localStorage.setItem("LikeDraw", JSON.stringify(LikeMassive))

        })
    }










    // let buttonBox = document.createElement("div")
    // let createButton = document.createElement("button")
    // createButton.classList.add("button")
    // buttonBox.classList.add("buttonBox")
    // buttonBox.append(createButton)
    // mainContainer.append(buttonBox)
    // createButton.textContent = "Yana ko'rsatish 10"



    let picture1 = document.createElement("div")
    picture1.classList.add("picture1")
    picture1.style.backgroundImage = `URL("https://images.uzum.uz/crn8rpshug2lhicnpcgg/main_page_banner.jpg")`
    mainContainer.append(picture1)



    let elektronika = document.createElement("h1")
    elektronika.classList.add("elektronika")
    elektronika.innerHTML = "Elektronika savdosi >"
    mainContainer.append(elektronika)


    let count1 = 0;

    for (let i = 0; i < productData.length; i++) {

        if (productData[i].category === "elektronika") {


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

            count1++

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
                location.pathname = "./ProductDraw/front/product.html";
            });

        }
        if (count1 === 5) {
            break
        }







    }

    let picture2 = document.createElement("div")
    picture2.classList.add("picture1")
    picture2.style.backgroundImage = `URL("data:image/jpeg;base64,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")`
    mainContainer.append(picture2)

    let poyabzal = document.createElement("h1")
    poyabzal.classList.add("poyabzal")
    poyabzal.innerHTML = "Poyabzal savdosi >"
    mainContainer.append(poyabzal)


    let count2 = 0;

    for (let i = 0; i < productData.length; i++) {

        if (productData[i].category === "poyabzal") {

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

            count2++

            // Adding other attributes and elements
            mainBox.setAttribute("id", productData[i].id)
            let category = productData[i].category
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
                location.pathname = "./ProductDraw/front/product.html";
            });


        }
        if (count2 === 5) {
            break
        }


    }



}


createProducts();


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
    location.pathname = "./categories/Parvarish/P.html"
})


let Like = document.querySelector(".Like")
let Bag = document.querySelector(".Bag")

Like.addEventListener("click", () => {

    location.pathname = "./Like/like.html"
})

Bag.addEventListener("click", () => {

    location.pathname = "./Bag/bag.html"
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


        if(filtered.length == 0){
            containerSearch.style.display = "none"
        }
         else if(filtered.length == 100){
             containerSearch.style.display = "none"
        }
        else if(filtered.length > 0 || filtered.length < 100){
             containerSearch.style.display = "block"
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

















