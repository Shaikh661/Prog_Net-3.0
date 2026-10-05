/* ===================================================
   HANDMADE MARKETPLACE — Application Logic
   =================================================== */

// ===== DATA: Products =====
const productsData = [
  {
    id: 1,
    name: 'Terracotta Moon Vase',
    creator: 'Elena Pottery',
    creatorId: 1,
    category: 'Pottery',
    price: 68,
    originalPrice: null,
    rating: 4.9,
    reviews: 124,
    image: 'images/cat_pottery.jpg',
    badge: 'Handmade',
    description: 'A hand-thrown terracotta vase with a crescent moon texture, finished in a warm earthy glaze. Each piece is unique, shaped on the wheel and carved by hand. Perfect for dried flowers or as a standalone sculptural piece.',
    isNew: false
  },
  {
    id: 2,
    name: 'Gold Crescent Necklace',
    creator: 'Amara Jewels',
    creatorId: 2,
    category: 'Jewelry',
    price: 45,
    originalPrice: 60,
    rating: 4.8,
    reviews: 89,
    image: 'images/cat_jewelry.jpg',
    badge: 'Bestseller',
    description: 'Delicate hand-hammered gold-filled crescent pendant on a fine chain. Inspired by moonlit evenings and celestial beauty. Each crescent is individually hammered, making every necklace one of a kind.',
    isNew: false
  },
  {
    id: 3,
    name: 'Macramé Wall Hanging',
    creator: 'Woven by Sarah',
    creatorId: 3,
    category: 'Home Decor',
    price: 89,
    originalPrice: null,
    rating: 5.0,
    reviews: 67,
    image: 'images/cat_homedecor.jpg',
    badge: 'Handmade',
    description: 'Large-scale macramé wall hanging crafted from natural cotton rope. Features intricate knot patterns and flowing fringe. A stunning statement piece that brings warmth and texture to any space.',
    isNew: true
  },
  {
    id: 4,
    name: 'Botanical Art Print Set',
    creator: 'Studio Fern',
    creatorId: 4,
    category: 'Art & Prints',
    price: 35,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    image: 'images/cat_art.jpg',
    badge: 'Handmade',
    description: 'A set of three hand-illustrated botanical prints on textured cotton paper. Featuring ferns, wildflowers, and eucalyptus branches in soft earth tones. Printed with archival inks.',
    isNew: false
  },
  {
    id: 5,
    name: 'Hand-Knit Patchwork Cardigan',
    creator: 'Knit & Purl Studio',
    creatorId: 5,
    category: 'Clothing',
    price: 128,
    originalPrice: 165,
    rating: 4.9,
    reviews: 43,
    image: 'images/cat_clothing.jpg',
    badge: 'Limited',
    description: 'Chunky hand-knit cardigan in a warm patchwork design. Made from 100% natural wool in cream, terracotta, and olive tones. Each cardigan takes over 40 hours to create by hand.',
    isNew: true
  },
  {
    id: 6,
    name: 'Speckled Ceramic Mug Set',
    creator: 'Elena Pottery',
    creatorId: 1,
    category: 'Pottery',
    price: 42,
    originalPrice: null,
    rating: 4.6,
    reviews: 201,
    image: 'images/cat_pottery.jpg',
    badge: 'Handmade',
    description: 'Set of two hand-thrown stoneware mugs with a beautiful speckled glaze. Microwave and dishwasher safe. The perfect companion for your morning ritual.',
    isNew: false
  },
  {
    id: 7,
    name: 'Turquoise Beaded Bracelet',
    creator: 'Amara Jewels',
    creatorId: 2,
    category: 'Jewelry',
    price: 28,
    originalPrice: null,
    rating: 4.5,
    reviews: 112,
    image: 'images/cat_jewelry.jpg',
    badge: 'Handmade',
    description: 'Hand-strung natural turquoise and gold bead bracelet. Each turquoise bead is unique in color and pattern. Finished with a handmade gold clasp.',
    isNew: false
  },
  {
    id: 8,
    name: 'Dried Flower Arrangement',
    creator: 'Woven by Sarah',
    creatorId: 3,
    category: 'Home Decor',
    price: 55,
    originalPrice: 72,
    rating: 4.8,
    reviews: 78,
    image: 'images/cat_homedecor.jpg',
    badge: 'Handmade',
    description: 'Curated dried flower arrangement in a handmade ceramic vessel. Features lavender, eucalyptus, bunny tails, and dried grasses. Lasts for years with minimal care.',
    isNew: false
  },
  {
    id: 9,
    name: 'Block Print Art Collection',
    creator: 'Studio Fern',
    creatorId: 4,
    category: 'Art & Prints',
    price: 52,
    originalPrice: null,
    rating: 4.9,
    reviews: 64,
    image: 'images/cat_art.jpg',
    badge: 'Handmade',
    description: 'A collection of four hand-carved and hand-pressed block prints. Featuring abstract botanical motifs in olive, terracotta, and charcoal. Printed on handmade paper.',
    isNew: true
  },
  {
    id: 10,
    name: 'Hand-Dyed Indigo Scarf',
    creator: 'Knit & Purl Studio',
    creatorId: 5,
    category: 'Clothing',
    price: 65,
    originalPrice: null,
    rating: 4.7,
    reviews: 91,
    image: 'images/cat_clothing.jpg',
    badge: 'Handmade',
    description: 'Linen scarf hand-dyed with natural indigo using traditional shibori techniques. Every fold and tie creates a unique pattern. Soft, lightweight, and naturally antibacterial.',
    isNew: false
  },
  {
    id: 11,
    name: 'Woven Market Tote',
    creator: 'Woven by Sarah',
    creatorId: 3,
    category: 'Bags',
    price: 78,
    originalPrice: null,
    rating: 4.8,
    reviews: 55,
    image: 'images/cat_homedecor.jpg',
    badge: 'Handmade',
    description: 'Handwoven market tote made from sustainably sourced jute and cotton. Features a classic stripe pattern in natural and indigo. Sturdy enough for everyday use.',
    isNew: false
  },
  {
    id: 12,
    name: 'Beeswax Taper Candles',
    creator: 'Elena Pottery',
    creatorId: 1,
    category: 'Candles',
    price: 24,
    originalPrice: null,
    rating: 4.6,
    reviews: 189,
    image: 'images/cat_pottery.jpg',
    badge: 'Handmade',
    description: 'Set of four hand-dipped pure beeswax taper candles. Naturally honey-scented with a warm golden glow. Made with 100% pure beeswax from local apiaries.',
    isNew: false
  }
];

