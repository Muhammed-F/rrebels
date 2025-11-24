// Product Data with size-specific Stripe URLs
const products = [
    { 
        id: '1', 
        name: 'REBEL Oversized Hoodie', 
        price: 1000, 
        image: 'images/generated_images/Black_hoodie_product_image_774f8777.png', 
        category: 'hoodies',
        description: 'Premium oversized hoodie with bold graphics. Ultra-comfortable fabric perfect for street style.',
        checkoutUrls: {
            S: "https://buy.stripe.com/test_3cI28s05CboYaD74ce6Na03",
            M: "https://buy.stripe.com/test_3cI28s05CboYaD74ce6Na03",
            L: "https://buy.stripe.com/test_3cI28s05CboYaD74ce6Na03",
        }
    },
    { 
        id: '2', 
        name: 'CRIMSON Statement Hoodie', 
        price: 94.99, 
        image: 'images/generated_images/Red_hoodie_product_image_47c17143.png', 
        category: 'hoodies',
        description: 'Bold red hoodie that makes a statement. Premium cotton blend with modern fit.',
        checkoutUrls: {
            S: "https://example.com/checkout?product=crimson-hoodie&size=S",
            M: "https://example.com/checkout?product=crimson-hoodie&size=M",
            L: "https://example.com/checkout?product=crimson-hoodie&size=L"
        }
    },
    { 
        id: '3', 
        name: 'SHADOW Essential Hoodie', 
        price: 84.99, 
        image: 'images/generated_images/Gray_hoodie_product_image_edcb9f2a.png', 
        category: 'hoodies',
        description: 'Versatile gray hoodie for everyday wear. Soft, durable, and effortlessly stylish.',
        checkoutUrls: {
            S: "https://example.com/checkout?product=shadow-hoodie&size=S",
            M: "https://example.com/checkout?product=shadow-hoodie&size=M",
            L: "https://example.com/checkout?product=shadow-hoodie&size=L"
        }
    },
    { 
        id: '4', 
        name: 'GHOST Minimalist Hoodie', 
        price: 89.99, 
        image: 'images/generated_images/White_hoodie_product_image_cfbb8ac5.png', 
        category: 'hoodies',
        description: 'Clean white hoodie with minimalist design. Perfect canvas for your urban style.',
        checkoutUrls: {
            S: "https://example.com/checkout?product=ghost-hoodie&size=S",
            M: "https://example.com/checkout?product=ghost-hoodie&size=M",
            L: "https://example.com/checkout?product=ghost-hoodie&size=L"
        }
    },
    { 
        id: '5', 
        name: 'VOID Statement Tee', 
        price: 39.99, 
        image: 'images/generated_images/Black_t-shirt_product_image_49a5fad0.png', 
        category: 't-shirts',
        description: 'Classic black tee with attitude. Premium cotton for all-day comfort.',
        checkoutUrls: {
            S: "https://example.com/checkout?product=void-tee&size=S",
            M: "https://example.com/checkout?product=void-tee&size=M",
            L: "https://example.com/checkout?product=void-tee&size=L"
        }
    },
    { 
        id: '6', 
        name: 'RAGE Essential Tee', 
        price: 44.99, 
        image: 'images/generated_images/Red_t-shirt_product_image_19a60a6f.png', 
        category: 't-shirts',
        description: 'Bold red tee for those who stand out. Soft fabric with vibrant color.',
        checkoutUrls: {
            S: "https://example.com/checkout?product=rage-tee&size=S",
            M: "https://example.com/checkout?product=rage-tee&size=M",
            L: "https://example.com/checkout?product=rage-tee&size=L"
        }
    },
    { 
        id: '7', 
        name: 'PURE Classic Tee', 
        price: 39.99, 
        image: 'images/generated_images/White_t-shirt_product_image_3de4e687.png', 
        category: 't-shirts',
        description: 'Essential white tee for any wardrobe. Clean, comfortable, and versatile.',
        checkoutUrls: {
            S: "https://example.com/checkout?product=pure-tee&size=S",
            M: "https://example.com/checkout?product=pure-tee&size=M",
            L: "https://example.com/checkout?product=pure-tee&size=L"
        }
    },
    { 
        id: '8', 
        name: 'STORM Urban Tee', 
        price: 42.99, 
        image: 'images/generated_images/Gray_t-shirt_product_image_66d3ad9e.png', 
        category: 't-shirts',
        description: 'Urban gray tee with modern fit. Perfect balance of style and comfort.',
        checkoutUrls: {
            S: "https://example.com/checkout?product=storm-tee&size=S",
            M: "https://example.com/checkout?product=storm-tee&size=M",
            L: "https://example.com/checkout?product=storm-tee&size=L"
        }
    },
    { 
        id: '9', 
        name: 'NIGHT Tactical Pants', 
        price: 119.99, 
        image: 'images/generated_images/Black_pants_product_image_b203af13.png', 
        category: 'pants',
        description: 'Tactical-inspired pants in sleek black. Multiple pockets and durable construction.',
        checkoutUrls: {
            S: "https://example.com/checkout?product=night-pants&size=S",
            M: "https://example.com/checkout?product=night-pants&size=M",
            L: "https://example.com/checkout?product=night-pants&size=L"
        }
    },
    { 
        id: '10', 
        name: 'CONCRETE Cargo Pants', 
        price: 114.99, 
        image: 'images/generated_images/Gray_pants_product_image_3fa3c425.png', 
        category: 'pants',
        description: 'Versatile cargo pants in urban gray. Functional design meets street style.',
        checkoutUrls: {
            S: "https://example.com/checkout?product=concrete-pants&size=S",
            M: "https://example.com/checkout?product=concrete-pants&size=M",
            L: "https://example.com/checkout?product=concrete-pants&size=L"
        }
    },
    { 
        id: '11', 
        name: 'DESERT Utility Pants', 
        price: 109.99, 
        image: 'images/generated_images/Beige_pants_product_image_26a1e047.png', 
        category: 'pants',
        description: 'Utility pants in desert beige. Rugged style with modern comfort.',
        checkoutUrls: {
            S: "https://example.com/checkout?product=desert-pants&size=S",
            M: "https://example.com/checkout?product=desert-pants&size=M",
            L: "https://example.com/checkout?product=desert-pants&size=L"
        }
    },
    { 
        id: '12', 
        name: 'COMBAT Field Pants', 
        price: 124.99, 
        image: 'images/generated_images/Olive_pants_product_image_ee654c9e.png', 
        category: 'pants',
        description: 'Military-inspired field pants in olive. Premium quality with tactical details.',
        checkoutUrls: {
            S: "https://example.com/checkout?product=combat-pants&size=S",
            M: "https://example.com/checkout?product=combat-pants&size=M",
            L: "https://example.com/checkout?product=combat-pants&size=L"
        }
    }
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

// Modal Elements (will be initialized after DOM loads)
let modal;
let modalClose;
let modalProductName;
let modalProductDescription;
let modalBuyBtn;
let sizeButtons;

let selectedProduct = null;
let selectedSize = null;

// Open Modal with Product Details
function buyProduct(productId) {
    selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) {
        alert("Error: Product not found.");
        return;
    }
    
    // Set product details in modal
    modalProductName.textContent = selectedProduct.name;
    modalProductDescription.textContent = selectedProduct.description;
    
    // Reset size selection
    selectedSize = null;
    sizeButtons.forEach(btn => btn.classList.remove('selected'));
    modalBuyBtn.disabled = true;
    
    // Show modal
    modal.style.display = 'block';
}

