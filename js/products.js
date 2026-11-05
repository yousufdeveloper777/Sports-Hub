/* ============================================
   SPORTSHUB - PRODUCT DATA (Central Database)
   ============================================ */

const PRODUCTS = [
  { id: 1, title: "SS Ton Reserve Edition Bat", sport: "cricket", brand: "SS", category: "bats", price: 4500, oldPrice: 6500, rating: 4.5, reviews: 24, emoji: "🏏", badge: "sale", stock: 5, description: "Premium English willow bat, perfect for professional players.", sizes: ["SH", "LH", "SM"] },
  { id: 2, title: "CA Pro 1000 Bat", sport: "cricket", brand: "CA", category: "bats", price: 3200, oldPrice: 0, rating: 4.2, reviews: 18, emoji: "🏏", badge: "new", stock: 3, description: "Kashmir willow bat with excellent balance.", sizes: ["SH", "LH"] },
  { id: 3, title: "Nike Strike Football", sport: "football", brand: "Nike", category: "balls", price: 2800, oldPrice: 3500, rating: 4.7, reviews: 42, emoji: "⚽", badge: "sale", stock: 12, description: "FIFA approved match ball with superior grip.", sizes: ["Size 4", "Size 5"] },
  { id: 4, title: "Adidas Predator Boots", sport: "football", brand: "Adidas", category: "shoes", price: 8500, oldPrice: 0, rating: 4.8, reviews: 31, emoji: "👟", badge: null, stock: 8, description: "Elite football boots for superior control.", sizes: ["7", "8", "9", "10", "11"] },
  { id: 5, title: "Yonex Astrox 88D Racket", sport: "badminton", brand: "Yonex", category: "rackets", price: 12000, oldPrice: 14000, rating: 4.9, reviews: 56, emoji: "🏸", badge: "sale", stock: 4, description: "Professional badminton racket used by champions.", sizes: ["3U", "4U"] },
  { id: 6, title: "Yonex Mavis 350 Shuttles", sport: "badminton", brand: "Yonex", category: "shuttles", price: 850, oldPrice: 0, rating: 4.5, reviews: 88, emoji: "🏸", badge: null, stock: 40, description: "Nylon shuttles for practice & matches.", sizes: ["Pack of 6", "Pack of 12"] },
  { id: 7, title: "Spalding NBA Basketball", sport: "basketball", brand: "Nike", category: "balls", price: 3500, oldPrice: 4200, rating: 4.6, reviews: 27, emoji: "🏀", badge: "sale", stock: 6, description: "Official size basketball with superior grip.", sizes: ["Size 7"] },
  { id: 8, title: "Wilson Pro Tennis Racket", sport: "tennis", brand: "Nike", category: "rackets", price: 9500, oldPrice: 0, rating: 4.4, reviews: 19, emoji: "🎾", badge: "new", stock: 2, description: "Tournament-grade tennis racket.", sizes: ["Grip 2", "Grip 3", "Grip 4"] },
  { id: 9, title: "Cricket Batting Gloves", sport: "cricket", brand: "SS", category: "gloves", price: 1200, oldPrice: 1600, rating: 4.3, reviews: 22, emoji: "🧤", badge: "sale", stock: 15, description: "Comfortable batting gloves with superior grip.", sizes: ["Men", "Youth"] },
  { id: 10, title: "Adidas Football Jersey", sport: "football", brand: "Adidas", category: "apparel", price: 2500, oldPrice: 0, rating: 4.5, reviews: 15, emoji: "👕", badge: null, stock: 20, description: "Breathable jersey for match days.", sizes: ["S", "M", "L", "XL"] },
  { id: 11, title: "Badminton Net Set", sport: "badminton", brand: "Yonex", category: "nets", price: 3200, oldPrice: 4000, rating: 4.2, reviews: 12, emoji: "🥅", badge: "sale", stock: 7, description: "Portable badminton net with poles.", sizes: ["Standard"] },
  { id: 12, title: "Nike Basketball Shoes", sport: "basketball", brand: "Nike", category: "shoes", price: 11000, oldPrice: 0, rating: 4.7, reviews: 34, emoji: "👟", badge: "new", stock: 5, description: "High-performance basketball shoes.", sizes: ["7", "8", "9", "10", "11"] },
  { id: 13, title: "CA Cricket Helmet", sport: "cricket", brand: "CA", category: "helmets", price: 3800, oldPrice: 4500, rating: 4.6, reviews: 20, emoji: "⛑️", badge: "sale", stock: 9, description: "ISI certified cricket helmet with steel grill.", sizes: ["S", "M", "L"] },
  { id: 14, title: "Tennis Ball Pack (3)", sport: "tennis", brand: "Nike", category: "balls", price: 600, oldPrice: 0, rating: 4.1, reviews: 9, emoji: "🎾", badge: null, stock: 30, description: "Durable tennis balls for all courts.", sizes: ["Pack of 3"] },
  { id: 15, title: "Adidas Football Gloves", sport: "football", brand: "Adidas", category: "gloves", price: 1500, oldPrice: 2000, rating: 4.4, reviews: 14, emoji: "🧤", badge: "sale", stock: 10, description: "Goalkeeper gloves with latex palm.", sizes: ["S", "M", "L"] },
];

/* Save to localStorage for cross-page access */
if (typeof window !== "undefined") {
  window.PRODUCTS = PRODUCTS;
}