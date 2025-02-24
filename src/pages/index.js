import MainTemplate from "@/templates/MainTemplate";
import AboutSection from "../components/home/AboutSection";
import ProductSection from "../components/home/ProductSection";
import EnquiryFormSection from "@/components/home/EnquiryFormSection";
import ProductCategorySection from "../components/home/ProductCategorySection";

export default function Home({ products }) {
  return (
    <>
      <MainTemplate>
        <ProductCategorySection products={products} />
        <AboutSection />
        <ProductSection products={products} />
        <EnquiryFormSection />
      </MainTemplate>
    </>
  );
}

export const getServerSideProps = async () => {
  const products = await (
    await fetch("https://ubiquephermabackend.vercel.app/api/products/get")
  ).json();
  const limitedProducts = products.data.slice(0, 8);
  return {
    props: {
      products: limitedProducts, // limit 8
    },
  };
};
