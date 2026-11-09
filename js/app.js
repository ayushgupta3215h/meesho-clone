// Meesho Clone Main Application Script

// App State
const state = {
  products: [...PRODUCTS],
  filteredProducts: [...PRODUCTS],
  cart: JSON.parse(localStorage.getItem("meesho_cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("meesho_wishlist") || "[]"),
  user: JSON.parse(localStorage.getItem("meesho_user") || '{"isLoggedIn":false}'),
  orders: JSON.parse(localStorage.getItem("meesho_orders") || "[]"),
  activeCategory: "all",
  searchQuery: "",
  activeFilters: {
    genders: [],
    priceRanges: [],
    ratings: null,
    fabrics: [],
    colors: [],
    sortBy: "relevance"
  },
  currentProductDetail: null,
  selectedDetailSize: null,
  activeDetailImageIndex: 0,
  heroSlideIndex: 0,
  heroInterval: null
};

// DOM Ready initialization
document.addEventListener("DOMContentLoaded", () => {
  initHeroCarousel();
  initVisualCategories();
  initMegaMenu();
  renderProducts();
  updateCartBadge();
  updateWishlistBadge();
  initSearch();
  initEventListeners();
  checkUserState();
});

// Save State Helpers
function saveCart() {
  localStorage.setItem("meesho_cart", JSON.stringify(state.cart));
  updateCartBadge();
}

function saveWishlist() {
  localStorage.setItem("meesho_wishlist", JSON.stringify(state.wishlist));
  updateWishlistBadge();
}

function saveOrders() {
  localStorage.setItem("meesho_orders", JSON.stringify(state.orders));
}

function saveUser() {
  localStorage.setItem("meesho_user", JSON.stringify(state.user));
  checkUserState();
}

// Update Badges
function updateCartBadge() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll(".cart-badge");
  badges.forEach(b => {
    b.textContent = count;
    b.classList.toggle("hidden", count === 0);
    b.classList.add("badge-pop");
    setTimeout(() => b.classList.remove("badge-pop"), 300);
  });
}

function updateWishlistBadge() {
  const count = state.wishlist.length;
  const badges = document.querySelectorAll(".wishlist-badge");
  badges.forEach(b => {
    b.textContent = count;
    b.classList.toggle("hidden", count === 0);
  });
}

// User state in header
function checkUserState() {
  const profileLabel = document.getElementById("profile-header-label");
  const authBtn = document.getElementById("profile-auth-btn");
  const userGreeting = document.getElementById("user-greeting");
  
  if (state.user && state.user.isLoggedIn) {
    if (profileLabel) profileLabel.textContent = state.user.name || "My Account";
    if (userGreeting) userGreeting.textContent = `Hello, ${state.user.name || "Customer"}`;
    if (authBtn) {
      authBtn.textContent = "Log Out";
      authBtn.onclick = logoutUser;
    }
  } else {
    if (profileLabel) profileLabel.textContent = "Profile";
    if (userGreeting) userGreeting.textContent = "Welcome to Meesho";
    if (authBtn) {
      authBtn.textContent = "Sign Up / Log In";
      authBtn.onclick = () => openAuthModal();
    }
  }
}

function logoutUser() {
  state.user = { isLoggedIn: false };
  saveUser();
  showToast("Logged out successfully");
}

// Toast Notifications
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = `toast px-4 py-3 rounded-lg text-white font-medium text-sm flex items-center gap-3 shadow-lg ${
    type === "error" ? "bg-red-600" : "bg-meesho-purple"
  }`;
  
  const icon = type === "error" 
    ? `<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
    : `<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;
  
  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 250);
  }, 2600);
}

// Hero Carousel
function initHeroCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  if (!slides.length) return;

  function goToSlide(index) {
    state.heroSlideIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle("opacity-100", i === state.heroSlideIndex);
      slide.classList.toggle("opacity-0", i !== state.heroSlideIndex);
      slide.classList.toggle("pointer-events-none", i !== state.heroSlideIndex);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-white", i === state.heroSlideIndex);
      dot.classList.toggle("bg-white/40", i !== state.heroSlideIndex);
      dot.classList.toggle("w-6", i === state.heroSlideIndex);
      dot.classList.toggle("w-2.5", i !== state.heroSlideIndex);
    });
  }

  document.getElementById("carousel-prev")?.addEventListener("click", () => {
    clearInterval(state.heroInterval);
    goToSlide(state.heroSlideIndex - 1);
    startAutoSlide();
  });

  document.getElementById("carousel-next")?.addEventListener("click", () => {
    clearInterval(state.heroInterval);
    goToSlide(state.heroSlideIndex + 1);
    startAutoSlide();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      clearInterval(state.heroInterval);
      goToSlide(idx);
      startAutoSlide();
    });
  });

  function startAutoSlide() {
    state.heroInterval = setInterval(() => {
      goToSlide(state.heroSlideIndex + 1);
    }, 4500);
  }

  goToSlide(0);
  startAutoSlide();
}

// Visual Top Categories Row
function initVisualCategories() {
  const container = document.getElementById("visual-categories-container");
  if (!container) return;

  container.innerHTML = VISUAL_CATEGORIES.map(cat => `
    <button onclick="setVisualCategory('${cat.filter}')" class="flex flex-col items-center flex-shrink-0 group focus:outline-none transition-transform hover:scale-105">
      <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden p-1 border-2 ${state.activeCategory === cat.filter ? 'border-meesho-purple shadow-md' : 'border-transparent group-hover:border-meesho-pink'} transition-all bg-white">
        <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover rounded-full" />
      </div>
      <span class="text-xs sm:text-sm font-medium mt-2 text-center text-gray-700 group-hover:text-meesho-purple whitespace-nowrap">${cat.name}</span>
    </button>
  `).join("");
}