// Close Modal
function closeModal() {
    modal.style.display = 'none';
    selectedProduct = null;
    selectedSize = null;
}

// Initialize modal event listeners (called after DOM loads)
function initializeModal() {
    // Size Selection
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            selectedSize = this.getAttribute('data-size');
            modalBuyBtn.disabled = false;
        });
    });

    // Buy Button in Modal
    modalBuyBtn.addEventListener('click', function() {
        if (!selectedProduct || !selectedSize) {
            alert("Please select a size.");
            return;
        }
        
        const checkoutUrl = selectedProduct.checkoutUrls[selectedSize];
        if (!checkoutUrl || checkoutUrl === "PASTE_YOUR_STRIPE_LINK_HERE") {
            alert("Error: Checkout URL not configured for this size.");
            return;
        }
        
        window.open(checkoutUrl, "_blank");
        closeModal();
    });

    // Close modal on X click
    modalClose.addEventListener('click', closeModal);

    // Close modal on outside click
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
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
    // Initialize modal elements
    modal = document.getElementById('sizeModal');
    modalClose = document.querySelector('.modal-close');
    modalProductName = document.getElementById('modalProductName');
    modalProductDescription = document.getElementById('modalProductDescription');
    modalBuyBtn = document.getElementById('modalBuyBtn');
    sizeButtons = document.querySelectorAll('.size-btn');
    
    // Initialize modal event listeners
    initializeModal();
    
    // Render products
    renderProducts();
});


             
