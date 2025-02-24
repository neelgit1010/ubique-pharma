import { useEffect } from "react";
import { useProduct } from "@/store/ProductStore";
import ProductSearch from "../ProductSearch";
import OurProductCard from "../cards/OurProductCard";

const ProductSection = ({ products }) => {
  const { selectedProduct, setSelectedProduct } = useProduct();

  useEffect(() => {
    if (Array.isArray(products)) {
      setSelectedProduct(products);
    } else {
      console.error("Products is not an array:", products);
    }
  }, [products, setSelectedProduct]);

  console.log("Selected Product:", selectedProduct);

  return (
    <section>
      <div className="w-full flex flex-col gap-4">
        <ProductSearch />

        {/* Products */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-defined-brown text-4xl font-semibold">
            Our Products
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-4 p-8">
            {Array.isArray(selectedProduct) && selectedProduct.length > 0 ? (
              selectedProduct.map((product) => (
                <OurProductCard key={product._id} product={product} />
              ))
            ) : (
              <p className="text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
