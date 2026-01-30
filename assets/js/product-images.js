// Script para substituir imagens dos produtos por SVGs locais
(function() {
  const productImages = {
    'game-popular': 'assets/images/products/game-popular.svg',
    'rpg-completo': 'assets/images/products/rpg-completo.svg',
    'aventura-epica': 'assets/images/products/aventura-epica.svg',
    'fps-competitivo': 'assets/images/products/fps-competitivo.svg',
    'estrategia': 'assets/images/products/estrategia.svg',
    'steam-key': 'assets/images/products/steam-key.svg',
    'conta-premium': 'assets/images/products/conta-premium.svg',
    'assinatura': 'assets/images/products/assinatura.svg',
    'offline': 'assets/images/products/offline.svg'
  };

  // Função para substituir imagens
  function replaceProductImages() {
    const images = document.querySelectorAll('img[src*="placeholder"], img[src*="via.placeholder"], img[alt*="Game"], img[alt*="Steam"], img[alt*="Conta"], img[alt*="Assinatura"], img[alt*="Collection"]');
    
    images.forEach((img, index) => {
      // Rotaciona entre as imagens disponíveis
      const imageName = Object.keys(productImages)[index % Object.keys(productImages).length];
      img.src = productImages[imageName];
      img.style.objectFit = 'cover';
    });
  }

  // Executa quando o DOM está pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replaceProductImages);
  } else {
    replaceProductImages();
  }

  // Executa novamente após 1 segundo (para capturar imagens carregadas dinamicamente)
  setTimeout(replaceProductImages, 1000);
  
  // Observa mudanças no DOM
  const observer = new MutationObserver(replaceProductImages);
  observer.observe(document.body, { childList: true, subtree: true });
})();
