let $ = document;
let heroBtn = $.getElementById("btn-hero");

function infoGenerator() {
  window.location.href = "product.html";
}

heroBtn.addEventListener("click", infoGenerator);
