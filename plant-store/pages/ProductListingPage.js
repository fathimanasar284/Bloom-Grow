import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Aloe Vera', price: 10, thumbnail: '/images/aloe.jpg', category: 'Succulent' },
  { id: 2, name: 'Snake Plant', price: 15, thumbnail: '/images/snake.jpg', category: 'Indoor' },
  { id: 3, name: 'Peace Lily', price: 12, thumbnail: '/images/peace.jpg', category: 'Flowering' },
  { id: 4, name: 'Cactus', price: 8, thumbnail: '/images/cactus.jpg', category: 'Succulent' },
  { id: 5, name: 'Fiddle Leaf', price: 20, thumbnail: '/images/fiddle.jpg', category: 'Indoor' },
  { id: 6, name: 'Orchid', price: 18, thumbnail: '/images/orchid.jpg', category: 'Flowering' },
];

const ProductListingPage = () => {
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div>
      <Header />
      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div className="product-grid">
            {products.filter(p => p.category === cat).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
