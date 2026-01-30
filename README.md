# 🎮 Top Compras - Estrutura do Projeto

## 📁 Estrutura de Pastas

```
top-compras/
├── assets/
│   ├── css/
│   │   ├── fdb794b35efab736.css    (Principal - do framework)
│   │   ├── css                      (Estilos base)
│   │   └── categories.css           (Estilos por categoria) ✨
│   ├── images/
│   │   ├── 1740744282151243imagem.jpeg  (Logo)
│   │   └── 17509072896237689imagem.jpeg (Banner)
│   ├── js/
│   │   ├── api-mock.js              (Mock de dados locais)
│   │   ├── main-app-6e2b2f210fea7f09.js
│   │   └── [outros arquivos JS]
│   └── data/
│       └── products.json            (Dados de produtos)
│
├── categories/                      (Componentes por categoria) ✨
│   ├── maisprocurados.html          (Mais Procurados)
│   ├── steamkeys.html               (Steam Keys)
│   ├── contas.html                  (Contas Com Jogos)
│   ├── assinaturas.html             (Assinaturas)
│   └── offline.html                 (Steam Offline)
│
├── components/                      (Componentes reutilizáveis) ✨
│   ├── header.html
│   ├── footer.html
│   └── [outros componentes]
│
├── index.html                       (Página principal)
├── .git/                            (Repositório Git)
└── README.md                        (Este arquivo)
```

## 🏷️ Categorias Organizadas

### 1️⃣ **Mais Procurados** `categories/maisprocurados.html`
- Game Popular 2024 (R$ 89,99)
- Game RPG Completo (R$ 79,99)
- Aventura Épica (R$ 69,99)
- FPS Competitivo (R$ 59,99)
- Estratégia Avançada (R$ 49,99)

### 2️⃣ **Steam Keys** `categories/steamkeys.html`
- Counter-Strike 2 (Grátis)
- Elden Ring (R$ 289,99)
- Baldur's Gate 3 (R$ 239,99)
- Palworld (R$ 99,99)
- Helldivers 2 (R$ 79,99)

### 3️⃣ **Contas Com Jogos** `categories/contas.html`
- Conta Premium - 50 Jogos (R$ 199,99)
- Conta Elite - 100 Jogos (R$ 349,99)
- Conta Iniciante - 20 Jogos (R$ 99,99)
- Conta Streamer - 200 Jogos (R$ 599,99)
- Conta Ultimate - Ilimitada (R$ 899,99)

### 4️⃣ **Assinaturas** `categories/assinaturas.html`
- GamePass 1 Mês (R$ 19,99)
- GamePass 3 Meses (R$ 49,99)
- PlayStation Plus 1 Mês (R$ 24,99)
- Nintendo Switch Online (R$ 29,99)
- Bundle Completo - 1 Ano (R$ 199,99)

### 5️⃣ **Steam Offline** `categories/offline.html`
- Single Player Collection (R$ 149,99)
- Indie Games Pack (R$ 79,99)
- Retro Classics (R$ 49,99)
- Story-Driven Games (R$ 129,99)
- Complete Library (R$ 299,99)

## 🎨 Sistema de Cores por Categoria

| Categoria | Cor | Código |
|-----------|-----|--------|
| Mais Procurados | Amarelo | #ffba09 |
| Steam Keys | Azul | #3e81ed |
| Contas Com Jogos | Verde | #21c985 |
| Assinaturas | Amarelo Claro | #ffd152 |
| Steam Offline | Vermelho | #ff493f |

## 📝 Como Usar

### Adicionar um novo produto:
1. Abra o arquivo da categoria desejada em `categories/`
2. Copie um `product-card` e modifique
3. Atualize `assets/data/products.json`

### Modificar estilo de uma categoria:
1. Edite `assets/css/categories.css`
2. Use os seletores `#categoria-{nome}`

### Adicionar nova categoria:
1. Crie arquivo em `categories/nova-categoria.html`
2. Adicione ao `index.html`
3. Adicione cores em `categories.css`

## 🚀 Deploy

### GitHub
```bash
git add .
git commit -m "Sua mensagem"
git push origin main
```

### Vercel
1. Conecte seu repositório GitHub
2. Deploy automático na branch `main`

## 📱 Responsividade

- Desktop (1200px+): 5 colunas
- Tablet (950px-1200px): 4 colunas
- Mobile (530px-950px): 3 colunas
- Pequeno (300px-530px): 2 colunas

## 🔗 Links Importantes

- **Repositório**: https://github.com/Drip-Duke/top-compras
- **Site Local**: http://localhost:8000
- **API Backend**: https://lmtstore.shop/api/

---

**Criado em**: 30 de Janeiro de 2026
**Última atualização**: 30 de Janeiro de 2026
