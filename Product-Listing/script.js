const products = [
    {
        name: "Gaming Laptop",
        category: "Electronics",
        price: 85000,
        image: "https://picsum.photos/300/220?random=1"
    },
    {
        name: "Smartphone",
        category: "Electronics",
        price: 45000,
        image: "https://picsum.photos/300/220?random=2"
    },
    {
        name: "Wireless Headphones",
        category: "Electronics",
        price: 3500,
        image: "https://picsum.photos/300/220?random=3"
    },
    {
        name: "Smart Watch",
        category: "Accessories",
        price: 5500,
        image: "https://picsum.photos/300/220?random=4"
    },
    {
        name: "Sports Shoes",
        category: "Fashion",
        price: 2800,
        image: "https://picsum.photos/300/220?random=5"
    },
    {
        name: "Backpack",
        category: "Accessories",
        price: 1800,
        image: "https://picsum.photos/300/220?random=6"
    },
    {
        name: "Sunglasses",
        category: "Accessories",
        price: 1200,
        image: "https://picsum.photos/300/220?random=7"
    },
    {
        name: "DSLR Camera",
        category: "Electronics",
        price: 65000,
        image: "https://picsum.photos/300/220?random=8"
    },
    {
        name: "Gaming Mouse",
        category: "Electronics",
        price: 1500,
        image: "https://picsum.photos/300/220?random=9"
    },
    {
        name: "Mechanical Keyboard",
        category: "Electronics",
        price: 3200,
        image: "https://picsum.photos/300/220?random=10"
    },
    {
        name: "T-Shirt",
        category: "Fashion",
        price: 900,
        image: "https://picsum.photos/300/220?random=11"
    },
    {
        name: "Winter Jacket",
        category: "Fashion",
        price: 4200,
        image: "https://picsum.photos/300/220?random=12"
    }
];

const container = document.getElementById("productContainer");
const search = document.getElementById("search");
const category = document.getElementById("category");
const sort = document.getElementById("sort");

function displayProducts(list) {

    container.innerHTML = "";

    list.forEach(product => {

        container.innerHTML += `
        <div class="card">

            <img src="${product.image}" alt="${product.name}">

            <div class="card-content">

                <h2>${product.name}</h2>

                <span class="category">${product.category}</span>

                <div class="rating">
                    ⭐⭐⭐⭐⭐
                </div>

                <p class="price">₹${product.price.toLocaleString()}</p>

                <button class="buy-btn">
                    Add to Cart
                </button>

            </div>

        </div>
        `;

    });

}

displayProducts(products);

function filterProducts() {

    let filtered = [...products];

    // Search
    const keyword = search.value.toLowerCase();

    filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(keyword)
    );

    // Category
    if (category.value !== "all") {

        filtered = filtered.filter(item =>
            item.category === category.value
        );

    }

    // Sort
    if (sort.value === "low") {

        filtered.sort((a, b) => a.price - b.price);

    }

    if (sort.value === "high") {

        filtered.sort((a, b) => b.price - a.price);

    }

    displayProducts(filtered);

}

search.addEventListener("keyup", filterProducts);

category.addEventListener("change", filterProducts);

sort.addEventListener("change", filterProducts);