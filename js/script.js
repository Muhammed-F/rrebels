// Product Data
const products = [
    {
        id: '1',
        name: 'REBEL Oversized Hoodie',
        price: 89.99,
        image: 'images/generated_images/Black_hoodie_product_image_774f8777.png',
        category: 'hoodies'
    },
    {
        id: '2',
        name: 'CRIMSON Statement Hoodie',
        price: 94.99,
        image: 'images/generated_images/Red_hoodie_product_image_47c17143.png',
        category: 'hoodies'
    },
    {
        id: '3',
        name: 'SHADOW Essential Hoodie',
        price: 84.99,
        image: 'images/generated_images/Gray_hoodie_product_image_edcb9f2a.png',
        category: 'hoodies'
    },
    {
        id: '4',
        name: 'GHOST Minimalist Hoodie',
        price: 89.99,
        image: 'images/generated_images/White_hoodie_product_image_cfbb8ac5.png',
        category: 'hoodies'
    },
    {
        id: '5',
        name: 'VOID Statement Tee',
        price: 39.99,
        image: 'images/generated_images/Black_t-shirt_product_image_49a5fad0.png',
        category: 't-shirts'
    },
    {
        id: '6',
        name: 'RAGE Essential Tee',
        price: 44.99,
        image: 'images/generated_images/Red_t-shirt_product_image_19a60a6f.png',
        category: 't-shirts'
    },
    {
        id: '7',
        name: 'PURE Classic Tee',
        price: 39.99,
        image: 'images/generated_images/White_t-shirt_product_image_3de4e687.png',
        category: 't-shirts'
    },
    {
        id: '8',
        name: 'STORM Urban Tee',
        price: 42.99,
        image: 'images/generated_images/Gray_t-shirt_product_image_66d3ad9e.png',
        category: 't-shirts'
    },
    {
        id: '9',
        name: 'NIGHT Tactical Pants',
        price: 119.99,
        image: 'images/generated_images/Black_pants_product_image_b203af13.png',
        category: 'pants'
    },
    {
        id: '10',
        name: 'CONCRETE Cargo Pants',
        price: 114.99,
        image: 'images/generated_images/Gray_pants_product_image_3fa3c425.png',
        category: 'pants'
    },
    {
        id: '11',
        name: 'DESERT Utility Pants',
        price: 109.99,
        image: 'images/generated_images/Beige_pants_product_image_26a1e047.png',
        category: 'pants'
    },
    {
        id: '12',
        name: 'COMBAT Field Pants',
        price: 124.99,
        image: 'images/generated_images/Olive_pants_product_image_ee654c9e.png',
        category: 'pants'
    }
];

// Navigation Scroll Effect
let navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        mobileMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Handle all anchor links for smooth scrolling
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
        : products.filter(product => product.category === filter);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-testid', `card-product-${product.id}`);
        
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" 
                     alt="${product.name} - ${product.category}" 
                     data-testid="img-product-${product.id}">
            </div>
            <div class="product-info">
                <p class="product-category" data-testid="text-category-${product.id}">
                    ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </p>
                <h3 class="product-name" data-testid="text-name-${product.id}">
                    ${product.name}
                </h3>
                <p class="product-price" data-testid="text-price-${product.id}">
                    $${product.price.toFixed(2)}
                </p>
                <button class="btn btn-primary" 
                        onclick="buyProduct('${product.name}')"
                        data-testid="button-buy-${product.id}">
                    Buy Now
                </button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Buy Product Function
function buyProduct(productName) {
    console.log(`Buy now clicked for ${productName}`);
    alert(`Thank you for your interest in ${productName}! This is a demo - checkout functionality would be implemented here.`);
}

// Product Filter
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        // Get filter value
        const filter = this.getAttribute('data-filter');
        // Render filtered products
        renderProducts(filter);
    });
});

// Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function validateName() {
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        nameInput.classList.add('error');
        return false;
    } else {
        nameError.textContent = '';
        nameInput.classList.remove('error');
        return true;
    }
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        emailInput.classList.add('error');
        return false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        emailInput.classList.add('error');
        return false;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('error');
        return true;
    }
}

function validateMessage() {
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required';
        messageInput.classList.add('error');
        return false;
    } else {
        messageError.textContent = '';
        messageInput.classList.remove('error');
        return true;
    }
}

// Real-time validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

// Form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    
    if (isNameValid && isEmailValid && isMessageValid) {
        console.log('Form submitted:', {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        });
        
        alert('Message sent! We\'ll get back to you as soon as possible.');
        
        // Reset form
        contactForm.reset();
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');
        messageInput.classList.remove('error');
    }
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Initialize products on page load
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    
    // Scroll animations for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections except hero
    document.querySelectorAll('section:not(.hero-section)').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
