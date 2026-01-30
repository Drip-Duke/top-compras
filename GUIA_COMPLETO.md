# 🚀 Top Compras - Guia Completo

## ✅ O Que Foi Feito

### 1. Backend API (Node.js + Express)
- ✅ Criada pasta `api/` com servidor Express
- ✅ 25 produtos cadastrados em 3 categorias (Software, E-Books, Cursos)
- ✅ Endpoints RESTful para buscar produtos
- ✅ CORS habilitado para requisições do frontend
- ✅ Fácil de expandir e adicionar novos produtos

### 2. Frontend (HTML + Next.js)
- ✅ Integração automática com API local
- ✅ Script `api-redirect.js` intercepta e redireciona requisições
- ✅ Produtos carregam automaticamente da API
- ✅ Totalmente responsivo (mobile, tablet, desktop)

### 3. Infraestrutura
- ✅ Servidor HTTP Python (porta 8000) para servir website
- ✅ Servidor Node.js (porta 3001) para servir API
- ✅ Git + GitHub com repositório sincronizado
- ✅ `.gitignore` configurado para não commitar `node_modules`
- ✅ `package.json` com scripts prontos

---

## 📊 Produtos Cadastrados (25 Total)

### Software (6)
1. Adobe Photoshop 1 Mês - R$ 54.90
2. Adobe Creative Cloud 1 Mês - R$ 79.90
3. Microsoft Office 365 1 Ano - R$ 199.90
4. AutoCAD 1 Mês - R$ 149.90
5. Corel Draw 2024 - R$ 399.90
6. Final Cut Pro - R$ 299.90

### E-Books (8)
1. Programação em Python - R$ 39.90
2. Web Design Moderno - R$ 49.90
3. Marketing Digital - R$ 59.90
4. SEO Avançado - R$ 44.90
5. JavaScript Completo - R$ 54.90
6. React.js Prático - R$ 64.90
7. Empreendedorismo Digital - R$ 69.90
8. Gestão de Projetos Ágeis - R$ 74.90

### Cursos (8)
1. Desenvolvimento Web Completo - R$ 149.90
2. Data Science com Python - R$ 199.90
3. Machine Learning - R$ 249.90
4. Fotografia Profissional - R$ 179.90
5. Edição de Vídeo com After Effects - R$ 189.90
6. Inglês Completo - R$ 159.90
7. Espanhol para Negócios - R$ 139.90
8. UI/UX Design - R$ 169.90

---

## 🎮 Próximos Passos

### Adicionar Mais Produtos
```javascript
// Edite api/products.js e adicione novos produtos assim:
const MINHA_CATEGORIA = [
  { 
    nome: "Produto XYZ",
    preco: 99.90,
    emoji: "🎨",
    imagem: "https://sua-imagem.com/imagem.jpg",
    descricao: "Descrição do produto",
    categoria: "Minha Categoria",
    status: "disponivel",
    pagamento: ["pix", "cartao"],
    checkout: { 
      storeId: '$drip_duke',
      checkoutUrl: 'https://checkout.infinitepay.io/drip_duke/SEU_ID'
    }
  }
];
```

### Deploy no Vercel
1. Acesse https://vercel.com/import
2. Selecione repositório `Drip-Duke/top-compras`
3. Deploy automático
4. Seu site estará em `https://top-compras.vercel.app`

### Configurar Domínio Customizado
1. Ir para Vercel Dashboard
2. Project Settings → Domains
3. Adicionar `topcompras.shop` (se houver)
4. Configurar DNS

---

## 🔄 Fluxo de Atualização

```
1. Editar api/products.js (adicionar/remover produtos)
   ↓
2. git add . ; git commit -m "..." ; git push
   ↓
3. Vercel detecta mudança e redeploy automático
   ↓
4. Novo site ao vivo em poucos segundos
```

---

## 📱 Endpoints da API

### Localhost
```
http://localhost:3001/api/products
http://localhost:3001/api/products/software
http://localhost:3001/api/products/ebooks
http://localhost:3001/api/products/cursos
http://localhost:3001/api/products/categoria/Software
http://localhost:3001/api/health
```

### Vercel (após deploy)
```
https://top-compras-xxx.vercel.app/api/products
https://top-compras-xxx.vercel.app/api/products/software
... etc
```

---

## 🛠️ Troubleshooting

### API não responde?
```bash
# Verificar se Node está rodando
ps aux | grep node

# Reiniciar
npm start
```

### Website não carrega produtos?
```bash
# Verificar Console (F12) para erros
# Verificar se API está respondendo em http://localhost:3001/api/health

# Limpar cache: Ctrl+Shift+Delete
```

### Erro ao fazer push no GitHub?
```bash
# Usar Personal Access Token
git remote set-url origin https://SEU_TOKEN@github.com/Drip-Duke/top-compras.git
git push
```

---

## 📞 Suporte

- GitHub: https://github.com/Drip-Duke/top-compras
- Email: Drip_Duke@outlook.com

---

**Última atualização**: 30/01/2026
**Status**: ✅ Pronto para produção
