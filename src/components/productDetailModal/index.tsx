import React from 'react';
import { Dialog, DialogContent, DialogOverlay } from '../ui/dialog';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Carousel } from '../ui/carousel';

type ProductDetailModalProps = {
  product: {
    id: number;
    name: string;
    price: string;
    description: string;
    imageUrl: string;
    stock: number;
    createdBy: string;
    details: string;
    images: string[];
  };
  onClose: () => void;
};

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  return (
    <Dialog open onClose={onClose}>
      <DialogOverlay />
      <DialogContent className="p-4 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">{product.name}</h2>
        <Carousel>
          {product.images.map((image, index) => (
            <Image key={index} src={image} alt={`Product image ${index}`} className="w-full h-48 object-cover" />
          ))}
        </Carousel>
        <p className="text-gray-600 mt-4">{product.description}</p>
        <p className="text-gray-600 mt-2">Price: {product.price}</p>
        <p className="text-gray-600 mt-2">Stock: {product.stock}</p>
        <p className="text-gray-600 mt-2">Created by: {product.createdBy}</p>
        <p className="text-gray-600 mt-2">{product.details}</p>
        <div className="flex justify-end mt-4">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
