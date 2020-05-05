const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Tasks 1-2:


//cta:

let main = document.querySelector(".cta-text h1");
main.textContent = siteContent.cta.h1;

let startButton = main.nextElementSibling;
startButton.textContent = siteContent.cta.button;

let circleImage = document.getElementById("cta-img");
circleImage.setAttribute("src", siteContent["cta"]["img-src"]);


//main content:

let middleHeader1 = document.querySelectorAll(".top-content h4");
middleHeader1[0].textContent = siteContent["main-content"]["features-h4"];
middleHeader1[1].textContent = siteContent["main-content"]["about-h4"];

let middleContent1 = document.querySelectorAll(".top-content p");
middleContent1[0].textContent = siteContent["main-content"]["features-content"];
middleContent1[1].textContent = siteContent["main-content"]["about-content"];

let middlePhoto = document.getElementById("middle-img");
middlePhoto.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let middleHeader2 = document.querySelectorAll(".bottom-content h4");
middleHeader2[0].textContent = siteContent["main-content"]["services-h4"];
middleHeader2[1].textContent = siteContent["main-content"]["product-h4"];
middleHeader2[2].textContent = siteContent["main-content"]["vision-h4"];

let middleContent2 = document.querySelectorAll(".bottom-content p");
middleContent2[0].textContent = siteContent["main-content"]["services-content"];
middleContent2[1].textContent = siteContent["main-content"]["product-content"];
middleContent2[2].textContent = siteContent["main-content"]["vision-content"];

//contact:

let conPart = document.querySelector(".contact");

let conHeader = conPart.firstElementChild;
conHeader.textContent = siteContent.contact["contact-h4"];

let conAddress = conHeader.nextElementSibling;
conAddress.textContent = siteContent.contact.address;

let conPhone = conAddress.nextElementSibling;
conPhone.textContent = siteContent.contact.phone;

let conEmail = conPhone.nextElementSibling;
conEmail.textContent = siteContent.contact.email;

//footer:

let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];

//Nav + Task 3:

let navElements = document.querySelectorAll("a");
navElements.forEach(function (item, i) {
item.textContent = siteContent["nav"][`nav-item-${i + 1}`];
item.style.color = "green";
}); 

let navFaq = document.createElement("a");
navFaq.textContent = "FAQ";
navFaq.classList.add("a");
let parentElement = document.querySelector("nav");
parentElement.prepend(navFaq);

let navPrivacy = document.createElement("a");
navPrivacy.textContent = "Privacy Policy";
navPrivacy.classList.add("a");
parentElement.append(navPrivacy);
