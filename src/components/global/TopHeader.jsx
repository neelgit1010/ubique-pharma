"use client";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGoogle, FaWhatsapp } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
const TopHeader = () => {
  return (
    <div className="z-[60] w-full ">
      <div className=" bg-defined-blue h-[3rem] hidden md:flex justify-between sm:gap-2 md:gap-0 items-center  text-white">
        <div className="flex gap-4 w-full  sm:rounded-br-0 md:rounded-br-[4rem]  sm:px-4 md:px-6 sm:text-xs lg:text-sm xlg:text-base">
          <div className="flex md:gap-2 sm:gap-1 items-center sm:text-[10px] lg:text-sm xlg:text-base font-medium">
            <BiSolidPhoneCall size={20} className="text-white" />
            <Link href="tel:03561358188">0356 1358188</Link>{" "}
          </div>
          <Link
            href="mailto:info@ubiquepharma.com"
            className="flex md:gap-2 sm:gap-1 items-center font-semibold md:flex"
          >
            <MdEmail size={20} className="text-white" />
            <span>info@ubiquepharma.com</span>
          </Link>
            <span className="font-semibold">GSTIN: 19AAFFU0535M1ZV</span>
        </div>
        <div className="flex gap-4 sm:px-4 md:px-6 sm:text-xs lg:text-sm xlg:text-base">
          <div className="flex items-center gap-4">
            {/* <Link href={"https://g.co/kgs/j7CEuFi"}> */}
            <FaGoogle size={20} className="text-white" />
            {/* </Link> */}
            {/* <Link
              href={"https://www.facebook.com/profile.php?id=61552532951608#"}
            > */}
            <FaFacebook size={20} className="text-white" />
            {/* </Link> */}
            {/* <Link href={"https://www.instagram.com/primediagnostics_salbari/"}> */}
            <AiFillInstagram size={20} className="text-white" />
            {/* </Link> */}
            <Link href={"https://wa.me/918617501527"}>
              <FaWhatsapp size={20} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
