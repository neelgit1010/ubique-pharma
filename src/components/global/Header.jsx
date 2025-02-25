"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import TradeFormCard from "../cards/TradeFormCard";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Products", path: "/products" },
    { name: "Career", path: "/career" },
    { name: "Investor", path: "/investor" },
    { name: "Marketing", path: "/marketing" },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

   const toggleBookingModal = () => {
     setIsModalOpen((prev) => !prev);
     console.log("Toggle Modal Clicked: ", !isModalOpen);
   };

   const closeModal = useCallback(() => {
     console.log("closeModal function triggered");
     setIsModalOpen(false);
   }, []);

    useEffect(() => {
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            setScrolled(window.scrollY > 60);
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

   useEffect(() => {
     const handleClickOutside = (event) => {
       if (modalRef.current && !modalRef.current.contains(event.target)) {
         closeModal();
       }
     };

     if (isModalOpen) {
       document.addEventListener("mousedown", handleClickOutside);
     }
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, [isModalOpen, closeModal]);

  return (
    <header>
      <div
        className={`flex justify-between items-center md:px-6 px-4 fixed lg:px-8 h-[4.5rem] md:h-[5rem] w-full z-[60] bg-white shadow-md ${
          scrolled ? "top-0 " : "md:top-[3rem] top-0"
        }`}
      >
        <Link href={"/"}>
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={220}
              height={40}
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-5 lg:items-center font-semibold lg:text-sm text-base">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="hover:text-defined-blue"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex lg:gap-5">
          <button
            onClick={toggleBookingModal}
            className="bg-defined-green text-white py-2 px-8 rounded-md transition-all duration-700 font-semibold hover:bg-green-700"
          >
            Trade Enquiry
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-3xl ml-auto mr-3"
          onClick={toggleMenu}
        >
          {isOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-16 left-0 w-full bg-black text-white shadow-md flex flex-col p-5 gap-4 transition-all duration-300 transform ${
            isOpen
              ? "opacity-85 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={toggleMenu}
              className="hover:text-defined-blue"
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={toggleBookingModal}
            className="bg-defined-green text-white py-2 px-8 rounded-full w-full transition-all duration-300 font-semibold hover:bg-gray-800"
          >
            Trade Enquiry
          </button>
        </div>
      </div>

       {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50">
          <div ref={modalRef} className="w-full sm:w-[90%] md:w-[50%] max-w-md p-6 rounded-lg relative ">
            <TradeFormCard closeModal={closeModal} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
