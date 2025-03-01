import Image from "next/image"
import { useRouter } from "next/router";

const Banner = () => {
    const router = useRouter();
      const pageData = {
        "/contact": { title: "Contact Us" },
        "/about": { title: "About Us" },
        "/career": { title: "Career" },
        "/investor": { title: "Investor" },
        "/marketing": { title: "Marketing" },
        "/products": { title: "Our Products" },
      };
      let title = pageData[router.pathname] || {};
      const isProductPage = router.pathname.startsWith("/products/");
      title = isProductPage ? "Our Products" : pageData[ router.pathname]?.title;
  return (
    <div className="w-full h-[10rem] relative">
      <Image
        src={"/banner.jpg"}
        alt="product form"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="absolute inset-0 flex justify-center items-center flex-col text-white z-10">
        <h1 className="text-4xl font-semibold">{title}</h1>
      </div>
    </div>
  );
}

export default Banner