// ===== DATA: Creators =====
const creatorsData = [
  {
    id: 1,
    name: 'Elena Vasquez',
    shop: 'Elena Pottery',
    location: 'Oaxaca, Mexico',
    bio: '"I believe every cup of coffee tastes better from a vessel shaped by human hands. My work celebrates the beauty of imperfection."',
    products: 47,
    sales: 1240,
    avatar: null,
    gradient: 'linear-gradient(135deg, #A96045, #C4836A)'
  },
  {
    id: 2,
    name: 'Amara Johnson',
    shop: 'Amara Jewels',
    location: 'Portland, Oregon',
    bio: '"Each piece I create carries a piece of my story. I want my jewelry to feel like a quiet conversation between the maker and the wearer."',
    products: 63,
    sales: 2180,
    avatar: null,
    gradient: 'linear-gradient(135deg, #C8A96E, #E0CC9E)'
  },
  {
    id: 3,
    name: 'Sarah Chen',
    shop: 'Woven by Sarah',
    location: 'Byron Bay, Australia',
    bio: '"Fiber art is my meditation. Every knot tied is an intention set. I create pieces that make spaces feel like home."',
    products: 28,
    sales: 890,
    avatar: null,
    gradient: 'linear-gradient(135deg, #77745B, #9A9778)'
  }
];


// ===== STATE =====
let cart = [];
let wishlist = [];
let filteredProducts = [...productsData];


// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Show loading skeleton briefly
  showSkeleton();
  
  setTimeout(() => {
    hideSkeleton();
    renderProducts(productsData);
    renderCreators();
    initScrollAnimations();
    initNavbarScroll();
    initSearch();
  }, 600);
});


// ===== NAVBAR =====
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

function toggleMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('open');
  
  // Prevent body scroll when menu is open
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
  
  // Update active nav link
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => link.classList.remove('active'));
  event?.preventDefault?.();
}


// ===== SEARCH =====
function initSearch() {
  const toggle = document.getElementById('search-toggle');
  const input = document.getElementById('search-input');
  
  toggle.addEventListener('click', () => {
    input.classList.toggle('expanded');
    if (input.classList.contains('expanded')) {
      input.focus();
    }
  });
  
  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query === '') {
      filteredProducts = [...productsData];
    } else {
      filteredProducts = productsData.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.creator.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }
    renderProducts(filteredProducts);
  });
  
  // Close search on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar-search')) {
      input.classList.remove('expanded');
    }
  });
}