function setVisualCategory(category) {
  state.activeCategory = category;
  initVisualCategories();
  applyFilters();
  
  // Smooth scroll down to products section
  const section = document.getElementById("products-feed-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Mega Menu Construction
function initMegaMenu() {
  const navContainer = document.getElementById("desktop-nav-categories");
  if (!navContainer) return;

  const categories = Object.keys(MEGA_MENU_DATA);
  navContainer.innerHTML = categories.map(cat => {
    const data = MEGA_MENU_DATA[cat];
    const columnsHtml = data.columns.map(col => `
      <div class="space-y-2">
        <h4 class="font-bold text-meesho-purple text-sm tracking-wide border-b border-gray-100 pb-1.5">${col.title}</h4>
        <ul class="space-y-1.5 text-xs text-gray-600">
          ${col.items.map(item => `
            <li>
              <button onclick="filterBySubCategory('${cat}', '${item}')" class="hover:text-meesho-pink transition-colors text-left w-full py-0.5">
                ${item}
              </button>
            </li>
          `).join("")}
        </ul>
      </div>
    `).join("");

    return `
      <div class="nav-category-item relative group py-3 px-3 cursor-pointer">
        <button onclick="setVisualCategory('${cat}')" class="text-xs lg:text-sm font-medium text-gray-700 group-hover:text-meesho-purple flex items-center gap-1 transition-colors whitespace-nowrap">
          <span>${cat}</span>
        </button>
        <!-- Mega Menu Panel -->
        <div class="mega-menu p-6 shadow-2xl rounded-b-xl border-x border-b border-gray-200">
          <div class="max-w-7xl mx-auto grid grid-cols-4 gap-6">
            ${columnsHtml}
          </div>
          <div class="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
            <span>✨ Free delivery on all ${cat} orders</span>
            <button onclick="setVisualCategory('${cat}')" class="font-semibold text-meesho-purple hover:underline">
              View All in ${cat} &rarr;
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function filterBySubCategory(category, subCategory) {
  state.activeCategory = category;
  state.searchQuery = subCategory;
  const searchInput = document.getElementById("main-search-input");
  if (searchInput) searchInput.value = subCategory;
  applyFilters();
  
  const section = document.getElementById("products-feed-section");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

// Search Autosuggestions
function initSearch() {
  const searchInput = document.getElementById("main-search-input");
  const suggestionsBox = document.getElementById("search-suggestions");
  if (!searchInput || !suggestionsBox) return;

  const popularSearches = [
    "Sarees", "Kurti Set", "Oversized T-Shirt", "Wireless Earbuds",
    "Smartwatch", "Bedsheets", "Sneakers", "Kundan Jewellery", "Jeans", "Tote Bag"
  ];

  searchInput.addEventListener("focus", () => {
    renderSuggestions(searchInput.value.trim());
    suggestionsBox.classList.remove("hidden");
  });

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.trim();
    renderSuggestions(val);
    suggestionsBox.classList.remove("hidden");
    state.searchQuery = val;
    applyFilters();
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.classList.add("hidden");
    }
  });

  function renderSuggestions(query) {
    let filtered = popularSearches;
    if (query) {
      filtered = popularSearches.filter(s => s.toLowerCase().includes(query.toLowerCase()));
      if (filtered.length === 0) filtered = [query];
    }
    
    suggestionsBox.innerHTML = `
      <div class="p-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
        ${query ? "Matching Searches" : "Trending Searches on Meesho"}
      </div>
      <div class="divide-y divide-gray-50">
        ${filtered.map(item => `
          <div onclick="selectSearchQuery('${item}')" class="px-3 py-2 text-sm text-gray-700 hover:bg-meesho-light hover:text-meesho-purple cursor-pointer flex items-center justify-between transition-colors">
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              ${item}
            </span>
            <span class="text-xs text-gray-400">Popular</span>
          </div>
        `).join("")}
      </div>
    `;
  }
}

function selectSearchQuery(query) {
  const searchInput = document.getElementById("main-search-input");
  const suggestionsBox = document.getElementById("search-suggestions");
  if (searchInput) searchInput.value = query;
  if (suggestionsBox) suggestionsBox.classList.add("hidden");
  state.searchQuery = query;
  applyFilters();
  
  const section = document.getElementById("products-feed-section");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

// Filter and Sort Engine
function applyFilters() {
  let list = [...state.products];

  // Category
  if (state.activeCategory && state.activeCategory !== "all") {
    list = list.filter(p => p.category.toLowerCase() === state.activeCategory.toLowerCase());
  }

  // Search Query
  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subCategory.toLowerCase().includes(q) ||
      p.fabric.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Genders
  if (state.activeFilters.genders.length > 0) {
    list = list.filter(p => state.activeFilters.genders.includes(p.gender));
  }

  // Price Ranges
  if (state.activeFilters.priceRanges.length > 0) {
    list = list.filter(p => {
      return state.activeFilters.priceRanges.some(range => {
        if (range === "under-299") return p.price <= 299;
        if (range === "300-499") return p.price >= 300 && p.price <= 499;
        if (range === "500-799") return p.price >= 500 && p.price <= 799;
        if (range === "800-plus") return p.price >= 800;
        return true;
      });
    });
  }

  // Minimum Rating
  if (state.activeFilters.ratings) {
    list = list.filter(p => p.rating >= state.activeFilters.ratings);
  }

  // Fabrics
  if (state.activeFilters.fabrics.length > 0) {
    list = list.filter(p => {
      return state.activeFilters.fabrics.some(fab => p.fabric.toLowerCase().includes(fab.toLowerCase()));
    });
  }

  // Colors
  if (state.activeFilters.colors.length > 0) {
    list = list.filter(p => {
      return state.activeFilters.colors.some(col => p.color.toLowerCase().includes(col.toLowerCase()));
    });
  }

  // Sorting
  switch (state.activeFilters.sortBy) {
    case "price-low":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "discount":
      list.sort((a, b) => parseInt(b.discount) - parseInt(a.discount));
      break;
    case "relevance":
    default:
      // Keep curated order
      break;
  }

  state.filteredProducts = list;
  renderProducts();
  renderFilterPills();
}

// Render Products Feed Grid
function renderProducts() {
  const grid = document.getElementById("products-grid");
  const countLabel = document.getElementById("products-count-label");
  if (!grid) return;

  if (countLabel) {
    countLabel.textContent = `Showing ${state.filteredProducts.length} items`;
  }

  if (state.filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h3 class="text-lg font-bold text-gray-700">No matching products found</h3>
        <p class="text-sm text-gray-500 mt-1">Try resetting filters or searching with different keywords.</p>
        <button onclick="resetAllFilters()" class="mt-4 px-5 py-2 bg-meesho-purple text-white text-sm font-semibold rounded-lg hover:bg-meesho-purple-dark transition-colors">
          Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = state.filteredProducts.map(p => {
    const isWishlisted = state.wishlist.includes(p.id);

    return `
      <div class="product-card bg-white rounded-lg flex flex-col justify-between overflow-hidden cursor-pointer group shadow-sm relative" onclick="openProductDetail('${p.id}')">
        <!-- Wishlist Button -->
        <button 
          onclick="event.stopPropagation(); toggleWishlist('${p.id}')"
          class="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md text-gray-400 hover:text-red-500 transition-all"
          title="Add to Wishlist"
        >
          <svg class="w-5 h-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-500'}" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>

        <!-- Product Image -->
        <div class="product-image-container">
          <img src="${p.images[0]}" alt="${p.title}" loading="lazy" />
          ${p.trusted ? `
            <div class="absolute bottom-2 left-2 bg-white/95 text-[10px] font-bold text-meesho-purple px-2 py-0.5 rounded shadow flex items-center gap-1">
              <svg class="w-3 h-3 text-meesho-purple" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              M-Trusted
            </div>
          ` : ''}
        </div>

        <!-- Content Details -->
        <div class="p-3 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-xs sm:text-sm text-gray-700 font-medium line-clamp-2 leading-snug group-hover:text-meesho-purple transition-colors" title="${p.title}">
              ${p.title}
            </h3>
            
            <!-- Price Block -->
            <div class="mt-2 flex items-baseline gap-2 flex-wrap">
              <span class="text-base sm:text-lg font-bold text-gray-900">₹${p.price}</span>
              <span class="text-xs text-gray-400 line-through">₹${p.mrp}</span>
              <span class="text-xs font-semibold text-meesho-green">${p.discount}</span>
            </div>

            <!-- Meesho Special Offer Tag -->
            <div class="mt-1 text-[11px] font-semibold text-meesho-green flex items-center gap-1">
              <span>🏷️</span> ${p.specialOffer}
            </div>

            <!-- Free Delivery Tag -->
            <div class="mt-1 text-[11px] text-gray-500 font-medium">
              Free Delivery
            </div>
          </div>

          <!-- Bottom: Rating Pill and Total Reviews -->
          <div class="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              <span class="rating-pill">
                ${p.rating}
                <svg class="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </span>
              <span class="text-[11px] text-gray-400 font-normal">(${formatNumber(p.reviewsCount)})</span>
            </div>
            
            <button 
              onclick="event.stopPropagation(); quickAddToCart('${p.id}')"
              class="text-xs font-semibold text-meesho-purple hover:bg-meesho-light px-2 py-1 rounded transition-colors"
            >
              Add +
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Active Filter Pills
function renderFilterPills() {
  const container = document.getElementById("active-filter-pills");
  if (!container) return;

  const pills = [];

  if (state.activeCategory !== "all") {
    pills.push({ label: `Category: ${state.activeCategory}`, remove: () => setVisualCategory("all") });
  }

  if (state.searchQuery) {
    pills.push({ label: `Search: "${state.searchQuery}"`, remove: () => {
      state.searchQuery = "";
      const input = document.getElementById("main-search-input");
      if (input) input.value = "";
      applyFilters();
    }});
  }

  state.activeFilters.genders.forEach(g => {
    pills.push({ label: g, remove: () => toggleGenderFilter(g) });
  });

  state.activeFilters.priceRanges.forEach(p => {
    let name = p;
    if (p === "under-299") name = "Under ₹299";
    if (p === "300-499") name = "₹300 - ₹499";
    if (p === "500-799") name = "₹500 - ₹799";
    if (p === "800-plus") name = "₹800+";
    pills.push({ label: name, remove: () => togglePriceFilter(p) });
  });

  if (state.activeFilters.ratings) {
    pills.push({ label: `${state.activeFilters.ratings}★ & above`, remove: () => {
      state.activeFilters.ratings = null;
      applyFilters();
    }});
  }

  state.activeFilters.fabrics.forEach(f => {
    pills.push({ label: `Fabric: ${f}`, remove: () => toggleFabricFilter(f) });
  });

  state.activeFilters.colors.forEach(c => {
    pills.push({ label: `Color: ${c}`, remove: () => toggleColorFilter(c) });
  });

  if (pills.length === 0) {
    container.innerHTML = "";
    container.classList.add("hidden");
    return;
  }

  container.classList.remove("hidden");
  container.innerHTML = `
    <div class="flex items-center gap-2 flex-wrap text-xs">
      <span class="text-gray-500 font-medium">Applied Filters:</span>
      ${pills.map((pill, i) => `
        <span class="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-gray-200">
          ${pill.label}
          <button onclick="removeFilterPill(${i})" class="text-gray-400 hover:text-red-500 font-bold focus:outline-none">&times;</button>
        </span>
      `).join("")}
      <button onclick="resetAllFilters()" class="text-meesho-purple font-semibold hover:underline ml-2">Clear All</button>
    </div>
  `;

  window._pillRemovers = pills.map(p => p.remove);
}

function removeFilterPill(index) {
  if (window._pillRemovers && window._pillRemovers[index]) {
    window._pillRemovers[index]();
  }
}

function resetAllFilters() {
  state.activeCategory = "all";
  state.searchQuery = "";
  state.activeFilters.genders = [];
  state.activeFilters.priceRanges = [];
  state.activeFilters.ratings = null;
  state.activeFilters.fabrics = [];
  state.activeFilters.colors = [];
  state.activeFilters.sortBy = "relevance";

  const searchInput = document.getElementById("main-search-input");
  if (searchInput) searchInput.value = "";
  
  // Uncheck all filter checkboxes
  document.querySelectorAll(".filter-checkbox").forEach(cb => cb.checked = false);
  const sortSelect = document.getElementById("sort-by-select");
  if (sortSelect) sortSelect.value = "relevance";

  initVisualCategories();
  applyFilters();
  showToast("All filters cleared");
}

// Filter Checkbox Toggles
function toggleGenderFilter(gender) {
  const idx = state.activeFilters.genders.indexOf(gender);
  if (idx > -1) state.activeFilters.genders.splice(idx, 1);
  else state.activeFilters.genders.push(gender);
  applyFilters();
}

function togglePriceFilter(range) {
  const idx = state.activeFilters.priceRanges.indexOf(range);
  if (idx > -1) state.activeFilters.priceRanges.splice(idx, 1);
  else state.activeFilters.priceRanges.push(range);
  applyFilters();
}

function setRatingFilter(minRating) {
  state.activeFilters.ratings = state.activeFilters.ratings === minRating ? null : minRating;
  applyFilters();
}

function toggleFabricFilter(fabric) {
  const idx = state.activeFilters.fabrics.indexOf(fabric);
  if (idx > -1) state.activeFilters.fabrics.splice(idx, 1);
  else state.activeFilters.fabrics.push(fabric);
  applyFilters();
}

function toggleColorFilter(color) {
  const idx = state.activeFilters.colors.indexOf(color);
  if (idx > -1) state.activeFilters.colors.splice(idx, 1);
  else state.activeFilters.colors.push(color);
  applyFilters();
}

// Wishlist Functionality
function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  const prod = state.products.find(p => p.id === productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast(`Removed from Wishlist`);
  } else {
    state.wishlist.push(productId);
    showToast(`Saved "${prod ? prod.title.slice(0, 25) + '...' : 'Item'}" to Wishlist`);
  }
  saveWishlist();
  renderProducts();
}

function openWishlistModal() {
  const modal = document.getElementById("wishlist-modal");
  const content = document.getElementById("wishlist-items-container");
  if (!modal || !content) return;

  const wishlistProducts = state.products.filter(p => state.wishlist.includes(p.id));

  if (wishlistProducts.length === 0) {
    content.innerHTML = `
      <div class="py-12 text-center">
        <div class="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-3 text-meesho-pink">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </div>
        <h4 class="font-bold text-gray-800">Your Wishlist is Empty</h4>
        <p class="text-xs text-gray-500 mt-1">Explore our catalog and tap the heart icon to save products.</p>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${wishlistProducts.map(p => `
          <div class="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 relative">
            <img src="${p.images[0]}" alt="${p.title}" class="w-20 h-24 object-cover rounded" />
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h5 class="text-xs font-medium text-gray-800 line-clamp-2">${p.title}</h5>
                <div class="mt-1 flex items-baseline gap-2">
                  <span class="text-sm font-bold text-gray-900">₹${p.price}</span>
                  <span class="text-xs text-gray-400 line-through">₹${p.mrp}</span>
                </div>
              </div>
              <div class="flex items-center gap-2 mt-2">
                <button onclick="quickAddToCart('${p.id}'); closeWishlistModal()" class="text-xs font-semibold bg-meesho-purple text-white px-3 py-1 rounded hover:bg-meesho-purple-dark">
                  Move to Cart
                </button>
                <button onclick="toggleWishlist('${p.id}'); openWishlistModal()" class="text-xs text-gray-400 hover:text-red-500">
                  Remove
                </button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  modal.classList.remove("hidden");
}

function closeWishlistModal() {
  document.getElementById("wishlist-modal")?.classList.add("hidden");
}

// Quick Add to Cart
function quickAddToCart(productId) {
  const prod = state.products.find(p => p.id === productId);
  if (!prod) return;

  const defaultSize = prod.sizes[0] || "Free Size";
  addToCart(prod, defaultSize, 1);
}

function addToCart(product, size, qty = 1) {
  const existing = state.cart.find(item => item.id === product.id && item.size === size);
  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      mrp: product.mrp,
      image: product.images[0],
      size: size,
      quantity: qty,
      supplier: product.supplier
    });
  }
  saveCart();
  showToast(`Added to Cart: ${product.title.slice(0, 22)}...`);
}

// Cart Drawer
function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  renderCartContents();
  if (drawer && overlay) {
    overlay.classList.remove("hidden");
    setTimeout(() => {
      drawer.style.transform = "translateX(0)";
    }, 10);
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (drawer && overlay) {
    drawer.style.transform = "translateX(100%)";
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 300);
  }
}

function renderCartContents() {
  const container = document.getElementById("cart-items-list");
  const summaryBox = document.getElementById("cart-summary-box");
  const emptyState = document.getElementById("cart-empty-state");
  if (!container || !summaryBox || !emptyState) return;

  if (state.cart.length === 0) {
    container.innerHTML = "";
    summaryBox.classList.add("hidden");
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  summaryBox.classList.remove("hidden");

  // Render items
  container.innerHTML = state.cart.map((item, index) => `
    <div class="flex gap-3 py-4 border-b border-gray-100">
      <img src="${item.image}" alt="${item.title}" class="w-20 h-24 object-cover rounded-md flex-shrink-0" />
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start">
            <h4 class="text-xs sm:text-sm font-medium text-gray-800 line-clamp-2 pr-2">${item.title}</h4>
            <button onclick="removeFromCart(${index})" class="text-gray-400 hover:text-red-500 p-1" title="Remove">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
          <div class="text-xs text-gray-500 mt-1 flex items-center gap-2">
            <span>Size: <strong class="text-gray-700">${item.size}</strong></span>
            <span>•</span>
            <span class="text-meesho-green font-medium">Free Delivery</span>
          </div>
          <div class="mt-1 flex items-baseline gap-2">
            <span class="text-sm font-bold text-gray-900">₹${item.price}</span>
            <span class="text-xs text-gray-400 line-through">₹${item.mrp}</span>
          </div>
        </div>
        
        <div class="flex items-center justify-between mt-2">
          <!-- Quantity Stepper -->
          <div class="flex items-center border border-gray-200 rounded-md overflow-hidden bg-gray-50">
            <button onclick="changeCartQty(${index}, -1)" class="px-2.5 py-1 text-gray-600 hover:bg-gray-200 font-bold focus:outline-none">-</button>
            <span class="px-3 py-1 text-xs font-semibold text-gray-800 bg-white">${item.quantity}</span>
            <button onclick="changeCartQty(${index}, 1)" class="px-2.5 py-1 text-gray-600 hover:bg-gray-200 font-bold focus:outline-none">+</button>
          </div>

          <span class="text-xs font-bold text-gray-800">
            Total: ₹${item.price * item.quantity}
          </span>
        </div>
      </div>
    </div>
  `).join("");

  // Calculate bill details
  const totalMrp = state.cart.reduce((sum, item) => sum + (item.mrp * item.quantity), 0);
  const totalProductPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalDiscount = totalMrp - totalProductPrice;

  document.getElementById("cart-total-mrp").textContent = `₹${totalMrp}`;
  document.getElementById("cart-total-discount").textContent = `-₹${totalDiscount}`;
  document.getElementById("cart-final-total").textContent = `₹${totalProductPrice}`;
  document.getElementById("cart-savings-highlight").textContent = `🎉 You will save ₹${totalDiscount} on this order!`;
}

function changeCartQty(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
    showToast("Item removed from cart");
  }
  saveCart();
  renderCartContents();
}

function removeFromCart(index) {
  if (!state.cart[index]) return;
  state.cart.splice(index, 1);
  saveCart();
  renderCartContents();
  showToast("Item removed from cart");
}

// Product Detail Modal
function openProductDetail(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  state.currentProductDetail = product;
  state.selectedDetailSize = product.sizes[0] || "Free Size";
  state.activeDetailImageIndex = 0;

  const modal = document.getElementById("product-detail-modal");
  const body = document.getElementById("product-detail-content");
  if (!modal || !body) return;

  renderDetailModalContent(product);
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeProductDetail() {
  const modal = document.getElementById("product-detail-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

function renderDetailModalContent(p) {
  const body = document.getElementById("product-detail-content");
  if (!body) return;

  const isWishlisted = state.wishlist.includes(p.id);

  body.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 sm:p-6">
      
      <!-- Left Column: Gallery (5 cols) -->
      <div class="md:col-span-5 flex flex-col gap-3">
        <!-- Main Big Image -->
        <div class="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
          <img id="detail-main-img" src="${p.images[state.activeDetailImageIndex]}" alt="${p.title}" class="w-full h-full object-cover transition-all" />
          <button 
            onclick="toggleWishlist('${p.id}'); this.querySelector('svg').classList.toggle('text-red-500'); this.querySelector('svg').classList.toggle('fill-current')"
            class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-500 hover:text-red-500"
          >
            <svg class="w-5 h-5 ${isWishlisted ? 'text-red-500 fill-current' : ''}" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </button>
        </div>

        <!-- Thumbnail Strip -->
        <div class="flex gap-2.5 overflow-x-auto pb-1 horizontal-scroll-hide">
          ${p.images.map((img, idx) => `
            <button 
              onclick="setDetailImage(${idx})"
              class="w-16 h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${idx === state.activeDetailImageIndex ? 'border-meesho-purple shadow-sm scale-105' : 'border-gray-200 opacity-70 hover:opacity-100'}"
            >
              <img src="${img}" alt="Thumbnail" class="w-full h-full object-cover" />
            </button>
          `).join("")}
        </div>

        <!-- Action CTAs (Add to Cart / Buy Now) -->
        <div class="grid grid-cols-2 gap-3 mt-3">
          <button 
            onclick="detailAddToCart()"
            class="w-full py-3 px-4 border-2 border-meesho-purple text-meesho-purple font-bold rounded-lg text-sm hover:bg-meesho-light transition-all flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            Add to Cart
          </button>
          <button 
            onclick="detailBuyNow()"
            class="w-full py-3 px-4 bg-meesho-purple text-white font-bold rounded-lg text-sm hover:bg-meesho-purple-dark transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            Buy Now
          </button>
        </div>

        <!-- Share Button (WhatsApp / Copy link) -->
        <div class="flex items-center justify-center gap-4 text-xs text-gray-500 pt-2 border-t border-gray-100">
          <button onclick="shareProductWhatsApp('${p.title}')" class="flex items-center gap-1.5 hover:text-green-600 font-medium">
            <span class="text-green-500 text-sm">💬</span> Share on WhatsApp
          </button>
          <span>•</span>
          <button onclick="copyProductLink()" class="flex items-center gap-1.5 hover:text-meesho-purple font-medium">
            🔗 Copy Link
          </button>
        </div>
      </div>

      <!-- Right Column: Product Info & Specs (7 cols) -->
      <div class="md:col-span-7 flex flex-col gap-4 overflow-y-auto max-h-[75vh] pr-2">
        
        <!-- Breadcrumb / Category -->
        <div class="text-xs text-gray-400 flex items-center gap-1">
          <span>Home</span>
          <span>&gt;</span>
          <span>${p.category}</span>
          <span>&gt;</span>
          <span class="text-gray-600">${p.subCategory}</span>
        </div>

        <!-- Title -->
        <h1 class="text-lg sm:text-xl font-bold text-gray-900 leading-snug">${p.title}</h1>

        <!-- Rating & Supplier Strip -->
        <div class="flex items-center gap-3 flex-wrap">
          <span class="rating-pill text-xs">
            ${p.rating} ★
          </span>
          <span class="text-xs text-gray-500 font-medium">${formatNumber(p.ratingsCount)} Ratings, ${formatNumber(p.reviewsCount)} Reviews</span>
          <span class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">${p.supplier}</span>
        </div>

        <!-- Price Section -->
        <div class="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
          <div class="flex items-baseline gap-3">
            <span class="text-2xl sm:text-3xl font-extrabold text-gray-900">₹${p.price}</span>
            <span class="text-sm text-gray-400 line-through">₹${p.mrp}</span>
            <span class="text-sm font-bold text-meesho-green">${p.discount}</span>
          </div>
          <div class="mt-1 flex items-center gap-2 text-xs text-meesho-green font-semibold">
            <span>🏷️</span> ${p.specialOffer}
          </div>
          <div class="mt-2 text-xs text-gray-500 flex items-center gap-3">
            <span class="flex items-center gap-1 text-meesho-green font-medium">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              Free Delivery
            </span>
            <span>•</span>
            <span class="flex items-center gap-1 text-gray-600">
              💵 Cash on Delivery Available
            </span>
          </div>
        </div>

        <!-- Size Selector -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs sm:text-sm font-bold text-gray-800">Select Size</span>
            <button onclick="openSizeChartModal()" class="text-xs text-meesho-purple font-semibold hover:underline">
              📐 Size Chart
            </button>
          </div>
          <div class="flex items-center gap-2 flex-wrap" id="detail-size-options">
            ${p.sizes.map(s => `
              <button 
                onclick="setDetailSize('${s}')"
                class="detail-size-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all ${s === state.selectedDetailSize ? 'border-meesho-purple bg-meesho-light text-meesho-purple shadow-sm ring-1 ring-meesho-purple' : 'border-gray-300 text-gray-700 hover:border-gray-400 bg-white'}"
              >
                ${s}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Delivery & Pincode Checker -->
        <div class="border border-gray-200 rounded-xl p-3.5 bg-white">
          <h4 class="text-xs font-bold text-gray-800 mb-2 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-meesho-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
            Check Delivery Date & COD Availability
          </h4>
          <div class="flex gap-2">
            <input 
              id="detail-pincode-input" 
              type="text" 
              placeholder="Enter 6-digit Pincode" 
              maxlength="6"
              class="w-full px-3 py-1.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-meesho-purple"
            />
            <button 
              onclick="checkDetailPincode()" 
              class="px-4 py-1.5 bg-gray-800 text-white text-xs font-semibold rounded-lg hover:bg-black transition-colors flex-shrink-0"
            >
              Check
            </button>
          </div>
          <div id="pincode-result-msg" class="text-xs mt-2 hidden"></div>
        </div>

        <!-- Product Details / Specifications -->
        <div class="border border-gray-200 rounded-xl p-3.5 bg-white">
          <h4 class="text-xs sm:text-sm font-bold text-gray-800 mb-2">Product Specifications</h4>
          <div class="grid grid-cols-2 gap-2 text-xs">
            ${Object.entries(p.specs).map(([k, v]) => `
              <div class="bg-gray-50 p-2 rounded">
                <span class="text-gray-400 block">${k}</span>
                <span class="text-gray-800 font-semibold mt-0.5 block">${v}</span>
              </div>
            `).join("")}
          </div>
          <div class="mt-3 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-2">
            <strong class="text-gray-800 block mb-1">Description:</strong>
            ${p.description}
          </div>
        </div>

        <!-- Customer Ratings & Reviews -->
        <div class="border border-gray-200 rounded-xl p-3.5 bg-white">
          <div class="flex items-center justify-between mb-3">
            <h4 class="text-xs sm:text-sm font-bold text-gray-800">Customer Ratings & Reviews</h4>
            <span class="text-xs text-meesho-purple font-semibold">${p.rating} out of 5</span>
          </div>

          <!-- Review items -->
          <div class="space-y-3 divide-y divide-gray-100">
            ${p.reviews.map(r => `
              <div class="pt-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                    ${r.name}
                    ${r.verified ? `<span class="text-[10px] bg-green-50 text-green-700 px-1.5 py-0.2 rounded font-normal">Verified Purchase</span>` : ''}
                  </span>
                  <span class="text-[10px] text-gray-400">${r.date}</span>
                </div>
                <div class="flex items-center gap-1 my-1">
                  ${renderStars(r.rating)}
                </div>
                <p class="text-xs text-gray-600 mt-1">${r.comment}</p>
              </div>
            `).join("")}
          </div>
        </div>

      </div>

    </div>
  `;
}

function setDetailImage(index) {
  state.activeDetailImageIndex = index;
  const mainImg = document.getElementById("detail-main-img");
  if (mainImg && state.currentProductDetail) {
    mainImg.src = state.currentProductDetail.images[index];
  }
}

function setDetailSize(size) {
  state.selectedDetailSize = size;
  const buttons = document.querySelectorAll(".detail-size-btn");
  buttons.forEach(btn => {
    const isSelected = btn.textContent.trim() === size;
    btn.className = `detail-size-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all ${
      isSelected 
        ? 'border-meesho-purple bg-meesho-light text-meesho-purple shadow-sm ring-1 ring-meesho-purple' 
        : 'border-gray-300 text-gray-700 hover:border-gray-400 bg-white'
    }`;
  });
}

function checkDetailPincode() {
  const input = document.getElementById("detail-pincode-input");
  const msg = document.getElementById("pincode-result-msg");
  if (!input || !msg) return;

  const val = input.value.trim();
  if (val.length !== 6 || isNaN(val)) {
    msg.className = "text-xs mt-2 text-red-500 font-medium";
    msg.textContent = "Please enter a valid 6-digit postal code.";
    msg.classList.remove("hidden");
    return;
  }

  // Realistic delivery calculation (3-4 days ahead)
  const d = new Date();
  d.setDate(d.getDate() + 3);
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const deliveryDate = d.toLocaleDateString('en-IN', options);

  msg.className = "text-xs mt-2 text-meesho-green font-medium flex items-center gap-1.5";
  msg.innerHTML = `
    <svg class="w-4 h-4 text-meesho-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    <span>Free Delivery by <strong>${deliveryDate}</strong> | Cash on Delivery available</span>
  `;
  msg.classList.remove("hidden");
}

function detailAddToCart() {
  if (!state.currentProductDetail) return;
  addToCart(state.currentProductDetail, state.selectedDetailSize || "Free Size", 1);
}

function detailBuyNow() {
  if (!state.currentProductDetail) return;
  addToCart(state.currentProductDetail, state.selectedDetailSize || "Free Size", 1);
  closeProductDetail();
  openCartDrawer();
}

function shareProductWhatsApp(title) {
  const text = `Hey! Check out this awesome product on Meesho: ${title} - Only ₹${state.currentProductDetail.price}!`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
}

function copyProductLink() {
  navigator.clipboard.writeText(window.location.href);
  showToast("Product link copied to clipboard!");
}

// Size Chart Modal
function openSizeChartModal() {
  document.getElementById("size-chart-modal")?.classList.remove("hidden");
}
function closeSizeChartModal() {
  document.getElementById("size-chart-modal")?.classList.add("hidden");
}

// Checkout Modal Flow
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty!", "error");
    return;
  }

  closeCartDrawer();
  const modal = document.getElementById("checkout-modal");
  if (!modal) return;

  // Reset steps
  setCheckoutStep(1);
  renderCheckoutSummary();
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

function setCheckoutStep(step) {
  const step1 = document.getElementById("checkout-step-1");
  const step2 = document.getElementById("checkout-step-2");
  const step3 = document.getElementById("checkout-step-3");
  const indicator1 = document.getElementById("step-indicator-1");
  const indicator2 = document.getElementById("step-indicator-2");
  const indicator3 = document.getElementById("step-indicator-3");

  if (step === 1) {
    step1?.classList.remove("hidden");
    step2?.classList.add("hidden");
    step3?.classList.add("hidden");
    indicator1?.classList.add("text-meesho-purple", "font-bold");
    indicator2?.classList.remove("text-meesho-purple", "font-bold");
  } else if (step === 2) {
    step1?.classList.add("hidden");
    step2?.classList.remove("hidden");
    step3?.classList.add("hidden");
    indicator2?.classList.add("text-meesho-purple", "font-bold");
  } else if (step === 3) {
    step1?.classList.add("hidden");
    step2?.classList.add("hidden");
    step3?.classList.remove("hidden");
    indicator3?.classList.add("text-meesho-purple", "font-bold");
  }
}

function handleAddressSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("addr-name").value.trim();
  const phone = document.getElementById("addr-phone").value.trim();
  const house = document.getElementById("addr-house").value.trim();
  const street = document.getElementById("addr-street").value.trim();
  const pincode = document.getElementById("addr-pincode").value.trim();
  const city = document.getElementById("addr-city").value.trim();
  const stateVal = document.getElementById("addr-state").value.trim();

  if (!name || !phone || !house || !street || !pincode || !city || !stateVal) {
    showToast("Please fill all address fields", "error");
    return;
  }

  state.currentAddress = { name, phone, house, street, pincode, city, state: stateVal };
  setCheckoutStep(2);
}

function renderCheckoutSummary() {
  const totalProductPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const elements = document.querySelectorAll(".checkout-final-amount");
  elements.forEach(el => el.textContent = `₹${totalProductPrice}`);
}

function completeOrder() {
  const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value || "COD";
  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const orderId = "MSH-" + Math.floor(100000 + Math.random() * 900000);

  const order = {
    orderId,
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    items: [...state.cart],
    total,
    address: state.currentAddress || { name: "Customer", house: "Plot 12", street: "Main Road", city: "New Delhi", pincode: "110001" },
    paymentMethod,
    status: "Confirmed"
  };

  state.orders.unshift(order);
  saveOrders();

  // Clear cart
  state.cart = [];
  saveCart();

  // Update success view
  document.getElementById("confirmed-order-id").textContent = orderId;
  document.getElementById("confirmed-order-total").textContent = `₹${total}`;
  setCheckoutStep(3);
}

// My Orders Modal
function openOrdersModal() {
  const modal = document.getElementById("orders-modal");
  const content = document.getElementById("orders-list-container");
  if (!modal || !content) return;

  if (state.orders.length === 0) {
    content.innerHTML = `
      <div class="py-12 text-center">
        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
        </div>
        <h4 class="font-bold text-gray-800">No Orders Placed Yet</h4>
        <p class="text-xs text-gray-500 mt-1">When you place an order, it will appear here with live tracking.</p>
      </div>
    `;
  } else {
    content.innerHTML = state.orders.map(o => `
      <div class="border border-gray-200 rounded-xl p-4 bg-white mb-4 shadow-sm">
        <div class="flex justify-between items-center pb-2 border-b border-gray-100 text-xs">
          <div>
            <span class="font-bold text-gray-900">Order #${o.orderId}</span>
            <span class="text-gray-400 ml-2">Placed on ${o.date}</span>
          </div>
          <span class="px-2 py-0.5 bg-green-50 text-green-700 font-semibold rounded text-[11px]">
            ${o.status}
          </span>
        </div>

        <div class="py-3 divide-y divide-gray-50">
          ${o.items.map(it => `
            <div class="flex items-center gap-3 py-2">
              <img src="${it.image}" alt="${it.title}" class="w-12 h-14 object-cover rounded" />
              <div class="flex-1">
                <h5 class="text-xs font-medium text-gray-800 line-clamp-1">${it.title}</h5>
                <span class="text-[11px] text-gray-500">Size: ${it.size} | Qty: ${it.quantity}</span>
              </div>
              <span class="text-xs font-bold text-gray-900">₹${it.price * it.quantity}</span>
            </div>
          `).join("")}
        </div>

        <!-- Tracking Bar -->
        <div class="pt-2 border-t border-gray-100">
          <div class="flex justify-between text-[11px] text-gray-500 mb-1">
            <span class="text-meesho-green font-bold">Ordered ✓</span>
            <span class="text-meesho-purple font-semibold">Packed</span>
            <span>Shipped</span>
            <span>Delivery</span>
          </div>
          <div class="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div class="bg-meesho-purple h-full w-1/2"></div>
          </div>
        </div>

        <div class="mt-3 flex justify-between items-center text-xs">
          <span class="text-gray-500">Payment: <strong>${o.paymentMethod}</strong></span>
          <span class="text-sm font-bold text-gray-900">Total: ₹${o.total}</span>
        </div>
      </div>
    `).join("");
  }

  modal.classList.remove("hidden");
}

function closeOrdersModal() {
  document.getElementById("orders-modal")?.classList.add("hidden");
}

// Authentication Modal (Phone OTP Mock Flow)
function openAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  document.getElementById("auth-phone-step")?.classList.remove("hidden");
  document.getElementById("auth-otp-step")?.classList.add("hidden");
  modal.classList.remove("hidden");
}

function closeAuthModal() {
  document.getElementById("auth-modal")?.classList.add("hidden");
}

function sendAuthOtp() {
  const input = document.getElementById("auth-phone-input");
  const phone = input?.value.trim();
  if (!phone || phone.length !== 10 || isNaN(phone)) {
    showToast("Please enter a valid 10-digit mobile number", "error");
    return;
  }

  state._pendingPhone = phone;
  document.getElementById("auth-phone-step")?.classList.add("hidden");
  document.getElementById("auth-otp-step")?.classList.remove("hidden");
  document.getElementById("otp-sent-to-number").textContent = `+91 ${phone}`;

  // Mock auto-fill OTP after 1 second for user convenience
  setTimeout(() => {
    const otpInput = document.getElementById("auth-otp-input");
    if (otpInput) otpInput.value = "1234";
    showToast("Mock OTP Auto-filled: 1234");
  }, 800);
}

function verifyAuthOtp() {
  const otpInput = document.getElementById("auth-otp-input");
  const otp = otpInput?.value.trim();
  if (otp !== "1234") {
    showToast("Invalid OTP! Try 1234", "error");
    return;
  }

  state.user = {
    isLoggedIn: true,
    phone: state._pendingPhone || "9876543210",
    name: "Aman Verma"
  };
  saveUser();
  closeAuthModal();
  showToast(`Welcome back, ${state.user.name}!`);
}

// Supplier Modal & Download App Modal
function openSupplierModal() {
  document.getElementById("supplier-modal")?.classList.remove("hidden");
}
function closeSupplierModal() {
  document.getElementById("supplier-modal")?.classList.add("hidden");
}

function openDownloadModal() {
  document.getElementById("download-modal")?.classList.remove("hidden");
}
function closeDownloadModal() {
  document.getElementById("download-modal")?.classList.add("hidden");
}

// Mobile Navigation Drawer
function openMobileDrawer() {
  const drawer = document.getElementById("mobile-menu-drawer");
  const overlay = document.getElementById("mobile-menu-overlay");
  if (drawer && overlay) {
    overlay.classList.remove("hidden");
    setTimeout(() => drawer.style.transform = "translateX(0)", 10);
  }
}

function closeMobileDrawer() {
  const drawer = document.getElementById("mobile-menu-drawer");
  const overlay = document.getElementById("mobile-menu-overlay");
  if (drawer && overlay) {
    drawer.style.transform = "translateX(-100%)";
    setTimeout(() => overlay.classList.add("hidden"), 300);
  }
}

// Helpers
function formatNumber(num) {
  if (!num) return "0";
  if (num >= 1000) return (num / 1000).toFixed(1) + "k";
  return num.toString();
}

function renderStars(rating) {
  let starsHtml = "";
  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= rating;
    starsHtml += `
      <svg class="w-3.5 h-3.5 ${isFilled ? 'text-yellow-400 fill-current' : 'text-gray-300'}" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    `;
  }
  return starsHtml;
}

// Event Listeners for Filters & Sorting
function initEventListeners() {
  const sortSelect = document.getElementById("sort-by-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.activeFilters.sortBy = e.target.value;
      applyFilters();
    });
  }
}

