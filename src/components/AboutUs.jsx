const AboutUs = () => {
  const content = [
    {
      heading: "Nature of Business",
      desc: "Marketing, Third Party Manufacturers, Exporters, Wholesaler, Trader, Distributor",
    },
    {
      heading: "Number of Employees",
      desc: "50+",
    },
    {
      heading: "Year of Establishment",
      desc: "2012",
    },
    {
      heading: "Incorporation No",
      desc: "U47721WB2023PTC260267",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-defined-brown text-4xl font-semibold">About Us</h1>
      <p>
        Ubique Pharma Pvt. Ltd. is a rapidly growing pharmaceutical company
        engaged in a diverse range of businesses, including the marketing,
        export, and supply of pharmaceutical products, nutraceutical
        supplements, and third-party manufacturing services both domestically
        and internationally. We are committed to providing products of the
        highest quality and efficacy, sourced from facilities certified by WHO,
        GMP, ISO 9001:2015 and ISO 22000:2018 certification. These facilities
        are operated by a highly skilled and knowledgeable team dedicated to
        adhering to rigorous quality systems, ensuring the delivery of
        world-class products that meet global standards. Our commitment to
        excellence extends beyond manufacturing, as we continuously strive to
        meet the evolving needs of the healthcare industry. We prioritize
        innovation, sustainability, and customer satisfaction, making sure our
        products are not only effective but also safe for all users. With a
        strong focus on research and development, we aim to introduce new and
        advanced solutions that enhance well-being worldwide. Ubique Pharma Pvt.
        Ltd. is poised to continue expanding its global footprint, building
        long-term partnerships, and contributing to the global healthcare
        landscape through quality and innovation.
      </p>

      <h1 className="text-defined-brown text-4xl font-semibold">
        Our Mission and Vision
      </h1>
      <p>
        Our vision is to be a leading global pharmaceutical company, recognized
        for our commitment to excellence in product quality, innovation, and
        customer satisfaction. We aspire to create a healthier world by offering
        cutting-edge healthcare solutions, expanding access to essential
        medicines, and fostering sustainable growth in the pharmaceutical
        industry. We aim to build strong, long-lasting partnerships and make a
        meaningful impact on global health. Our mission is to enhance global
        health by providing high-quality, affordable pharmaceutical products and
        nutraceutical supplements. We aim to deliver safe, effective, and
        innovative healthcare solutions that improve the well-being of
        individuals worldwide. Through continuous research, development, and
        collaboration, we strive to meet the evolving needs of our customers
        while maintaining the highest standards of quality and integrity.
      </p>

      <div className="w-full h-full border flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-[40%] border">
          {content.map((item, index) => (
            <div key={index} className="border p-4">
              <h1 className="text-defined-brown text-xl font-semibold">
                {item.heading}
              </h1>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 lg:w-[60%] border">
          {content.map((item, index) => (
            <div key={index} className="border p-4">
              <p className="text-defined-brown text-xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
