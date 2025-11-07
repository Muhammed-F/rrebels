// Product Data with placeholders for Stripe URLs
const products = [
    { id: '1', name: 'REBEL Oversized Hoodie', price: 1000, image: 'images/generated_images/Black_hoodie_product_image_774f8777.png', category: 'hoodies', checkoutUrl: "https://buy.stripe.com/test_3cI28s05CboYaD74ce6Na03" },
    { id: '2', name: 'CRIMSON Statement Hoodie', price: 94.99, image: 'images/generated_images/Red_hoodie_product_image_47c17143.png', category: 'hoodies', checkoutUrl: "PASTE_YOUR_STRIPE_LINK_HERE" },
    { id: '3', name: 'SHADOW Essential Hoodie', price: 84.99, image: 'images/generated_images/Gray_hoodie_product_image_edcb9f2a.png', category: 'hoodies', checkoutUrl: "PASTE_YOUR_STRIPE_LINK_HERE" },
    { id: '4', name: 'GHOST Minimalist Hoodie', price: 89.99, image: 'images/generated_images/White_hoodie_product_image_cfbb8ac5.png', category: 'hoodies', checkoutUrl: "PASTE_YOUR_STRIPE_LINK_HERE" },
    { id: '5', name: 'VOID Statement Tee', price: 39.99, image: 'images/generated_images/Black_t-shirt_product_image_49a5fad0.png', category: 't-shirts', checkoutUrl: "PASTE_YOUR_STRIPE_LINK_HERE" },
    { id: '6', name: 'RAGE Essential Tee', price: 44.99, image: 'images/generated_images/Red_t-shirt_product_image_19a60a6f.png', category: 't-shirts', checkoutUrl: "PASTE_YOUR_STRIPE_LINK_HERE" },
    { id: '7', name: 'PURE Classic Tee', price: 39.99, image: 'images/generated_images/White_t-shirt_product_image_3de4e687.png', category: 't-shirts', checkoutUrl: "PASTE_YOUR_STRIPE_LINK_HERE" },
    { id: '8', name: 'STORM Urban Tee', price: 42.99, image: 'images/generated_images/Gray_t-shirt_product_image_66d3ad9e.png', category: 't-shirts', checkoutUrl: "PASTE_YOUR_STRIPE_LINK_HERE" },
    { id: '9', name: 'NIGHT Tactical Pants', price: 119.99, image: 'images/generated_images/Black_pants_product_image_b203af13.png', category: 'pants', checkoutUrl: "PASTE_YOUR_STRIPE_LINK_HERE" },
    { id: '10', name: 'CONCRETE Cargo Pants', price: 114.99, image: 'images/generated_images/Gray_pants_product_image_3fa3c425.png', category: 'pants', checkoutUrl: "PASTE_YOUR_STRIPE_LINK_HERE" },
    { id: '11', name: 'DESERT Utility Pants', price: 109.99, image: 'images/generated_images/Beige_pants_product_image_26a1e047.png', category: 'pants', checkoutUrl: "PASTE_YOUR_STRIPE_LINK_HERE" },
    { id: '12', name: 'COMBAT Field Pants', price: 124.99, image: 'images/generated_images/Olive_pants_product_image_ee654c9e.png', category: 'pants', checkoutUrl: "PASTE_YOUR_STRIPE_LINK_HERE" }
];

// Navigation Scroll Effect
let navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// Smooth Scroll
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        mobileMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Render Products
function renderProducts(filter = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name} - ${product.category}">
            </div>
            <div class="product-info">
                <p class="product-category">${product.category.toUpperCase()}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">SEK ${product.price.toFixed(2)}</p>
                <button class="btn btn-primary" onclick="buyProduct('${product.id}')">Buy Now</button>
            </div>`;
        productsGrid.appendChild(productCard);
    });
}

// ✅ Buy Product: Open Stripe URL directly
function buyProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.checkoutUrl) {
        alert("Error: Product checkout URL not found.");
        return;
    }
    window.open(product.checkoutUrl, "_blank");
}

// Filter Buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        renderProducts(this.getAttribute('data-filter'));
    });
});

// Footer Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Init
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});

             
