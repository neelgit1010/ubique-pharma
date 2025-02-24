import Image from "next/image";

const CareerSection = () => {
  return (
    <section>
      <div className="p-8">
        <Image
          src={"/career/career.png"}
          alt="career"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />

        <p className="text-defined-brown p-4 text-lg">
          Join Ubique Pharma, a leading pharmaceutical manufacturer committed to
          innovation, quality, and global health. Since 2014, we have been
          dedicated to producing high-quality, affordable medications across
          diverse therapeutic areas. <br />At Ubique Pharma, we value talent, foster
          professional growth, and provide a dynamic work environment. Be part
          of a team that prioritizes excellence, ethical practices, and
          community well-being. Shape the future of healthcare with us—where
          your career makes a difference. Explore opportunities today!
        </p>

        {/* Form TODO */}
      </div>
    </section>
  );
};

export default CareerSection;