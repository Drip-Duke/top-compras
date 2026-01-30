// Mock API - Carrega produtos localmente
(function() {
  // Armazena dados globais
  window.productsData = null;

  // Função para carregar os produtos
  async function loadProducts() {
    try {
      const response = await fetch('/assets/data/products.json');
      window.productsData = await response.json();
      
      // Dispara evento customizado quando dados carregam
      window.dispatchEvent(new CustomEvent('productsLoaded', { detail: window.productsData }));
      console.log('✓ Produtos carregados com sucesso');
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  }

  // Carrega os produtos quando o documento está pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProducts);
  } else {
    loadProducts();
  }

  // Expõe funções globais para acesso aos produtos
  window.getProducts = function(categoryId) {
    if (!window.productsData) return [];
    const category = window.productsData.categories.find(c => c.id === categoryId);
    return category ? category.products : [];
  };

  window.getAllProducts = function() {
    if (!window.productsData) return [];
    return window.productsData.categories.flatMap(c => c.products);
  };

  window.getProductById = function(id) {
    if (!window.productsData) return null;
    return window.getAllProducts().find(p => p.id === id);
  };
})();
