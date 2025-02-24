import { useState } from "react";
import ProductSearch from "../ProductSearch";
import ProductPageCard from "../cards/ProductPageCard";

const ProductPageSection = ({ products }) => {
   
  const [search, setSearch] = useState("");
  const filteredProducts = products.data.filter((product) =>
    product.brandName.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <section>
      <ProductSearch setSearch={setSearch} />
      {/* Products */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-defined-brown text-4xl font-semibold">
          Our Products
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
          {filteredProducts.map((product) => {
            return (
              <ProductPageCard key={product.productId} product={product} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async () => {
  const products = await (await fetch(
    "https://ubiquephermabackend.vercel.app/api/products/get"
  )).json();
  return {
    props: {
      products,
    },
  };
};

export default ProductPageSection;
