import AboutPageCard from "./cards/AboutPageCard";

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
  const info = [
    {
      name: "Nisha Barman",
      role: "Director",
    },
    {
      name: "Jaya Debsarma Barman",
      role: "Director",
    },
    {
      name: "Sitesh Sarkar",
      role: "Blank",
    },
  ];
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-defined-brown text-4xl font-semibold">About Us</h1>
      <p>
        Ubique embarked on its mission with a core commitment to enhancing
        health and well-being. Since our inception, we have dedicated ourselves
        to delivering high-quality, affordable medications across a
        comprehensive range of drug dosage schedules. Founded in 2014, Ubique
        has always been driven by the vision of fostering a healthier society.
        We initially focused on Calcium, Vitamins, and various specialty areas,
        and over time, we have broadened our scope into new fields. Looking
        ahead, we plan to launch the Ubique Human Welfare Foundation, further
        strengthening our Corporate Social Responsibility (CSR) efforts and
        supporting both privileged and underserved communities. At Ubique, we
        take immense pride in our dedication to exceptional customer care, our
        employees’ professional growth, and an unwavering commitment to quality.
        We understand that well-being goes beyond medicine—it is about ensuring
        that healthcare remains accessible, reliable, and effective for all.
        Innovation and integrity remain at the heart of our operations. By
        continuously improving our formulations, expanding research, and
        upholding stringent quality control measures, we ensure that every
        product meets the highest industry standards. Our commitment extends
        beyond business, as we actively seek opportunities to contribute
        positively to the communities we serve. <br />
        As we look to the future, Ubique remains steadfast in its mission—to
        enhance lives through groundbreaking healthcare solutions, social
        responsibility, and an enduring promise to create a healthier tomorrow
        for all.
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

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {info.map((item, index) => (
          <AboutPageCard info={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
