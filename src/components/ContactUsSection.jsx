import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaMobile, FaWhatsapp } from "react-icons/fa";
import useElementHeight from "@/hooks/useElementHeight";
import { useEffect, useState } from "react";
const ContactUsSection = () => {
  const [rightSideHeight, leftSideRef] = useElementHeight();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [formData, setFormData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.mobile ||
      !formData.enquiry ||
      !formData.address ||
      !formData.message
    ) {
      alert("Please fill all the fields");
      return
    }

    if (formData.mobile.length !== 10) {
      alert("Please enter a valid mobile number");
      return
    }

    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
    
    let message = `*Name:* ${formData.name}
    *Mobile:* ${formData.mobile}
    *Enquiry:* ${formData.enquiry}
    *Address:* ${formData.address}
    *Message:* ${formData.message}`;
    message = encodeURIComponent(message);

    const dest = "+917439972241";
   const baseUrl = isMobile
     ? "https://api.whatsapp.com/send"
     : "https://web.whatsapp.com/send";

   const url = `${baseUrl}?phone=${dest}&text=${message}`;
   window.open(url, "_blank").focus();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section>
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 p-4">
        <div className="md:w-3/4 w-full flex flex-col gap-4 " ref={leftSideRef}>
          <div className="border border-defined-green rounded-md w-full md:p-8 p-2">
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-3xl font-bold text-defined-blue">
                Contact Information
              </h1>
              <p className="text-sm text-[#777777]">
                For inquiries or bookings, feel free to reach out through our
                contact form or visit us directly. We’re here to assist you with
                any questions about{" "}
                <span className="text-defined-blue">
                  Levi Home Guest House & Retreat Centre
                </span>
                . Connect with us today and let us make your stay exceptional!
              </p>
              <div className="text-base lg:text-sm text-defined-blue">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-defined-orange" />
                  <span>+91 86175 01527</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMobile className="text-defined-orange" />
                  <span>+91 86175 01527</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail className="text-defined-orange" />
                  <span>info@ubiquepharma.com </span>
                </div>
                <div className="flex gap-2 w-full xl:w-[80%]">
                  <IoLocationSharp className="text-defined-orange text-xl" />
                  <span>
                    Solanipuram, Civil Line, Roorkee-247667 (UK) India RO:
                    Papiva Para. Dabaram-II. Siliguri-734006. (WB) India
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col gap-4 md:px-2 md:flex-row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.4667864584976!2d88.4333205!3d26.725386399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4415c197875e7%3A0xb069b8c0fcfa1289!2sLevi%20Home!5e1!3m2!1sen!2sin!4v1739612837939!5m2!1sen!2sin"
              loading="lazy"
              className="rounded-lg w-full md:w-1/2 h-full"
            ></iframe>
            <Image
              src={"/images/contact.png"}
              alt="map"
              width={500}
              height={500}
              className="w-full md:w-1/2 h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Right Side  */}
        <div
          className="w-full h-auto md:w-1/2 relative "
          style={{
            height: isSmallScreen ? "auto" : `${rightSideHeight}px`,
          }}
        >
          <Image
            src={"/images/enq-form.png"}
            alt="enq-form"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-defined-blue opacity-30"></div>

          <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-2">
            <form
              onSubmit={handleSubmit}
              className="w-[90%] mx-auto p-4 md:py-8 flex flex-col md:gap-6 gap-2"
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 md:p-4 rounded opacity-50"
              />
              <input
                type="number"
                placeholder="Mobile No."
                name="mobile"
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="w-full p-3 md:p-4 rounded opacity-50"
              />
              <select
                name="enquiry"
                onChange={(e) =>
                  setFormData({ ...formData, enquiry: e.target.value })
                }
                className="w-full p-3 md:p-4 rounded opacity-50"
              >
                <option value="Select Enquiry" disabled selected hidden>
                  Select Enquiry
                </option>
                <option value="Distributorship">Distributorship</option>
                <option value="Investor">Investor</option>
                <option value="Marketing">Marketing </option>
                <option value="Others">Others </option>
              </select>
              <input
                type="text"
                placeholder="Address"
                name="address"
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full p-3 md:p-4 rounded opacity-50"
              />
              <textarea
                name="message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Write massege briefly Which you want to Say us:"
                className="w-full p-3 md:p-4 rounded opacity-50 md:max-h-[13rem]"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="bg-defined-orange text-white p-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
