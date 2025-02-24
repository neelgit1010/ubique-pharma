import Image from 'next/image'

const EnquiryFormCard = () => {
  return (
    <div className="w-full h-auto md:w-1/2 relative">
      <Image
        src={"/images/enq-form.png"}
        alt="enq-form"
        width={500}
        height={500}
        className="w-full h-auto md:h-[20rem] object-cover rounded"
      />

      <div className="absolute inset-0 w-full h-full bg-defined-blue opacity-30"></div>

      <div className="absolute inset-0 w-full h-auto flex flex-col gap-2">
        <form className="w-[90%] mx-auto py-4 md:py-16 flex flex-col md:gap-8 gap-2">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 md:p-4 rounded opacity-50"
          />
          <input
            type="number"
            placeholder="Mobile No."
            className="w-full p-3 md:p-4 rounded opacity-50"
          />
          <select
            name="enquiry"
            id=""
            className="w-full p-3 md:p-4 rounded opacity-50"
          >
            <option value="Distributorship">Distributorship</option>
            <option value="Investor">Investor</option>
            <option value="Marketing">Marketing </option>
            <option value="Others">Others </option>
          </select>
          <input
            type="text"
            placeholder="Address"
            className="w-full p-3 md:p-4 rounded opacity-50"
          />
          <textarea
            name="message"
            placeholder="Write massege briefly Which you want to Say us:"
            className="w-full p-3 md:p-4 rounded opacity-50 md:max-h-[13rem]"
            rows={4}
          ></textarea>
          <button className="bg-defined-orange text-white p-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnquiryFormCard