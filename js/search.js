/* ============================================
   SPORTSHUB - SEARCH + FILTER LOGIC
   ============================================ */

const Search = {
  /* Simple search by title/sport/brand */
  query(term, products) {
    const t = term.toLowerCase().trim();
    if (!t) return products;
    return products.filter(p =>
      p.title.toLowerCase().includes(t) ||
      p.sport.toLowerCase().includes(t) ||
      p.brand.toLowerCase().includes(t)
    );
  },

  /* Apply multiple filters */
  filter(products, filters = {}) {
    return products.filter(p => {
      if (filters.sports?.length && !filters.sports.includes(p.sport)) return false;
      if (filters.brands?.length && !filters.brands.includes(p.brand)) return false;
      if (filters.maxPrice && p.price > filters.maxPrice) return false;
      if (filters.minRating && p.rating < filters.minRating) return false;
      if (filters.onSaleOnly && !p.oldPrice) return false;
      if (filters.inStockOnly && p.stock === 0) return false;
      return true;
    });
  },

  /* Sort products */
  sort(products, sortBy) {
    const list = [...products];
    switch (sortBy) {
      case "price-low": return list.sort((a, b) => a.price - b.price);
      case "price-high": return list.sort((a, b) => b.price - a.price);
      case "rating": return list.sort((a, b) => b.rating - a.rating);
      case "newest": return list.sort((a, b) => b.id - a.id);
      default: return list;
    }
  },

  /* Search suggestions (autocomplete) */
  suggest(term, products, limit = 5) {
    const t = term.toLowerCase().trim();
    if (!t) return [];
    return products
      .filter(p => p.title.toLowerCase().includes(t))
      .slice(0, limit);
  }
};

window.Search = Search;