const express = require('express');
const cors = require('cors');
const { SOFTWARE, EBOOKS, CURSOS, ALL_PRODUCTS } = require('./products');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas da API
app.get('/api/stranger', (req, res) => {
  res.json(ALL_PRODUCTS);
});

app.get('/api/products', (req, res) => {
  res.json(ALL_PRODUCTS);
});

app.get('/api/products/software', (req, res) => {
  res.json(SOFTWARE);
});

app.get('/api/products/ebooks', (req, res) => {
  res.json(EBOOKS);
});

app.get('/api/products/cursos', (req, res) => {
  res.json(CURSOS);
});

app.get('/api/products/categoria/:categoria', (req, res) => {
  const { categoria } = req.params;
  const filtered = ALL_PRODUCTS.filter(p => 
    p.categoria.toLowerCase() === categoria.toLowerCase()
  );
  res.json(filtered);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API Top Compras rodando!' });
});

// Serve estático (se houver arquivos estáticos)
app.use(express.static('../'));

app.listen(PORT, () => {
  console.log(`🚀 API Top Compras rodando em http://localhost:${PORT}`);
});
