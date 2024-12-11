let drawData = JSON.parse(localStorage.getItem("productDraw"));

let productBox = document.querySelector(".productConteiner");
console.log(drawData.formonths);
console.log(drawData.category);

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


let itemHTML = ` 
<div class="productbox">
      <div class="leftbox">
        <div class="info">
          <h1>${drawData.title}</h1>
          <div class="star">
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <h2>${drawData.score}</h2>
          </div>
        </div>

        <div class="imagebox">
          <div class="miniimages"></div>
          <div class="big1"></div>
          <div class="big2"></div>
        </div>
        <div class="score">
          <h1>${drawData.score}</h1>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
        </div>
        <div class="description">
        <h1>Mahsulot tasnifi</h1>
        <p>${drawData.description}</p>
        </div>

      </div>
      <div class="rightbox">
        <div class="firstbox">
          <div class="price">
            <h2>${drawData.saleprice}</h2>
            <h3>${drawData.realprice} so'm</h3>
            <div class="salebox">
              <p>-${drawData.salepercent}%</p>
            </div>
          </div>
          <div class="buttons">
            <button class="monthprice"><div class="yellow">Oyiga <p>${drawData.formonths}</p> so'mdan</div> muddatli to'lov ></button>
            <div class="LikeBuy">
              <button class="buy">1 klikda xarid qilish</button>
              <button class="like"><i class='bx bx-heart  '></i></button>
            </div>
            <button class="no adding">Savatga qo'shish</button>
            <div class="count">
              <div class="howmanyLeft">
                <i class='bx bx-check'></i>
                <p class="stillThere">Sotuvda ${drawData.count} dona bor</p>
              </div>
              <div class="howmanybought">
                <i class='bx bx-shopping-bag'></i>
                <p> Bu haftada ${drawData.howmanytaken} kishi sotib oldi</p>
              </div>
            </div>
          </div>
        </div>
        <div class="secondbox">
          <div class="order">
            <h3>Yetkazib berish 1 kundan boshlab</h3>
            <p>Uzum buyurtmalarni topshirish punktida yoki kuryer orqali</p>
          </div>
          <div class="card">
            <h3>Qulay usulda xavfsiz toʻlov</h3>
            <p>Karta orqali, naqd pulda yoki boʻlib toʻlang</p>
            <div class="cardImages">
             <div class="imgcard img1"></div>
             <div class="imgcard img2"></div>
             <div class="imgcard img3"></div>
             <div class="imgcard img4"></div>
             <div class="imgcard img5"></div>
             <div class="imgcard img6"></div>
            </div>
          </div>
          <div class="takingBack">
            <h3>Qaytarish oson va tez</h3>
            <p>Tovarlarni 10 kun ichida qabul qilamiz va darhol pulini qaytaramiz.</p>
          </div>
        </div>
      </div>
    </div>
`;
productBox.insertAdjacentHTML("beforeend", itemHTML);

// console.log(itemHTML);

let There = document.querySelector(".stillThere")

if (drawData.count.innerHTML < 5) {
  There.innerHTML = `Bor-yo'g'i ${drawData.count} qoldi `
}



let logo = document.querySelector(".buttonLogo")

logo.addEventListener("click", () => {
  location.pathname = "./index.html"
})

let productbox = document.querySelector(".productbox")

LikeMassive = []



let obj = {
  id: drawData.id,
  title: drawData.title,
  realprice: drawData.realprice,
  saleprice: drawData.saleprice,
  salepercent: drawData.salepercent,
  formonths: drawData.formonths,
  howmanytaken: drawData.howmanytaken,
  description: drawData.description,
  count: drawData.count,
  score: drawData.score,
  images: drawData.images
 
};




let Likebutton = document.querySelector(".like")
let heart = document.querySelector(".bx-heart")

Likebutton.addEventListener("click", () => {

  if (heart.classList.contains("bx-heart")) {
    heart.classList.remove("bx-heart")
    heart.classList.add("bxs-heart")
    LikeMassive.push(obj)


  } else {
    heart.classList.add("bx-heart")
    heart.classList.remove("bxs-heart")
    LikeMassive = LikeMassive.filter(item =>
      item.id != obj.id
    )
  }
})

// localStorage.setItem("LikeDraw", JSON.stringify(LikeMassive))


let bag = document.querySelector(".adding");

let InfoBag = JSON.parse(localStorage.getItem("InfoBag")) || [];  // Retrieve existing data or initialize empty array

bag.addEventListener("click", () => {
  let bagInfo = {
    id: drawData.id,
    title: drawData.title,
    realprice: drawData.realprice,
    saleprice: drawData.saleprice,
    images: drawData.images
    
  };

  InfoBag.push(bagInfo);
  
  // Update localStorage with new InfoBag content
  localStorage.setItem("InfoBag", JSON.stringify(InfoBag));
  
  console.log(bagInfo);
});

let addBag = document.querySelector(".adding")

addBag.addEventListener("click", () =>{

  if(addBag.classList.contains("no")){
    addBag.classList.remove("no")
    addBag.classList.add("yes")
    addBag.innerHTML = "Savatga qo'shildi"
    addBag.style.backgroundColor = "white"
    addBag.style.color = "blue"
    addBag.style.borderColor = "blue"
  }
})




let imagebox = document.querySelector(".imagebox")
let miniimages = document.querySelector(".miniimages")
let big1 = document.querySelector(".big1")
let big2 = document.querySelector(".big2")

let image1 = document.createElement("img")
image1.setAttribute("src", drawData.images[1])

big1.append(image1)

let image2 = document.createElement("img")
image2.setAttribute("src", drawData.images[2])

big2.append(image2)

for(let i = 3; i < drawData.images.length; i++){
  
  let miniimgs = document.createElement("div")
  let miniimg = document.createElement("img")

  miniimgs.classList.add("miniimgs")
  miniimg.classList.add("miniimg")
  
  miniimg.setAttribute("src", drawData.images[i])
  
  miniimages.append(miniimgs)
  miniimgs.append(miniimg)

  let active = "";
  
  if(drawData.images.length == 1){
    big2.style.display = "none"
    imagebox.style.justifyContent = "start"
  }
  
  
  miniimg.addEventListener("click", () =>{
    active = image2.getAttribute("src")
    image2.setAttribute("src", miniimg.getAttribute("src"))
    miniimg.setAttribute("src", active)
  

    
  
  })
  
}








