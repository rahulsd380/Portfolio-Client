"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/assets";
import InputField from "@/Components/Shared/InputFields/InputField";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phno: "",
    message: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phno: formData.phno,
      message: formData.message,
    };

    // Send email via EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("Email sent successfully:", response);
        console.log(templateParams);
        // Optionally reset the form after submission
        setFormData({
          name: "",
          email: "",
          phno: "",
          message: "",
        });
      },
      (error) => {
        console.error("Error sending email:", error);
        // Handle any error in sending email
      }
    );
  };

  return (
    <div className="relative h-fit flex py-20 px-5 w-full flex-col gap-2 items-center justify-center">
      <Image
        src={IMAGES.ContactUs_bg}
        alt=""
        className="absolute top-0 bottom-0 right-0 left-0 z-0"
      />
      <div className="w-full max-w-[1280px] flex flex-col justify-center items-center mx-auto px-4 md:px-8 xl:px-0">
        <h1 className="font-Poppins font-extrabold text-[86px] 2xl:text-[100px] text-white text-center max-w-[1300px] z-10">
          Get in{" "}
          <span className="bg-gradient-to-r from-white via-purple-500 to-fuchsia-600 bg-clip-text text-transparent">
            touch
          </span>
        </h1>
        <p className="font-Inter text-lg text-center max-w-[980px] text-neutral-15 z-10">
          Get in touch, and together, let's scale new heights of success!
        </p>
        <div className="inline-flex p-5 w-full items-center gap-7 rounded-2xl border-2 border-[rgba(10,13,23,0.05)] bg-[rgba(255,255,255,0.04)] backdrop-blur-[190px] my-10 flex-col md:flex-row">
          <div className="w-full order-2 md:order-1 md:w-[50%] p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(value) => handleChange("name", value)}
                className="w-full"
              />
              <InputField
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(value) => handleChange("email", value)}
                className="w-full"
              />
              <InputField
                type="number"
                placeholder="Your Phone No."
                value={formData.phno}
                onChange={(value) => handleChange("phno", value)}
                className="w-full"
              />
              <InputField
                isMultiline
                placeholder="Your Purpose"
                value={formData.message}
                onChange={(value) => handleChange("message", value)}
                className="w-full"
              />
              <button
                type="submit"
                className="w-full justify-center bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 transition-all duration-500 ease-in-out hover:bg-gradient-to-l hover:from-violet-500 hover:via-purple-600 hover:to-fuchsia-600 rounded-md focus:outline-none px-5 py-3 text-white/90 text-lg font-medium flex items-center gap-3 z-10"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="w-full hidden md:block order-1 md:order-2 md:w-[50%] px-10 md:p-0">
            {" "}
            <Image
              src={IMAGES.ContactUs}
              alt="hero-image"
              className="object-cover rounded-3xl h-full w-full min-h-[276px] md:min-h-[421px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
