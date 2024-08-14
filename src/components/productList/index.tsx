import React, { useState } from 'react';
import { ProductDetailModal } from './ProductDetailModal';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
};

const products: Product[] = [
  { id: 1, name: 'Mouse Gamer', price: '$50', description: 'High precision gaming mouse.', imageUrl: '/products/mouse.jpg' },
  { id: 2, name: 'Teclado Mecânico', price: '$100', description: 'Mechanical keyboard with RGB.', imageUrl: '/products/keyboard.jpg' },
  { id: 3, name: 'Headset', price: '$75', description: 'Surround sound headset.', imageUrl: '/products/headset.jpg' },
  // Adicione mais produtos aqui
  // Total de 18 produtos
];

export const ProductList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const itemsPerPage = 6;
  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedProducts.map((product) => (
          <Card key={product.id} onClick={() => handleCardClick(product)} className="cursor-pointer">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover" />
              <p className="text-gray-600">{product.price}</p>
              <p className="text-gray-500">{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {[1, 2, 3].map((page) => (
          <Button key={page} onClick={() => handlePageChange(page)} className={page === currentPage ? 'bg-blue-500 text-white' : ''}>
            {page}
          </Button>
        ))}
      </div>
      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};
