const productList = [
    {
        name: "Souvenir",
        code: "souvenir",
        products: [
            {
                name: "pajangan multilayer",
                img: "assets/img/product/souvenir/1.png",
                price: 98500
            },
            {
                name: "gantungan kunci custom",
                img: "assets/img/product/souvenir/2.jpg",
                price: 15000
            },
            {
                name: "gantungan kunci alfabet",
                img: "assets/img/product/souvenir/3.png",
                price: 15000
            },
            {
                name: "tatakan gelas motif",
                img: "assets/img/product/souvenir/4.jpg",
                price: 26000
            },
        ]
    },
    {
        name: "Peralatan Tulis",
        code: "atk",
        products: [
            {
                name: "binder book wood cover",
                img: "assets/img/product/atk/1.png",
                price: 98500
            },
            {
                name: "pensil kayu custom nama",
                img: "assets/img/product/atk/2.png",
                price: 15000
            },
            {
                name: "tempat pensil kayu custom",
                img: "assets/img/product/atk/3.png",
                price: 72000
            },
            {
                name: "binder loose leaf",
                img: "assets/img/product/atk/4.jpg",
                price: 88200
            },
        ]
    },
    {
        name: "Organizer",
        code: "organizer",
        products: [
            {
                name: "kotak perhiasan unik",
                img: "assets/img/product/organizer/1.png",
                price: 100000
            },
            {
                name: "box hampers kayu",
                img: "assets/img/product/organizer/2.png",
                price: 150000
            },
            {
                name: "tatakan gelas motif",
                img: "assets/img/product/souvenir/4.jpg",
                price: 26000
            },
            {
                name: "tempat tisu kayu custom",
                img: "assets/img/product/organizer/4.png",
                price: 90000
            },
        ]
    },
]

// Get product by Code
const getProductByCode = (code) => {
    return productList.find((product) => product.code === code);
}

const createProductCard = (category) => {
    productList.forEach((product) => {
        if (product.code === category) {
            product.products.forEach((item) => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                const productImgContainer = document.createElement("div");
                productImgContainer.classList.add("product-img-container");

                const productImg = document.createElement("img");
                productImg.src = item.img;
                productImg.alt = item.name;
                productImg.classList.add("product-image");

                const productTitle = document.createElement("div");
                productTitle.classList.add("product-title");
                productTitle.textContent = item.name;

                const productPrice = document.createElement("div");
                productPrice.classList.add("product-price");

                // Create price
                const price = new Intl.NumberFormat(
                    "id-ID"
                ).format(item.price);
                productPrice.textContent = `Rp. ${price}`;

                productImgContainer.appendChild(productImg);
                productCard.appendChild(productImgContainer);
                productCard.appendChild(productTitle);
                productCard.appendChild(productPrice);
                productContainer.appendChild(productCard);
            });
        }
    })
}