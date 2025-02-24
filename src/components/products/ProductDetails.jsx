import { useProduct } from "@/store/ProductStore";
import Image from "next/image";
const ProductDetails = () => {
  const { selectedProduct } = useProduct();
  console.log(selectedProduct);
  const content = [
    { desc: selectedProduct?.productPrice, heading: "MRP" },
    {
      desc:
        selectedProduct?.productpts === "" ? "NA" : selectedProduct?.productpts,
      heading: "PTS",
    },
    { desc: selectedProduct?.productptr, heading: "PTR" },
    { desc: selectedProduct?.packagingsizeName, heading: "Pack Size" },
  ];
  return (
    <section>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
          {/* Left */}
          <div className="w-full md:w-[40%]">
            <Image
              src={selectedProduct?.productImage.secure_url}
              alt="products"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2 w-full md:w-[60%] p-4">
            <h1 className="text-defined-blue text-2xl font-semibold">
              {selectedProduct?.brandName}
            </h1>

            <div className="w-full h-full border flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-[40%] border">
                {content.map((item, index) => (
                  <div key={index} className="border p-2">
                    <h1 className="text-defined-brown text-xl font-semibold">
                      {item.heading}
                    </h1>
                  </div>
                ))}
              </div>

              <div className="w-full md:w-1/2 lg:w-[60%] border">
                {content.map((item, index) => (
                  <div key={index} className="border p-2">
                    <p className="text-defined-brown text-xl">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 p-2 text-white">
              <button className="w-1/2 md:w-[25%] bg-defined-green p-2 rounded-md">
                Request to Call
              </button>
              <button className="w-1/2 md:w-[25%] bg-defined-orange p-2 rounded-md">
                  Send Enquiry
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex p-8 gap-4 flex-col">
          <h1 className="text-defined-brown text-2xl font-semibold">
            Product Details
          </h1>
          <div className="border w-full h-auto flex flex-col p-4">
            <h1 className="ext-defined-brown text-2xl font-semibold text-center">
              Brand Name : {selectedProduct?.brandName}
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-8 p-8 text-lg">
              <p>Category : {selectedProduct?.categoryName}</p>
              <p>
                Description :{" "}
                {selectedProduct?.moleculeAndStrengthName.map((molecule) => {
                  return (
                    <span>
                      {molecule.moleculeName} {molecule.strengthName},{" "}
                    </span>
                  );
                })}
              </p>
                <p>Product Price : {selectedProduct?.productPrice}</p>
                <p>Pack Size: {selectedProduct?.packagingsizeName}</p>
                <p>PTR: {selectedProduct?.productptr}</p>
                <p>
                  PTS :{" "}
                  {selectedProduct?.productpts === ""
                    ? "NA"
                    : selectedProduct?.productpts}{" "}
                </p>
                <p
                  className={`${
                    selectedProduct?.active ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Status :{" "}
                  {selectedProduct?.active ? "Available" : "Not Available"}
                </p>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-defined-blue text-2xl font-semibold text-center">
            Looking For Medicine
          </h1>
          <div className="w-full h-auto relative">
            <Image
              src={"/images/enq-form.png"}
              alt="enq-form"
              width={500}
              height={500}
              className="w-full h-[40rem] object-cover rounded"
            />

            <div className="absolute inset-0 w-full h-full bg-defined-blue opacity-30"></div>

            <div className="absolute inset-0 w-full h-auto flex flex-col gap-2">
              <form className="w-[90%] mx-auto py-4 md:py-16 flex flex-col md:gap-8 gap-2">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full md:w-1/2 p-3 md:p-4 rounded"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile No."
                    className="w-full md:w-1/2 p-3 md:p-4 rounded"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="number"
                    placeholder="Quantity"
                    className="w-full md:w-1/2 p-3 md:p-4 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email Id"
                    className="w-full md:w-1/2 p-3 md:p-4 rounded"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Purpose"
                    className="w-full md:w-1/2 p-3 md:p-4 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full md:w-1/2 p-3 md:p-4 rounded"
                  />
                </div>
                <textarea
                  name="requirement"
                  id=""
                  rows={"4"}
                  placeholder="Requirement"
                  className="w-full p-3 md:p-4 rounded"
                />
                <button className="bg-defined-orange text-white p-4 rounded">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
