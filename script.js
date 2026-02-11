const products = [
  { name: 'Nugget Ayam Crispy 500gr', category: 'Nugget', price: 46000, stock: 'Stok tersedia' },
  { name: 'Sosis Sapi Premium 375gr', category: 'Sosis', price: 39000, stock: 'Stok terbatas' },
  { name: 'Dimsum Ayam Udang 20 pcs', category: 'Dimsum', price: 52000, stock: 'Stok tersedia' },
  { name: 'Fish Roll Seafood Mix 300gr', category: 'Seafood', price: 43000, stock: 'Stok tersedia' },
  { name: 'Nugget Tempura 250gr', category: 'Nugget', price: 29000, stock: 'Stok tersedia' },
  { name: 'Sosis Bakar Jumbo 1kg', category: 'Sosis', price: 85000, stock: 'Stok tersedia' },
  { name: 'Hakau Udang Frozen 15 pcs', category: 'Dimsum', price: 58000, stock: 'Stok terbatas' },
  { name: 'Udang Kupas Frozen 500gr', category: 'Seafood', price: 79000, stock: 'Stok tersedia' }
];

const productList = document.getElementById('productList');
const categoryButtons = document.querySelectorAll('.chip');

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value);
}

function createCard(product) {
  return `
    <article class="product-card">
      <span class="product-category">${product.category}</span>
      <h3>${product.name}</h3>
      <p class="product-price">${formatRupiah(product.price)}</p>
      <p class="product-stock">${product.stock}</p>
    </article>
  `;
}

function renderProducts(category = 'Semua') {
  const visibleProducts =
    category === 'Semua'
      ? products
      : products.filter((product) => product.category === category);

  productList.innerHTML = visibleProducts.map(createCard).join('');
}

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    categoryButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderProducts(button.dataset.category);
  });
});

renderProducts();
