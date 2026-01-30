# Top Compras 🛍️

Plataforma de e-commerce moderna com suporte a múltiplos tipos de produtos: **Games**, **Software**, **E-books** e **Cursos**.

## 🚀 Como Rodar Localmente

### 1. Instalar Dependências
```bash
npm install
```

### 2. Iniciar API (em um terminal)
```bash
npm start
```
A API rodará em `http://localhost:3001`

### 3. Iniciar Website (em outro terminal)
```bash
python -m http.server 8000
```
O site rodará em `http://localhost:8000`

## 📋 Estrutura do Projeto

```
top-compras/
├── index.html                 # Site principal (Next.js compilado)
├── package.json               # Dependências do Node.js
├── api/
│   ├── server.js             # Servidor Express da API
│   └── products.js           # Dados dos produtos (25 produtos)
├── assets/
│   ├── css/
│   │   ├── fdb794b35efab736.css    # Estilos compilados
│   │   ├── categories.css          # Estilos das categorias
│   │   └── product-images.css      # SVG backgrounds dos produtos
│   ├── js/
│   │   ├── api-redirect.js         # Redireciona para API local
│   │   ├── product-images.js       # Manipula imagens
│   │   └── (outros .js compilados)
│   ├── images/
│   │   └── products/               # SVGs dos produtos
│   └── data/
│       └── products.json           # Estrutura JSON
├── categories/                # HTML por categoria (referência)
│   ├── maisprocurados.html
│   ├── steamkeys.html
│   ├── contas.html
│   ├── assinaturas.html
│   └── offline.html
└── README.md
```

## 📦 Categorias de Produtos (25 produtos no total)

### 🎮 Mais Procurados (5 produtos)
- Game Popular 2024 - R$ 29.90
- RPG Completo - R$ 39.90
- Aventura Épica - R$ 49.90
- FPS Competitivo - R$ 59.90
- Estratégia Intensa - R$ 44.90

### 🔑 Steam Keys (5 produtos)
- CS2 Global Offensive - R$ 89.90
- Elden Ring - R$ 249.90
- Baldur's Gate 3 - R$ 199.90
- Palworld - R$ 99.90
- Helldivers 2 - R$ 79.90

### 👤 Contas Com Jogos (5 produtos)
- Premium 50 Jogos - R$ 149.90
- Elite 100 Jogos - R$ 249.90
- Iniciante 20 Jogos - R$ 79.90
- Streamer 200 Jogos - R$ 399.90
- Ultimate 500 Jogos - R$ 799.90

### 💳 Assinaturas (5 produtos)
- GamePass 1 Mês - R$ 34.90
- GamePass 3 Meses - R$ 89.90
- PS Plus 1 Mês - R$ 29.90
- Nintendo Switch Online - R$ 39.90
- Bundle Anual - R$ 199.90

### 📦 Steam Offline (5 produtos)
- Single Player Pack - R$ 69.90
- Indie Games Collection - R$ 99.90
- Retro Classics - R$ 54.90
- Story-Driven Games - R$ 149.90
- Complete Collection - R$ 399.90

### 💻 Software (6 produtos)
- Adobe Photoshop 1 Mês - R$ 54.90
- Adobe Creative Cloud 1 Mês - R$ 79.90
- Microsoft Office 365 1 Ano - R$ 199.90
- AutoCAD 1 Mês - R$ 149.90
- Corel Draw 2024 - R$ 399.90
- Final Cut Pro - R$ 299.90

### 📖 E-Books (8 produtos)
- Programação em Python - R$ 39.90
- Web Design Moderno - R$ 49.90
- Marketing Digital - R$ 59.90
- SEO Avançado - R$ 44.90
- JavaScript Completo - R$ 54.90
- React.js Prático - R$ 64.90
- Empreendedorismo Digital - R$ 69.90
- Gestão de Projetos Ágeis - R$ 74.90

### 🎓 Cursos (8 produtos)
- Desenvolvimento Web Completo - R$ 149.90
- Data Science com Python - R$ 199.90
- Machine Learning - R$ 249.90
- Fotografia Profissional - R$ 179.90
- Edição de Vídeo com After Effects - R$ 189.90
- Inglês Completo - R$ 159.90
- Espanhol para Negócios - R$ 139.90
- UI/UX Design - R$ 169.90

## 🌐 API Endpoints

### Produtos
- `GET /api/products` - Retorna todos os produtos
- `GET /api/products/software` - Retorna apenas software
- `GET /api/products/ebooks` - Retorna apenas e-books
- `GET /api/products/cursos` - Retorna apenas cursos
- `GET /api/products/categoria/:categoria` - Filtra por categoria

### Health Check
- `GET /api/health` - Verifica se a API está online

## 🎨 Sistema de Cores

| Categoria | Cor | Emoji |
|-----------|-----|-------|
| Mais Procurados | #ffba09 | 🎮 |
| Steam Keys | #00d4ff | 🔑 |
| Contas | #1f77f2 | 👤 |
| Assinaturas | #22c55e | 💳 |
| Offline | #ec4899 | 📦 |

## 🔧 Tecnologias

- **Frontend**: Next.js (compilado para HTML estático)
- **Backend**: Express.js + Node.js
- **Servidor Web**: Python HTTP Server
- **Versionamento**: Git + GitHub
- **Deployment**: Vercel (pronto para deploy)

## 📤 Deploy no Vercel

### Pré-requisitos
1. Conta no [Vercel.com](https://vercel.com)
2. Repositório GitHub conectado

### Passos
1. Acesse [vercel.com/import](https://vercel.com/import)
2. Selecione o repositório `Drip-Duke/top-compras`
3. Configure variáveis de ambiente (se necessário)
4. Clique em "Deploy"
5. Seu site estará live em `https://top-compras-xxxx.vercel.app`

## 📝 Adicionar Novos Produtos

Para adicionar novos produtos, edite `api/products.js`:

```javascript
const SOFTWARE = [
  { 
    nome: "Seu Produto",
    preco: 99.90,
    emoji: "🎨",
    imagem: "url-da-imagem",
    descricao: "Descrição do produto",
    categoria: "Software",
    status: "disponivel",
    pagamento: ["pix", "cartao"],
    checkout: { 
      storeId: '$drip_duke',
      checkoutUrl: 'seu-link-checkout'
    }
  },
  // ... mais produtos
];
```

## 👨‍💻 Desenvolvedor

**Drip Duke** - [GitHub](https://github.com/Drip-Duke) - [Top Compras](https://github.com/Drip-Duke/top-compras)

---

**Status**: ✅ Pronto para produção

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