// ===== PRODUCTS =====
function renderProducts(products) {
  const grid = document.getElementById('products-grid');
  const empty = document.getElementById('products-empty');
  
  if (products.length === 0) {
    grid.style.display = 'none';
    empty.style.display = 'block';
    return;
  }
  
  grid.style.display = '';
  empty.style.display = 'none';
  
  grid.innerHTML = products.map((product, index) => {
    const isWishlisted = wishlist.includes(product.id);
    const starsHtml = generateStars(product.rating);
    const delayClass = `reveal-delay-${(index % 4) + 1}`;
    
    return `
      <div class="product-card reveal ${delayClass}" data-product-id="${product.id}">
        <div class="product-card-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onclick="openProductModal(${product.id})">
          
          <div class="product-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><path d="M12 2L9 9H2l6 4-2 7 6-4 6 4-2-7 6-4h-7z"/></svg>
            ${product.badge}
          </div>
          
          <button class="product-wishlist ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id})" aria-label="Add to wishlist">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          
          <div class="product-quick-add">
            <button class="btn btn-primary" onclick="addToCart(${product.id})">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              Add to Cart
            </button>
          </div>
        </div>
        
        <div class="product-card-info">
          <span class="product-creator" onclick="showCreatorProfile(${product.creatorId})">${product.creator}</span>
          <h3 class="product-name" onclick="openProductModal(${product.id})">${product.name}</h3>
          <div class="product-rating">
            <div class="stars">${starsHtml}</div>
            <span class="rating-count">(${product.reviews})</span>
          </div>
          <div class="product-price">
            $${product.price.toFixed(2)}
            ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Reinitialize scroll animations for new elements
  initScrollAnimations();
}

function generateStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    } else if (i - 0.5 <= rating) {
      html += '<svg viewBox="0 0 24 24"><defs><linearGradient id="half"><stop offset="50%" stop-color="#C8A96E"/><stop offset="50%" stop-color="#E8DAC6"/></linearGradient></defs><path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    } else {
      html += '<svg viewBox="0 0 24 24" class="empty"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
  }
  return html;
}

function showSkeleton() {
  document.getElementById('products-skeleton').style.display = 'grid';
  document.getElementById('products-grid').style.display = 'none';
}

function hideSkeleton() {
  document.getElementById('products-skeleton').style.display = 'none';
  document.getElementById('products-grid').style.display = '';
}


// ===== FILTERS =====
function applyFilters() {
  const category = document.getElementById('filter-category').value;
  const price = document.getElementById('filter-price').value;
  const sort = document.getElementById('filter-sort').value;
  
  let results = [...productsData];
  
  // Category filter
  if (category !== 'all') {
    results = results.filter(p => p.category === category);
  }
  
  // Price filter
  if (price !== 'all') {
    const [min, max] = price.split('-').map(Number);
    if (price === '100+') {
      results = results.filter(p => p.price >= 100);
    } else {
      results = results.filter(p => p.price >= min && p.price <= max);
    }
  }
  
  // Sort
  switch (sort) {
    case 'price-low':
      results.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      results.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      results.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      results.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
  }
  
  // Show loading briefly
  showSkeleton();
  setTimeout(() => {
    hideSkeleton();
    filteredProducts = results;
    renderProducts(results);
  }, 300);
}

function filterByCategory(category) {
  document.getElementById('filter-category').value = category;
  applyFilters();
  scrollToSection('products');
}

function resetFilters() {
  document.getElementById('filter-category').value = 'all';
  document.getElementById('filter-price').value = 'all';
  document.getElementById('filter-sort').value = 'featured';
  filteredProducts = [...productsData];
  renderProducts(productsData);
}


// ===== CART =====
function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  
  updateCartBadge();
  renderCart();
  showToast(`${product.name} added to cart!`, 'success');
  
  // Open cart drawer
  if (!document.getElementById('cart-drawer').classList.contains('open')) {
    toggleCart();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartBadge();
  renderCart();
  showToast('Item removed from cart', 'info');
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = total;
  badge.classList.toggle('show', total > 0);
}

function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  
  drawer.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartFooter = document.getElementById('cart-footer');
  
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <h3>Your cart is empty</h3>
        <p>Discover handmade treasures and add them here.</p>
        <button class="btn btn-secondary" onclick="toggleCart(); scrollToSection('products')">Browse Products</button>
      </div>
    `;
    cartFooter.style.display = 'none';
    return;
  }
  
  cartFooter.style.display = 'block';
  
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-creator">${item.creator}</div>
        <div class="cart-item-bottom">
          <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
          <div class="cart-item-qty">
            <button onclick="updateCartQty(${item.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="updateCartQty(${item.id}, 1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
  
  // Update total
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}


// ===== WISHLIST =====
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const product = productsData.find(p => p.id === productId);
  
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`${product.name} removed from wishlist`, 'info');
  } else {
    wishlist.push(productId);
    showToast(`${product.name} added to wishlist!`, 'success');
  }
  
  // Update badge
  const badge = document.getElementById('wishlist-badge');
  badge.textContent = wishlist.length;
  badge.classList.toggle('show', wishlist.length > 0);
  
  // Update button states
  document.querySelectorAll('.product-wishlist').forEach(btn => {
    const card = btn.closest('.product-card');
    if (card) {
      const id = parseInt(card.dataset.productId);
      btn.classList.toggle('active', wishlist.includes(id));
    }
  });
}


