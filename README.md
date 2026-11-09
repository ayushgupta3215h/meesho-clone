# Meesho Clone - E-Commerce Web Application

A pixel-crafted, high-fidelity clone of **Meesho** (India's leading e-commerce platform). Built with modern responsive web standards, tailored to match Meesho's signature **Jamuni/Magenta** branding (`#9f2089`), vibrant typography, promotional banners, multi-level category navigation, product catalog feeds, and full checkout flow.

---

## ✨ Features & Functionality

### 1. Meesho Signature Brand Identity & Header
- **Authentic Meesho Logo**: Vector-styled cursive 'm' icon and brand typography.
- **Top Announcement Bar**: "Download App & Get ₹50 Off on 1st Order", "Become a Supplier (0% Commission)", "Track Orders", and "100% Safe Payments".
- **Global Search Bar**:
  - Search placeholder: *"Try Saree, Kurti, Shoes or Search by Product Code"*.
  - **Live Auto-suggestions dropdown** with popular searches (*Sarees, Kurti Set, Oversized T-Shirt, Smartwatch, Wireless Earbuds, etc.*).
  - Clear button and instant real-time filtering as you type.
- **Header Utilities**:
  - **Download App** button with mock QR code modal.
  - **Become a Supplier** banner & registration popup.
  - **User Profile** dropdown with Login/Sign Up state toggle.
  - **Saved Wishlist** drawer/modal with counter badge.
  - **Cart** button with animated counter badge and slide-over cart drawer.

### 2. Multi-Level Mega Menu Sub-Header
- Primary categories with multi-column mega dropdowns:
  - **Women Ethnic**: Sarees (Silk, Cotton, Georgette), Kurtis & Sets (Anarkali, Rayon, Chikankari), Gowns & Lehengas.
  - **Women Western**: Tops, Dresses, Baggy Jeans, Trousers, Winter & Sleepwear.
  - **Men**: Topwear (Casual & Formal Shirts, Oversized T-Shirts), Jeans, Ethnic Kurta sets.
  - **Kids**: Boys wear, Girls frocks, Rompers, Toys & Games.
  - **Home & Kitchen**: Cotton Bedsheets, Curtains, Non-stick cookware, Home decor.
  - **Beauty & Health**: Eyeshadow palettes, Matte Lipsticks, Haircare, Skincare.
  - **Jewellery & Accessories**: Kundan Choker sets, Silver Jhumkas, Watches.
  - **Bags & Footwear**: Sports running shoes, Ethnic Potli bags, Handbags.
  - **Electronics**: ANC Earbuds, Smartwatches, Mobile accessories.

### 3. Promotional Hero Carousel & Value Strip
- **Auto-sliding Banner Carousel**:
  - Slide 1: *"Mega Blockbuster Sale | Lowest Prices Guaranteed | Free Delivery & Easy Returns"*
  - Slide 2: *"Special Welcome Offer | Flat ₹50 OFF On Your Very First Order"*
  - Slide 3: *"Sell Online with 0% Commission | Join 11 Lakh+ Suppliers"*
  - Manual Next/Prev navigation buttons and interactive dots.
- **Meesho Trust Strip**:
  - Free Delivery on all products across India.
  - Cash on Delivery (COD) available.
  - 7 Days Easy Returns with doorstep pickup.
  - Lowest Price Guarantee directly from wholesale hubs.

### 4. Interactive Product Feed & Filtering System
- **Shop By Category Visual Bubbles**: Circular image tags for one-click filtering.
- **Sidebar Filter Engine**:
  - Filter by Gender / Audience (*Women, Men, Kids, Unisex*).
  - Filter by Price Range (*Under ₹299, ₹300-₹499, ₹500-₹799, ₹800+*).
  - Filter by Customer Rating (*4.0★ & above, 3.5★ & above*).
  - Filter by Fabric (*Cotton, Rayon, Silk Blend, Georgette, Denim*).
  - Filter by Color swatches (*Black, Blue, Pink, White, Red, Gold*).
  - Active Filter Pills (chips) with individual remove and "Clear All" button.
- **Sorting Options**:
  - Relevance, Price: Low to High, Price: High to Low, Customer Rating, Highest Discount.
- **Product Card Details**:
  - High quality Indian e-commerce photography with hover zoom effect.
  - **M-Trusted** supplier badge.
  - Wishlist heart toggle with instant save to `localStorage`.
  - Discounted price, original M.R.P. strikethrough, and discount percentage.
  - Special Offer badge: *"₹50 off on 1st order"*.
  - *"Free Delivery"* indicator.
  - Dark green rating pill (`4.3 ★`) + customer review count.
  - Quick "Add +" button.

### 5. Comprehensive Product Detail Modal
- Multi-image gallery with clickable thumbnail selector.
- Social sharing (*WhatsApp Share* button & *Copy Link*).
- Size selection (*S, M, L, XL, XXL, Free Size*) with active visual feedback.
- **Size Chart Modal** with bust, waist, and length measurements in inches.
- **Interactive Pincode Delivery Checker**: Calculates realistic delivery estimates and confirms COD availability.
- Product Specifications table (Fabric, Pattern, Fit, Country of Origin, etc.).
- Detailed customer reviews with verified purchase badges and star breakdowns.
- Instant "Add to Cart" and "Buy Now" triggers.

### 6. Cart & Multi-Step Checkout Experience
- **Cart Slide-Over Drawer**:
  - Quantity controls (`+` / `-`) and remove option.
  - Order summary breakdown: Total M.R.P., Total Discount, Free Delivery, and Final Total.
  - Highlight badge: *"🎉 You will save ₹XXX on this order!"*.
- **Checkout Modal**:
  - **Step 1: Address**: Full name, mobile, flat/house number, street/landmark, 6-digit pincode, city, state.
  - **Step 2: Payment**: Cash on Delivery (COD), UPI (Google Pay, PhonePe, Paytm), Debit/Credit Card.
  - **Step 3: Order Confirmed**: Celebratory confirmation with Order ID, summary, and order tracking.

### 7. Additional Features
- **My Orders & Live Tracking Modal**: View placed orders with 4-stage tracking progress bar (*Ordered -> Packed -> Shipped -> Delivered*).
- **User Authentication**: Realistic mobile number entry + OTP verification flow (demo auto-fills `1234`).
- **Become a Supplier Modal**: Details Meesho's 0% commission model and seller registration.
- **Responsive Mobile Layout**: Collapsible mobile sidebar navigation drawer and sticky bottom navigation bar (*Home, Categories, Orders, Wishlist, Profile*).
- **Toast Notifications**: Non-intrusive feedback for cart, wishlist, and auth actions.

---

## 📁 Project Structure

```
meesho clone/
│
├── index.html          # Main HTML5 Single Page Application
├── start.bat           # 1-Click launcher to open in default browser
├── server.ps1          # Zero-dependency local HTTP server (localhost:3000)
├── README.md           # Project documentation
│
├── css/
│   └── style.css       # Custom Meesho styling, variables, scrollbar & animations
│
└── js/
    ├── products.js     # Mock database with 16+ rich catalog items & mega-menu data
    └── app.js          # Core application logic, filters, state, cart, modals, checkout
```

---

## 🚀 How to Run

### Option 1: Direct Browser Launch (Simplest)
Double-click `start.bat` or simply double-click `index.html` to open it in any web browser (Google Chrome, Microsoft Edge, Brave, Firefox).

### Option 2: Local HTTP Server (PowerShell)
Right-click `server.ps1` and choose **Run with PowerShell**, or open PowerShell in this folder and run:
```powershell
.\server.ps1
```
Then navigate to `http://localhost:3000` in your browser.

---

## 🎨 Design Reference
- **Primary Brand Color**: `#9f2089` (Meesho Jamuni)
- **Secondary Pink**: `#f43397`
- **Rating Green**: `#038d63`
- **Font**: System Sans-Serif (`-apple-system`, `Segoe UI`, `Roboto`, `Helvetica`)

