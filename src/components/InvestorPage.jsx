import Image from 'next/image';

const InvestorPage = () => {
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
      </div>
      <div className='p-8 flex flex-col gap-4'>
        <h1 className='text-defined-brown text-4xl font-semibold'>Investor Relations</h1>
        <p>
          At Ubique Pharma, we are committed to driving growth, innovation, and
          excellence in the pharmaceutical industry. Since our inception in
          2014, we have been dedicated to manufacturing high-quality, affordable
          medications that enhance global health and well-being. Our strong
          foundation in research, regulatory compliance, and advanced
          manufacturing capabilities positions us as a trusted name in the
          industry. We continuously invest in cutting-edge technology, robust
          quality assurance, and product innovation to expand our market
          presence. Our diverse portfolio spans key therapeutic areas, ensuring
          a steady pipeline of breakthrough formulations that meet global
          healthcare needs. With a focus on sustainability and ethical business
          practices, Ubique Pharma fosters long-term partnerships and
          sustainable financial growth. Our upcoming Ubique Human Welfare
          Foundation further strengthens our Corporate Social Responsibility
          (CSR) efforts, reinforcing our commitment to both investors and
          society. As we expand into new markets and enhance our product
          offerings, we remain dedicated to delivering strong financial
          performance and creating value for our stakeholders. We invite
          investors to join us on this journey of growth, innovation, and
          impact. Partner with Ubique Pharma, where business success aligns with
          a healthier future for all. Invest with confidence.
        </p>
      </div>
    </section>
  );
};

export default InvestorPage;