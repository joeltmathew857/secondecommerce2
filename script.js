 let products = {
 data:[{
        productname:"regular white t-shirt",
        category:"topwear",
        price: "40",
    Image: "white-tshirt.webp",
    },
    {
    productname:"regular black t-shirt",
    category:"bottomwear",
    price: "60",
    Image: "black-tshirt.webp",
    },
    {
    productname:"sport smartwatch",
    category:"watch",
    price: "99",
    Image: "nike-apple.jpeg",
    },  
    {
    productname:"Basic knitted top",
    category:"topwear",
    price: "29",
    Image: "nike.webp",
    },
    {
        productname:"black leather",
        category:"jacket",
        price: "129",
        Image: "nikewe.webp",
        },
    {
     productname:"black leather",
     category:"jacket",
     price: "129",
      Image: "nikewe.webp",
     },
     {
        productname:"black-white",
        category:"bottom",
        price: "89",
         Image: "pink.webp",
    },
    {
      productname:"brown men's jacket",
      category:"jacket",
      price: "189",
     Image: "brown.webp",
    },
    {
     productname:"comfy gray pants",
     category:"bottomwear",
     price: "49",
     Image: "grey.webp",
     },
  ],
};

for(let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card","i.category");
    let imgcotainer = document.createElement("div");
    imgcotainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgcotainer.appendChild(image);
    card.appendChild(imageContainer);

    document.getElementById("products").appendChild(card);
}