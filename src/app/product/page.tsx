import { NewProductModal } from "@/components/newProductModal";
import { ProductList } from "@/components/productList";

export default function Product() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Computer Peripherals</h1>
      <NewProductModal />
      <ProductList />
    </div>
  );
}
