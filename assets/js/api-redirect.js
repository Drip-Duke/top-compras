// Interceptar chamadas para lmtstore.shop e redirecionar para localhost:3001
(function() {
  // URL da API local
  const API_BASE = 'http://localhost:3001';
  
  // Armazenar dados em cache
  let cachedProducts = null;

  // Função para buscar produtos
  async function fetchProducts() {
    if (cachedProducts) {
      return cachedProducts;
    }
    
    try {
      const response = await fetch(`${API_BASE}/api/products`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      cachedProducts = await response.json();
      return cachedProducts;
    } catch (error) {
      console.error('Erro ao buscar produtos da API local:', error);
      return [];
    }
  }

  // Expor função global para usar
  window.fetchTopComprasProducts = fetchProducts;

  // Interceptar fetch global para lmtstore.shop
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    const url = args[0];
    
    // Se for uma requisição para lmtstore.shop/api/stranger, redirecionar
    if (typeof url === 'string' && url.includes('lmtstore.shop/api/stranger')) {
      console.log('[API Redirect] Redirecionando para API local...');
      args[0] = `${API_BASE}/api/products`;
    }
    
    return originalFetch.apply(this, args);
  };

  // Carregar produtos assim que o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', async () => {
    console.log('[Top Compras API] Carregando produtos localmente...');
    await fetchProducts();
  });

  // Tentar carregar produtos imediatamente também
  fetchProducts().then(products => {
    if (products.length > 0) {
      console.log(`[Top Compras API] ✅ ${products.length} produtos carregados com sucesso!`);
    }
  });
})();
