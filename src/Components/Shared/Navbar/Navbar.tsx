/* eslint-disable react/no-unescaped-entities */
import Container from "@/Components/Reusable/Container/Container";
import Link from "next/link";
import { BsSendArrowUpFill } from "react-icons/bs";

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
      <div className="font-Poppins py-5 flex items-center justify-between">
        <Link href={"/"} className="text-3xl font-semibold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 bg-clip-text text-transparent">
          Logo
        </Link>
        <div className="flex items-center gap-6">
        <div className="flex items-center gap-6">
          {navLinks?.map((item) => (
            <Link
              key={item?.label}
              href={item?.path}
              className="text-white text-lg hover:text-primary-20 transition duration-300"
            >
              {item?.label}
            </Link>
          ))}
        </div>
        <button className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 rounded-md focus:outline-none px-5 py-3 text-white text-lg font-medium flex items-center gap-3">
          <BsSendArrowUpFill /> Let's Talk
        </button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;