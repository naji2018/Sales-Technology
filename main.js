
const galleryImages = [
    {
        "src": "./assets/gallery/image1.jpg",
        "alt": "image 1"
    },
    {
        "src": "./assets/gallery/image2.jpg",
        "alt": "image 2"
    },
    {
        "src": "./assets/gallery/image3.jpg",
        "alt": "image 3"
    }
    
];

const productsNew = [
    {
      "title": "AstroFiction",
      "author": "John Doe",
      "price": 49.9,
      "image": "./assets/products/img6.png"
    },
    {
      "title": "Space Odissey",
      "author": "Marie Anne",
      "price": 35,
      "image": "./assets/products/img1.png"
    },
    {
      "title": "Doomed City",
      "author": "Jason Cobert",
      "price": 0,
      "image": "./assets/products/img2.png"
    },
    {
      "title": "Black Dog",
      "author": "John Doe",
      "price": 85.35,
      "image": "./assets/products/img3.png"
    },
    {
      "title": "My Little Robot",
      "author": "Pedro Paulo",
      "price": 0,
      "image": "./assets/products/img5.png"
    },
    {
      "title": "Garden Girl",
      "author": "Ankit Patel",
      "price": 45,
      "image": "./assets/products/img4.png"
    }
  ]


function menuHandler() {

    document.querySelector("#open-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});
document.querySelector("#close-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});
}
function CelsiusToFahr(celsius) {
    return (celsius * 9/5) + 32;
}

function greetingHandler() {
    let currentHour= new Date().getHours();

let greetingText;
if (currentHour < 12) {
    greetingText = "Good Morning";
}
else if (currentHour < 18) {
    greetingText = "Good Afternoon";    
}
else {
    greetingText = "Good Evening";
}   
// Weather data
// Assuming we have a weather condition and location        
const WeatherCoondition = "SUNNY";
const userLocation = "ZAGREB";
let temperature = 30; // Celsius
let fahrText = `The weather is ${WeatherCoondition} in ${userLocation} and it's ${CelsiusToFahr(temperature).toFixed(1)}°F.`;
let celsiusText = `The weather is ${WeatherCoondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;


document.querySelector(".weather-group").addEventListener("click", function(e) {

    if (e.target.id == "celsius"){
        document.querySelector("p#weather").innerHTML = celsiusText;
    }
    else if (e.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = fahrText;

     }
    
});  
    

}

   
function clockHandler() {
    let localTime = new Date();

setInterval(() => {

    localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, '0');
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, '0');
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, '0');
    }, 1000);
}

// Gallery section

function galleryHandler() {

let mainImageElement = document.querySelector("#gallery img");
let thumbnails = document.querySelector("#gallery .thumbnails");

// Set the main image to the first gallery image
mainImageElement.src = galleryImages[0].src;
mainImageElement.alt = galleryImages[0].alt;


galleryImages.forEach((image, index) => {

    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 1 ? true : false; // Set the first thumbnail as selected, others as not selected

    thumb.addEventListener("click", function() {
        mainImageElement.src = image.src;
        mainImageElement.alt = image.alt;

        // Update the selected state of thumbnails
        thumbnails.querySelectorAll("img").forEach(thumb => {
            thumb.dataset.selected = thumb === this ? true : false;
        });
    });

    thumbnails.appendChild(thumb);
   
});
}



/// Prodact section

//   <div class="product-item">
//              <img src="./assets/products/img6.png" alt="AstroFiction">
//              <div class="product-details">
//                 <h3 class="product-title">AstroFiction</h3>
//                 <p class="product-author">John Doe</p>
//                 <p class="price-title">Price</p>
//                 <p class="product-price">$ 49.90</p>
//              </div>
//           </div>


function productHandler() {
 

    let productSection = document.querySelector(".products-area");

    productsNew.forEach(function(productsNew, index){

        let productElm = document.createElement("div");
        productElm.classList.add("product-item");

        let productImage = document.createElement("img");
        productImage.src = productsNew.image;
        productImage.alt = "Image for " + productsNew.title;

        productElm.append(productImage);

        productSection.append(productElm);
    });

}



///page load event listener
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productHandler();