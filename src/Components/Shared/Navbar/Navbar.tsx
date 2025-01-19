"use client"
/* eslint-disable react/no-unescaped-entities */
import { IMAGES } from "@/assets";
import Container from "@/Components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { BsSendArrowUpFill } from "react-icons/bs";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "Our Works",
      path: "/our-works",
    },
    {
      label: "Blogs",
      path: "/blogs",
    },
    {
      label: "FAQs",
      path: "/faqs",
    },
    {
      label: "Contact Us",
      path: "/contact-us",
    },
  ];
  return (
    <Container>
      <div id="home" className="font-Poppins py-5 flex items-center justify-between">
        <Link href={"/"} className="text-3xl font-semibold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 bg-clip-text text-transparent flex items-center gap-3">
        <Image src={IMAGES.logo} alt="" className="w-8"/>
        Amplogix
        </Link>

        <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-6">
          {navLinks?.map((item) => (
            <Link
              key={item?.label}
              href={item?.path}
              className="text-white hover:text-primary-20 transition duration-300"
            >
              {item?.label}
            </Link>
          ))}
        </div>
        <button onClick={() => {
        const startAProject = document.getElementById("startAProject");
        startAProject?.scrollIntoView({ behavior: "smooth" });
      }} className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 rounded-md focus:outline-none px-5 py-3 text-white font-medium hidden sm:flex items-center gap-3">
          <BsSendArrowUpFill /> Let's Talk
        </button>
        <HamburgerMenu/>
        </div>

      </div>
    </Container>
  );
};

export default Navbar;
