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

let logo = document.querySelector(".buttonLogo")

logo.addEventListener("click", () => {
  location.pathname = "./index.html"
})


let bagData = JSON.parse(localStorage.getItem("InfoBag")) || [];
let box1 = document.querySelector(".box1");

// Render each item in bagData
for (let i = 0; i < bagData.length; i++) {
  let item = bagData[i];
  let BagHTML = ` 
    <div class="mainPart" data-id="${item.id}">
      <div class="where">
          <p>Uzum market omborida</p>
          <p class="p">1-noyabr orasida yetkazamiz</p>
      </div>
      <div class="parts">
        <div class="one">
          <img src="${item.images[0]}" alt="">
        </div>
        <div class="two">
          <h2>${item.title}</h2>
          <div class="counter">
            <p class="minus" data-action="minus">-</p>
            <p class="count" data-counter>1</p>
            <p class="plus" data-action="plus">+</p>
          </div>
        </div>
        <div class="three">
          <div class="delete">
            <i class='bx bx-message-square-x remover'></i>
            <p class="remover" data-id="${item.id}">Yo'q qilish</p>
          </div>
          <div class="price">
            <div class="salePrice">${item.saleprice}</div>
            <div class="realPrice">${item.realprice} so'm</div>
          </div>
        </div>
      </div>
    </div>`
  box1.insertAdjacentHTML("afterbegin", BagHTML);
}

// Event listener for updating item counts
window.addEventListener("click", (event) => {
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    let mainCounter = event.target.closest(".counter");
    let counter = mainCounter.querySelector('[data-counter]');
    let count = parseInt(counter.innerHTML);

    if (event.target.dataset.action === 'plus') {
      count++;
    } else if (event.target.dataset.action === 'minus' && count > 1) {
      count--;

     
    }
    counter.innerHTML = count;


    allPrice();
  }
});


function allPrice() {
  let totalReal = document.querySelector(".Realprice");
  let totalSale = document.querySelector(".priceSale");
  let totalProfit = document.querySelector(".allProfit");

  let realSum = 0;
  let saleSum = 0;

  bagData.forEach(item => {
    let countElement = document.querySelector(`.mainPart[data-id="${item.id}"] .count`);
    if (countElement) {
      // Remove spaces from prices and count before parsing
      let count = parseInt(countElement.innerHTML.replace(/\s/g, '')) || 0;
      let realPrice = parseFloat(item.realprice.replace(/\s/g, '')) || 0;
      let salePrice = parseFloat(item.saleprice.replace(/\s/g, '')) || 0;

      realSum += count * realPrice;
      saleSum += count * salePrice;
    }
  });

  // Display results, ensuring the values are numbers
  totalReal.innerHTML = realSum.toLocaleString('en-US') + " so'm";
  totalSale.innerHTML = saleSum.toLocaleString('en-US') + " so'm";
  totalProfit.innerHTML = `${(realSum - saleSum).toLocaleString('en-US')}  so'm`;
}

allPrice();






box1.addEventListener("click", (event) => {
  if (event.target.classList.contains("remover")) {
    let itemId = event.target.dataset.id;

    // Remove item from bagData array and update localStorage
    bagData = bagData.filter(item => item.id !== itemId);
    localStorage.setItem("InfoBag", JSON.stringify(bagData));

    // Remove item from the DOM
    event.target.closest(".mainPart").remove();
    howMany.innerHTML--
    count.innerHTML--

    allPrice();


  }
});

let checkbox = document.querySelector(".checkbox")
let sign = document.querySelector(".buttonSign")


checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    sign.style.backgroundColor = " rgb(95, 59, 203)"
    sign.style.color = "white"
  } else {
    sign.style.backgroundColor = "lightgray"
    sign.style.color = "gray"
  }
})

let howMany = document.querySelector(".item_many")
let count = document.querySelector(".count")

howMany.innerHTML = bagData.length
count.innerHTML = howMany.innerHTML

