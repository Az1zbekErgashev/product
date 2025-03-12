$(document).ready(function () {
  const products = [
    {
      name: "Knife Sharpener Tool Professional",
      price: "3 000 000 сум",
      availability: "В наличии",
      seller: "Media Park",
      location: "г. Ташкент",
      badge: "-15%",
      img: "https://m.media-amazon.com/images/I/71sBGF1rv3L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "Knife Sharpener Tool Professional",
      price: "3 000 000 сум",
      availability: "В наличии",
      seller: "Media Park",
      location: "г. Ташкент",
      img: "https://m.media-amazon.com/images/I/71sBGF1rv3L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "Knife Sharpener Tool Professional",
      price: "3 000 000 сум",
      availability: "Под заказ",
      seller: "Media Park",
      location: "г. Ташкент",
      badge: "-15%",
      img: "https://m.media-amazon.com/images/I/71sBGF1rv3L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "Knife Sharpener Tool Professional",
      price: "3 000 000 сум",
      availability: "Нет в наличии",
      seller: "Media Park",
      location: "г. Ташкент",
      img: "https://m.media-amazon.com/images/I/71sBGF1rv3L._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  function generateProductHTML(product) {
    return `
          <div class="product">
              ${
                product.badge
                  ? `<div class="product-badge">${product.badge}</div>`
                  : ""
              }
              <img src="${product.img}" alt="${product.name}">
              <h2>${product.name}</h2>
              <div class="product-availability">${product.availability}</div>
              <div class="price">${product.price}</div>
              <div class="product-seller">
                  <span>${product.seller}</span>
                  <span>${product.location}</span>
              </div>
          </div>
      `;
  }

  $(".products-grid").html(products.map(generateProductHTML).join(""));
});
