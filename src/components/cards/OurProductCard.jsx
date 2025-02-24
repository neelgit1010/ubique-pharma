import Image from "next/image";
import { useRouter } from "next/router";
import { useProduct } from "@/store/ProductStore";

const OurProductCard = ({product}) => {
    const router = useRouter();
    const { setSelectedProduct } = useProduct();
      const handleViewMore = () => {
        setSelectedProduct(product); // Store product in context
        router.push(`/products/${product._id}`);
      };

  return (
    <div className="w-[19rem] h-auto flex flex-col gap-2 border shadow-lg rounded group">
      <div className="relative w-full h-auto">
        <Image
          src={product.productImage.secure_url}
          alt="products"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-2 items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white p-4">
          <h1 className="font-semibold text-xl">{product.brandName}</h1>
          <p>Pack Size : {product.packagingsizeName}</p>
          <p>MRP:{product.productPrice}</p>
          <p>PTR: {product.productptr}</p>
          <p>Product Type: {product.categoryName}</p>
        </div>
      </div>
      <h1 className="text-defined-brown font-semibold text-center">
        {product.brandName}
      </h1>
      <div className="flex gap-2 p-2">
        <button className="w-1/2 bg-defined-blue p-2 rounded-md">
          Enquiry Now
        </button>
        <button
          className="w-1/2 bg-defined-orange p-2 rounded-md"
          onClick={handleViewMore}
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default OurProductCard