// ===== PRODUCT MODAL =====
function openProductModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('product-modal');
  
  document.getElementById('product-modal-image').src = product.image;
  document.getElementById('product-modal-image').alt = product.name;
  document.getElementById('product-modal-creator').textContent = product.creator;
  document.getElementById('product-modal-name').textContent = product.name;
  document.getElementById('product-modal-price').textContent = `$${product.price.toFixed(2)}`;
  document.getElementById('product-modal-description').textContent = product.description;
  
  // Rating
  const ratingHtml = `
    <div class="stars">${generateStars(product.rating)}</div>
    <span style="font-size:0.85rem;color:var(--olive);">${product.rating} (${product.reviews} reviews)</span>
  `;
  document.getElementById('product-modal-rating').innerHTML = ratingHtml;
  
  // Set button actions
  document.getElementById('product-modal-add-btn').setAttribute('onclick', `addToCart(${product.id}); closeProductModal();`);
  document.getElementById('product-modal-wishlist-btn').setAttribute('onclick', `toggleWishlist(${product.id})`);
  
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('product-modal').classList.remove('open');
  document.body.style.overflow = '';
}


// ===== CREATORS =====
function renderCreators() {
  const grid = document.getElementById('creators-grid');
  
  grid.innerHTML = creatorsData.map((creator, index) => {
    const delayClass = `reveal-delay-${index + 1}`;
    const initials = creator.name.split(' ').map(n => n[0]).join('');
    
    return `
      <div class="creator-card reveal ${delayClass}">
        <div class="creator-avatar">
          <div class="creator-avatar-svg" style="background:${creator.gradient};">
            <span style="font-family:var(--font-heading);font-size:1.6rem;font-weight:600;color:var(--white);">${initials}</span>
          </div>
        </div>
        <h3 class="creator-name">${creator.name}</h3>
        <div class="creator-location">
          <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${creator.location}
        </div>
        <p class="creator-bio">${creator.bio}</p>
        <div class="creator-stats">
          <div>
            <span class="creator-stat-number">${creator.products}</span>
            <span class="creator-stat-label">Products</span>
          </div>
          <div>
            <span class="creator-stat-number">${creator.sales.toLocaleString()}</span>
            <span class="creator-stat-label">Sales</span>
          </div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="showCreatorProfile(${creator.id})">View Shop</button>
      </div>
    `;
  }).join('');
}

function showCreatorProfile(creatorId) {
  const creator = creatorsData.find(c => c.id === creatorId);
  if (!creator) return;
  
  // Filter products by this creator
  document.getElementById('filter-category').value = 'all';
  const creatorProducts = productsData.filter(p => p.creatorId === creatorId);
  renderProducts(creatorProducts);
  scrollToSection('products');
  showToast(`Showing products by ${creator.shop}`, 'info');
}


// ===== AUTH MODAL =====
function openAuthModal(mode = 'login') {
  const modal = document.getElementById('auth-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  switchAuth(mode);
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function switchAuth(mode) {
  const login = document.getElementById('auth-login');
  const signup = document.getElementById('auth-signup');
  
  if (mode === 'signup') {
    login.style.display = 'none';
    signup.style.display = 'block';
  } else {
    login.style.display = 'block';
    signup.style.display = 'none';
  }
}

function handleLogin(e) {
  e.preventDefault();
  closeAuthModal();
  showToast('Welcome back to Handmade Marketplace!', 'success');
}

function handleSignup(e) {
  e.preventDefault();
  closeAuthModal();
  showToast('Welcome to Handmade Marketplace! 🎉', 'success');
}


// ===== NEWSLETTER =====
function handleNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('newsletter-email');
  showToast(`Subscribed! We'll send handmade stories to ${email.value}`, 'success');
  email.value = '';
}


// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = '';
  switch (type) {
    case 'success':
      icon = '<svg viewBox="0 0 24 24" fill="none" stroke="#6B8E5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
      break;
    case 'error':
      icon = '<svg viewBox="0 0 24 24" fill="none" stroke="#C45B4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
      break;
    case 'info':
      icon = '<svg viewBox="0 0 24 24" fill="none" stroke="#C8A96E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
      break;
  }
  
  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);
  
  // Auto remove
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}


// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    observer.observe(el);
  });
}


// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
  // Escape key to close modals
  if (e.key === 'Escape') {
    closeProductModal();
    closeAuthModal();
    if (document.getElementById('cart-drawer').classList.contains('open')) {
      toggleCart();
    }
    if (document.getElementById('mobile-nav').classList.contains('open')) {
      toggleMobileNav();
    }
  }
  
  // Ctrl+K for search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const input = document.getElementById('search-input');
    input.classList.add('expanded');
    input.focus();
  }
});
