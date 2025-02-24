import dynamic from "next/dynamic";
import ProdCatCard from "../cards/ProdCatCard";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

const ProductCategorySection = ({ products }) => {

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: false,
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="mb-4">
      {" "}
      <div className="flex flex-col gap-4 justify-center items-center p-4">
        <h1 className="text-defined-brown text-4xl font-semibold">
          Product Categories
        </h1>

        {Slider && (
          <div className="w-full">
            {" "}
            <Slider {...settings}>
              {products?.map((product) => (
                <div key={product._id} className="px-2">
                  {" "}
                  <ProdCatCard product={product} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCategorySection;
