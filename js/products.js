// Meesho Product Catalog Mock Database
const PRODUCTS = [
  {
    id: "msh-001",
    title: "Graceful Royal Blue Kanjivaram Soft Silk Saree with Blouse Piece",
    category: "Women Ethnic",
    subCategory: "Sarees",
    gender: "Women",
    price: 499,
    mrp: 1499,
    discount: "66% off",
    rating: 4.3,
    ratingsCount: 18450,
    reviewsCount: 4210,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "Vardhman Handlooms, Surat (4.2 ★)",
    fabric: "Silk Blend",
    color: "Blue",
    sizes: ["Free Size"],
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Experience sheer elegance with this exquisite Kanjivaram soft silk saree. Features a rich jacquard zari woven border with heavy pallu. Comes with an unstitched matching blouse piece. Ideal for weddings, festive occasions, and traditional functions.",
    specs: {
      "Saree Fabric": "Soft Litchi Silk Blend",
      "Blouse Fabric": "Jacquard Silk",
      "Pattern": "Zari Woven Border & Floral Butti",
      "Saree Length": "5.5 meters",
      "Blouse Length": "0.8 meter (Unstitched)",
      "Occasion": "Festive, Wedding, Party",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Pooja Sharma", rating: 5, date: "3 days ago", comment: "Saree fabric is very soft and looks exactly like the photo! Perfect for family functions.", verified: true },
      { name: "Ananya Patel", rating: 4, date: "1 week ago", comment: "Very good quality at this price point. Fast delivery within 3 days.", verified: true },
      { name: "Rekha Devi", rating: 5, date: "2 weeks ago", comment: "Value for money. Color is rich royal blue. Loved it!", verified: true }
    ]
  },
  {
    id: "msh-002",
    title: "Women Floral Printed Rayon Anarkali Kurta with Pant and Dupatta Set",
    category: "Women Ethnic",
    subCategory: "Kurta Sets",
    gender: "Women",
    price: 549,
    mrp: 1299,
    discount: "57% off",
    rating: 4.4,
    ratingsCount: 24300,
    reviewsCount: 5820,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "Jaipur Prints & Boutique (4.5 ★)",
    fabric: "Rayon",
    color: "Pink",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Flaunt your stylish ethnic look with this beautiful floral printed Anarkali Kurti set. Made from premium quality breathable rayon fabric ensuring all-day comfort. Accompanied by a matching ankle-length trouser and printed chiffon dupatta.",
    specs: {
      "Kurta Fabric": "Pure Viscose Rayon",
      "Bottom Fabric": "Rayon Blend",
      "Dupatta Fabric": "Lightweight Chiffon",
      "Sleeve Length": "Three-Quarter Sleeves",
      "Fit / Shape": "Anarkali / Flared",
      "Neck": "Round Neck with Gota Patti Detailing",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Meena Kumari", rating: 5, date: "Yesterday", comment: "Super comfortable! Fitting was perfect according to the size chart.", verified: true },
      { name: "Sneha Reddy", rating: 4, date: "4 days ago", comment: "Material is very soft and didn't bleed color during wash.", verified: true }
    ]
  },
  {
    id: "msh-003",
    title: "Men's 100% Pure Combed Cotton Regular Fit Casual Spread Collar Shirt",
    category: "Men",
    subCategory: "Shirts",
    gender: "Men",
    price: 369,
    mrp: 999,
    discount: "63% off",
    rating: 4.1,
    ratingsCount: 14120,
    reviewsCount: 2940,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "CottonCraft Garments, Tirupur (4.0 ★)",
    fabric: "Cotton",
    color: "White",
    sizes: ["M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Elevate your daily formal and casual style with this classic cotton spread collar shirt. Breathable fabric keeps you cool all day long, featuring curved hemline and durable button closures.",
    specs: {
      "Fabric": "100% Breathable Cotton",
      "Pattern": "Solid Plain",
      "Fit": "Regular Fit",
      "Collar": "Spread Collar",
      "Sleeves": "Full Sleeves with Button Cuffs",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Rohan Verma", rating: 4, date: "5 days ago", comment: "Decent shirt for daily office wear. Fit is spot on.", verified: true },
      { name: "Amit Kumar", rating: 5, date: "1 week ago", comment: "Cloth quality is good and stitching is neat. Worth ₹369!", verified: true }
    ]
  },
  {
    id: "msh-004",
    title: "Korean Style Oversized High-Waisted Baggy Cargo Jeans for Women",
    category: "Women Western",
    subCategory: "Jeans",
    gender: "Women",
    price: 599,
    mrp: 1499,
    discount: "60% off",
    rating: 4.5,
    ratingsCount: 9400,
    reviewsCount: 2150,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "Urban Chic Apparels, Delhi (4.4 ★)",
    fabric: "Denim",
    color: "Black",
    sizes: ["26", "28", "30", "32", "34"],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Trending baggy cargo jeans with multi-pocket utility styling. High-rise waist gives a flattering silhouette while the relaxed straight leg cut ensures ultimate street style comfort.",
    specs: {
      "Fabric": "Non-Stretchable Washed Denim",
      "Waist Rise": "High Rise",
      "Fit": "Wide Leg / Baggy Cargo",
      "Pockets": "6 Deep Utility Pockets",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Divya N", rating: 5, date: "2 days ago", comment: "Trendiest jeans I bought online! Super comfy and looks aesthetic.", verified: true },
      { name: "Kritika S", rating: 4, date: "6 days ago", comment: "Good quality denim. Length is perfect for sneakers.", verified: true }
    ]
  },
  {
    id: "msh-005",
    title: "True Wireless Bluetooth Earbuds with 40H Playtime & Environmental Noise Cancellation",
    category: "Electronics",
    subCategory: "Audio",
    gender: "Unisex",
    price: 499,
    mrp: 1999,
    discount: "75% off",
    rating: 4.2,
    ratingsCount: 38200,
    reviewsCount: 9100,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "SoundWave Gadgets, Bengaluru (4.3 ★)",
    fabric: "Matte Plastic",
    color: "Black",
    sizes: ["Free Size"],
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Enjoy deep bass and ultra-clear calling with Quad Mics ENC. Equipped with instant Type-C fast charging, IPX5 water resistance, low latency gaming mode, and 13mm dynamic audio drivers.",
    specs: {
      "Battery Life": "Up to 40 Hours with Charging Case",
      "Bluetooth Version": "5.3 Instant Auto-Pairing",
      "Water Resistance": "IPX5 Sweatproof",
      "Charging Time": "60 Mins (Type-C)",
      "Warranty": "6 Months Brand Warranty",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Kunal Ghosh", rating: 5, date: "3 days ago", comment: "Bass is unbelievable at ₹499! Battery easily lasts 3-4 days on single charge.", verified: true },
      { name: "Vikram Singh", rating: 4, date: "1 week ago", comment: "Calling quality is clear even in outdoor traffic.", verified: true }
    ]
  },
  {
    id: "msh-006",
    title: "All-in-One Professional Makeup Kit with 32-Color Eyeshadow & Matte Lipsticks",
    category: "Beauty & Health",
    subCategory: "Makeup",
    gender: "Women",
    price: 329,
    mrp: 899,
    discount: "63% off",
    rating: 4.3,
    ratingsCount: 16700,
    reviewsCount: 3840,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "Glamour Glow Cosmetics, Mumbai (4.2 ★)",
    fabric: "Powder / Cream",
    color: "Multicolor",
    sizes: ["Standard"],
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Complete beauty makeup set featuring highly pigmented eyeshadows, waterproof blushes, highlighter, contour powder, and 4 long-lasting mini matte lipsticks. Perfect for beginners and wedding gifts.",
    specs: {
      "Finish Type": "Matte and Shimmer",
      "Skin Type": "Suitable for all skin types",
      "Features": "Cruelty-free, Waterproof, Long-wear",
      "Shelf Life": "24 Months",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Simran Kaur", rating: 5, date: "Yesterday", comment: "Pigmentation is very nice and doesn't crease. Great travel palette!", verified: true }
    ]
  },
  {
    id: "msh-007",
    title: "100% Glace Cotton Double Bed King Size Bedsheet with 2 Matching Pillow Covers",
    category: "Home & Kitchen",
    subCategory: "Bedsheets",
    gender: "Unisex",
    price: 289,
    mrp: 799,
    discount: "64% off",
    rating: 4.2,
    ratingsCount: 31200,
    reviewsCount: 7600,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "Panipat Texcraft Mills (4.3 ★)",
    fabric: "Cotton",
    color: "Floral Blue",
    sizes: ["King (90x100 inches)"],
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Transform your bedroom into a luxury sanctuary with this premium floral printed Glace cotton bedsheet. Fade-resistant colors with high thread count ensuring ultra softness and hassle-free machine washing.",
    specs: {
      "Material": "Ultra Soft Glace Cotton",
      "Dimensions": "Bedsheet: 230 x 250 cm | Pillow covers: 45 x 68 cm",
      "Thread Count": "220 TC",
      "Care Instructions": "Machine Wash Warm, Tumble Dry Low",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Sunita Joshi", rating: 5, date: "4 days ago", comment: "Size is very generous, tucks in easily on my 8-inch mattress.", verified: true },
      { name: "Prerna Roy", rating: 4, date: "1 week ago", comment: "Colors didn't fade even after two washes. Soft feel.", verified: true }
    ]
  },
  {
    id: "msh-008",
    title: "Ethnic Gold Plated Kundan & Pearl Choker Necklace Set with Jhumkas & Maangtikka",
    category: "Jewellery & Accessories",
    subCategory: "Jewellery Sets",
    gender: "Women",
    price: 249,
    mrp: 899,
    discount: "72% off",
    rating: 4.4,
    ratingsCount: 22100,
    reviewsCount: 5400,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "Zaveri Handicrafts, Jaipur (4.4 ★)",
    fabric: "Brass / Alloy",
    color: "Gold",
    sizes: ["Free Size"],
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Grace your festive attire with this timeless traditional bridal Kundan choker set. Adorned with emerald green stones and cascading lustrous faux pearls. Includes matching drop earrings and maangtikka.",
    specs: {
      "Base Metal": "Brass with Micro Gold Plating",
      "Stone Type": "Kundan & Freshwater Pearls",
      "Closure": "Adjustable Dori / Thread",
      "Occasion": "Weddings, Sangeet, Festivals",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Ritika Sen", rating: 5, date: "2 days ago", comment: "Looks like real heavy gold jewellery! Received so many compliments.", verified: true },
      { name: "Bhavna Jain", rating: 5, date: "5 days ago", comment: "Superb shine and lightweight to wear all day.", verified: true }
    ]
  },
  {
    id: "msh-009",
    title: "Men's Ultra-Lightweight Breathable Mesh Sports Running & Walking Shoes",
    category: "Bags & Footwear",
    subCategory: "Men Footwear",
    gender: "Men",
    price: 389,
    mrp: 1199,
    discount: "67% off",
    rating: 4.1,
    ratingsCount: 19800,
    reviewsCount: 4620,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "AeroStep Footwear, Agra (4.1 ★)",
    fabric: "Mesh & EVA",
    color: "Black",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Designed for active everyday life, these lightweight sneakers feature high-rebound cushioning EVA sole with breathable air-mesh upper to keep your feet dry and energetic throughout your workout or daily commute.",
    specs: {
      "Upper Material": "Breathable Flyknit Mesh",
      "Sole Material": "Anti-Skid Cushioned EVA",
      "Closure": "Lace-Up",
      "Toe Shape": "Round Toe",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Deepak Sahu", rating: 4, date: "3 days ago", comment: "Very lightweight, feels like wearing socks. Good for morning jogs.", verified: true }
    ]
  },
  {
    id: "msh-010",
    title: "Cute Kids Boys Cotton T-Shirt & Denim Shorts Summer Clothing Set (Pack of 2)",
    category: "Kids",
    subCategory: "Boys Clothing",
    gender: "Kids",
    price: 299,
    mrp: 799,
    discount: "62% off",
    rating: 4.3,
    ratingsCount: 11200,
    reviewsCount: 2300,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "TinyTots Kids Apparel, Ludhiana (4.3 ★)",
    fabric: "Cotton",
    color: "Yellow",
    sizes: ["2-3 Yrs", "3-4 Yrs", "4-5 Yrs", "5-6 Yrs", "6-7 Yrs"],
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Dress your handsome little boy in this fun, colorful dinosaur printed cotton t-shirt paired with elasticated soft denim shorts. Bio-washed skin-friendly fabric safe for baby skin.",
    specs: {
      "Fabric": "100% Bio-Washed Combed Cotton",
      "Waistband": "Soft Elastic with Drawstrings",
      "Includes": "1 Graphic T-Shirt + 1 Denim Shorts",
      "Age Group": "2 to 7 Years",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Pooja Mehta", rating: 5, date: "Yesterday", comment: "So cute! Fabric is very soft for my 3-year-old toddler.", verified: true }
    ]
  },
  {
    id: "msh-011",
    title: "Women's Elegant Embroidered Georgette Semi-Stitched Anarkali Gown",
    category: "Women Ethnic",
    subCategory: "Gowns",
    gender: "Women",
    price: 699,
    mrp: 1899,
    discount: "63% off",
    rating: 4.5,
    ratingsCount: 15300,
    reviewsCount: 3910,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "Surat Fashion Hub (4.6 ★)",
    fabric: "Georgette",
    color: "Maroon",
    sizes: ["Semi-Stitched (Up to 44)"],
    images: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Make a striking statement at festive events with this floor-length embroidered Georgette gown. Embellished with zari resham threadwork, sequence sparkles, and comfortable micro silk inner lining.",
    specs: {
      "Gown Fabric": "Heavy Fox Georgette",
      "Inner Fabric": "Silk Crepe",
      "Flair": "3.5 Meters Grand Flair",
      "Work": "Embroidered Sequence & Zari Cording",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Nisha Agarwal", rating: 5, date: "3 days ago", comment: "Looks like a 3000 rupee gown from high-end showroom!", verified: true }
    ]
  },
  {
    id: "msh-012",
    title: "1.96 Inch AMOLED Smartwatch with Bluetooth Calling & 100+ Sports Modes",
    category: "Electronics",
    subCategory: "Smartwatches",
    gender: "Unisex",
    price: 799,
    mrp: 2999,
    discount: "73% off",
    rating: 4.3,
    ratingsCount: 29500,
    reviewsCount: 7100,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "PulseTech Electronics (4.3 ★)",
    fabric: "Silicone & Zinc Alloy",
    color: "Black",
    sizes: ["Free Size"],
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Stay connected with crisp Bluetooth calls directly from your wrist. Features 600 Nits bright AMOLED display, 24/7 heart rate monitor, SpO2 sensor, sleep tracker, and voice assistant.",
    specs: {
      "Display": "1.96 inch HD Curved Display",
      "Battery": "Up to 7 Days on single charge",
      "Features": "Bluetooth Calling, Calculator, Games, IP68 Waterproof",
      "Compatible OS": "Android 5.0+ and iOS 9.0+",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Manish Tiwari", rating: 5, date: "4 days ago", comment: "Speaker volume is very loud and clear. Great watch under ₹1000.", verified: true }
    ]
  },
  {
    id: "msh-013",
    title: "Handcrafted Jute Tote Shoulder Handbag with Floral Embroidery for Women",
    category: "Bags & Footwear",
    subCategory: "Handbags",
    gender: "Women",
    price: 269,
    mrp: 699,
    discount: "61% off",
    rating: 4.4,
    ratingsCount: 8900,
    reviewsCount: 1980,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "Kolkata Jute Crafts (4.5 ★)",
    fabric: "Eco Jute",
    color: "Beige",
    sizes: ["Standard"],
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Eco-friendly, chic, and spacious jute tote bag with artisanal floral embroidery. Features sturdy reinforced vegan leather handles and zip compartment for books, tiffin, and wallet.",
    specs: {
      "Material": "100% Biodegradable Treated Jute",
      "Closure": "Smooth Zipper with Inside Pocket",
      "Dimensions": "35 x 30 x 12 cm",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Geeta Rani", rating: 5, date: "1 week ago", comment: "Very sturdy and looks very stylish for college and shopping.", verified: true }
    ]
  },
  {
    id: "msh-014",
    title: "Non-Stick 3-Piece Cookware Set (Dosa Tawa, Fry Pan, Kadai with Glass Lid)",
    category: "Home & Kitchen",
    subCategory: "Cookware",
    gender: "Unisex",
    price: 649,
    mrp: 1799,
    discount: "64% off",
    rating: 4.2,
    ratingsCount: 17800,
    reviewsCount: 4120,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "ChefStar Kitchenware, Rajkot (4.2 ★)",
    fabric: "Aluminium Non-Stick",
    color: "Red",
    sizes: ["Standard 3-Pack"],
    images: [
      "https://images.unsplash.com/photo-1584990347449-399092497645?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Cook healthy meals with minimal oil! 5-layer granite stone non-stick coating ensures uniform heat distribution and effortless food release. Induction and gas stove compatible.",
    specs: {
      "Coating": "PFOA Free 5-Layer Granite Non-Stick",
      "Compatibility": "Gas Stove & Induction Compatible",
      "Includes": "1 Kadai with Lid (2.5L), 1 Dosa Tawa (28cm), 1 Fry Pan (24cm)",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Kavita Nair", rating: 5, date: "3 days ago", comment: "Dosas slide off like butter! Very good nonstick coating.", verified: true }
    ]
  },
  {
    id: "msh-015",
    title: "Men's Oversized Anime Graphic Print 240 GSM Pure Cotton T-Shirt",
    category: "Men",
    subCategory: "T-Shirts",
    gender: "Men",
    price: 319,
    mrp: 799,
    discount: "60% off",
    rating: 4.5,
    ratingsCount: 21400,
    reviewsCount: 5200,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "StreetWear Club, Mumbai (4.4 ★)",
    fabric: "Cotton",
    color: "Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Level up your aesthetic with this drop-shoulder streetwear oversized tee. Features premium fade-proof back graphic print and heavy 240 GSM bio-washed French terry cotton.",
    specs: {
      "Fabric": "100% Combed Heavy Cotton (240 GSM)",
      "Fit": "Baggy Drop Shoulder Oversized Fit",
      "Neck": "Ribbed Lycra Crew Neck",
      "Print": "High-Definition Screen Print",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Arjun Das", rating: 5, date: "Yesterday", comment: "Thick fabric and print quality is top notch. Just what I wanted!", verified: true }
    ]
  },
  {
    id: "msh-016",
    title: "Traditional Multicolored Rajasthani Jaipuri Cotton Printed Saree",
    category: "Women Ethnic",
    subCategory: "Sarees",
    gender: "Women",
    price: 349,
    mrp: 899,
    discount: "61% off",
    rating: 4.3,
    ratingsCount: 34200,
    reviewsCount: 8120,
    freeDelivery: true,
    specialOffer: "₹50 off on 1st order",
    trusted: true,
    supplier: "Jaipur Heritage Looms (4.4 ★)",
    fabric: "Cotton Blend",
    color: "Multicolor",
    sizes: ["Free Size"],
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Authentic Jaipuri hand-block print saree crafted with ultra-light breathable cotton fabric. Vibrant peacock motifs and traditional border make it great for office and daily casual wear.",
    specs: {
      "Saree Length": "5.5 Meters",
      "Blouse Piece": "0.80 Meter Attached",
      "Fabric": "Breathable Malmal Cotton Blend",
      "Wash Care": "Hand Wash / Gentle Machine Wash",
      "Country of Origin": "India"
    },
    reviews: [
      { name: "Shweta M", rating: 5, date: "4 days ago", comment: "Extremely lightweight and comfortable in humid weather.", verified: true }
    ]
  }
];

// Top visual categories data
const VISUAL_CATEGORIES = [
  { name: "All Categories", filter: "all", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=200&auto=format&fit=crop&q=80" },
  { name: "Women Ethnic", filter: "Women Ethnic", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&auto=format&fit=crop&q=80" },
  { name: "Women Western", filter: "Women Western", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&auto=format&fit=crop&q=80" },
  { name: "Men's Fashion", filter: "Men", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&auto=format&fit=crop&q=80" },
  { name: "Kids Store", filter: "Kids", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=200&auto=format&fit=crop&q=80" },
  { name: "Home & Kitchen", filter: "Home & Kitchen", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200&auto=format&fit=crop&q=80" },
  { name: "Beauty & Health", filter: "Beauty & Health", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&auto=format&fit=crop&q=80" },
  { name: "Jewellery", filter: "Jewellery & Accessories", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&auto=format&fit=crop&q=80" },
  { name: "Footwear & Bags", filter: "Bags & Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&auto=format&fit=crop&q=80" },
  { name: "Electronics", filter: "Electronics", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&auto=format&fit=crop&q=80" }
];

// Mega menu navigation structure
const MEGA_MENU_DATA = {
  "Women Ethnic": {
    columns: [
      { title: "All Sarees", items: ["Silk Sarees", "Cotton Sarees", "Georgette Sarees", "Chiffon Sarees", "Embroidered Sarees", "Bandhani Sarees"] },
      { title: "Kurtis & Sets", items: ["Anarkali Kurtis", "Rayon Kurtis", "Kurta Pant Sets", "Chikankari Kurtas", "Short Kurtis", "Flared Kurtis"] },
      { title: "Suits & Dress Material", items: ["Cotton Suits", "Chanderi Suits", "Patiala Suits", "Unstitched Material"] },
      { title: "Lehenga & Gowns", items: ["Bridal Lehengas", "Partywear Gowns", "Semi-Stitched Lehengas", "Dupattas & Shawls"] }
    ]
  },
  "Women Western": {
    columns: [
      { title: "Topwear", items: ["Tops & Tunics", "Dresses", "T-Shirts", "Shirts", "Jumpsuits", "Crop Tops"] },
      { title: "Bottomwear", items: ["Jeans & Jeggings", "Trousers & Pants", "Palazzos", "Skirts & Shorts", "Leggings"] },
      { title: "Winter & Sleepwear", items: ["Jackets & Sweaters", "Nightsuits", "Nightgowns & Robes", "Thermal Innerwear"] },
      { title: "Plus Size & Maternity", items: ["Plus Size Dresses", "Maternity Kurtis", "Maternity Bottoms"] }
    ]
  },
  "Men": {
    columns: [
      { title: "Topwear", items: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Polo T-Shirts", "Sweatshirts & Hoodies"] },
      { title: "Bottomwear", items: ["Jeans", "Trousers & Chinos", "Track Pants & Joggers", "Cargo Pants", "Shorts"] },
      { title: "Ethnicwear", items: ["Kurtas & Kurta Sets", "Nehru Jackets", "Sherwanis", "Dhotis"] },
      { title: "Accessories", items: ["Watches", "Belts & Wallets", "Sunglasses", "Caps & Hats"] }
    ]
  },
  "Kids": {
    columns: [
      { title: "Boys Fashion", items: ["T-Shirts & Shirts", "Shorts & Jeans", "Ethnic Kurta Pyjamas", "Party Suits"] },
      { title: "Girls Fashion", items: ["Frocks & Dresses", "Tops & Skirts", "Lehenga Cholis", "Kurti Sets"] },
      { title: "Baby & Infant Care", items: ["Rompers & Onesies", "Baby Blankets", "Feeding & Nursing", "Diapers & Wipes"] },
      { title: "Toys & Games", items: ["Educational Toys", "Remote Control Cars", "Board Games", "Soft Dolls"] }
    ]
  },
  "Home & Kitchen": {
    columns: [
      { title: "Furnishing", items: ["Bedsheets", "Curtains", "Cushion Covers", "Blankets & Quilts", "Carpets & Rugs"] },
      { title: "Kitchen & Dining", items: ["Cookware & Non-Stick Sets", "Containers & Storage", "Water Bottles", "Dinnerware"] },
      { title: "Home Decor", items: ["Wall Clocks", "Wall Hangings", "Artificial Plants & Flowers", "Stickers & Posters"] },
      { title: "Home Storage", items: ["Shoe Racks", "Laundry Bags", "Hangers & Organizers"] }
    ]
  },
  "Beauty & Health": {
    columns: [
      { title: "Makeup", items: ["Lipsticks & Liners", "Eyeliners & Kajal", "Foundations & Compacts", "Eyeshadow Palettes", "Makeup Brushes"] },
      { title: "Skincare", items: ["Face Wash & Scrubs", "Moisturizers & Serums", "Sunscreen Creams", "Face Masks"] },
      { title: "Haircare", items: ["Hair Oils & Shampoos", "Conditioners & Serums", "Hair Dryers & Straighteners"] },
      { title: "Fragrances", items: ["Perfumes & EDP", "Body Sprays & Deodorants", "Attar & Roll-ons"] }
    ]
  },
  "Jewellery & Accessories": {
    columns: [
      { title: "Jewellery Sets", items: ["Kundan Sets", "Bridal Jewellery", "American Diamond Sets", "Oxidised Silver Sets"] },
      { title: "Earrings & Studs", items: ["Jhumkas & Chaandbalis", "Drop Earrings", "Hoops & Studs"] },
      { title: "Bangles & Mangalsutra", items: ["Chudas & Bangles", "Dailywear Mangalsutra", "Anklets & Payal"] },
      { title: "Women Accessories", items: ["Hair Accessories", "Brooches", "Smart Watches", "Scarves"] }
    ]
  },
  "Bags & Footwear": {
    columns: [
      { title: "Women Footwear", items: ["Flats & Kolhapuris", "Heels & Wedges", "Casual Sneakers", "Ethnic Juttis"] },
      { title: "Men Footwear", items: ["Running Shoes", "Formal Loafers", "Slippers & Flip Flops", "Sandals"] },
      { title: "Handbags & Wallets", items: ["Tote Bags", "Sling Bags", "Backpacks", "Party Clutches", "Wallets"] }
    ]
  },
  "Electronics": {
    columns: [
      { title: "Audio & Sound", items: ["Wireless Earbuds", "Neckbands", "Bluetooth Speakers", "Over-Ear Headphones"] },
      { title: "Wearables", items: ["Smartwatches", "Fitness Bands", "Smart Bands"] },
      { title: "Mobile Accessories", items: ["Fast Chargers & Cables", "Power Banks", "Mobile Covers", "Screen Protectors"] },
      { title: "Home Appliances", items: ["Electric Kettles", "Hand Blenders", "Steam Irons", "Hair Trimmers"] }
    ]
  }
};

