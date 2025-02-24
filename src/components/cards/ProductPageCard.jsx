import Image from "next/image";
import { useRouter } from "next/router";
import { useProduct } from "@/store/ProductStore";

const ProductPageCard = ({ product }) => {
  const router = useRouter();
  const { setSelectedProduct } = useProduct();


  const handleViewMore = () => {
    setSelectedProduct(product); // Store product in context
    router.push(`/products/${product._id}`);
  }

  return (
    <div className="w-[19rem] h-auto flex flex-col gap-2 border shadow-lg rounded">
      <div className="w-full h-auto">
        <Image
          src={product.productImage.secure_url}
          alt="products"
          width={500}
          height={500}
          className="w-full h-[15rem] object-cover"
        />
      </div>

      <div className="flex gap-2 p-2 flex-col flex-grow justify-between">
        <h1 className="text-defined-brown font-semibold text-xl">
          {product.brandName}
        </h1>
        <div className="flex justify-between text-defined-brown">
          <p>MRP : {product.productPrice}</p>
          <p>PTS : {product.productpts === "" ? "NA" : product.productpts} </p>
          <p>PTR : {product.productptr}</p>
        </div>
        <p>Pack Size: {product.packagingsizeName}</p>
        <p>
          {product.moleculeAndStrengthName.map(
            (molecule) => {
              return (
                <span>
                  {molecule.moleculeName} {molecule.strengthName} <br />
                </span>
              );
            }
          )}
        </p>
        <div className="flex gap-2 p-2">
          <button className="w-1/2 bg-defined-white p-2 rounded-md text-defined-green font-semibold">
            Order Now
          </button>
          <button className="w-1/2 bg-defined-white p-2 rounded-md text-defined-orange font-semibold"
          onClick={ handleViewMore}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPageCard;
