"use client";
import React, { useState , useRef} from "react";
import Image from "next/image";
import { IMAGES } from "@/assets";
import InputField from "@/Components/Shared/InputFields/InputField";
import emailjs from "@emailjs/browser";
import Heading from "@/Components/Reusable/Heading/Heading";
import { toast } from "sonner";

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
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phno ||
      !formData.message
    ) {
      toast.error("Please fill in all the fields.");
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phno: formData.phno,
      message: formData.message,
    };
   
    // Ref for the form element
  

  // Send email function with types
  
    emailjs
      .sendForm(
        serviceID,
        templateID,
        templateParams,
        userID
      )
      .then(
        () => {
          toast("Thanks for your interest. We will contact with you soon!", {
            style: {
              padding: "10px",
              borderRadius: "5px",
            },
            duration: 3000,
          });
        },
        (error) => {
          console.log(error);
          toast.error("Failed! Try again.");
        }
      );
  
    // Send email via EmailJS
    // emailjs.send(serviceID, templateID, templateParams, userID).then(
    //   (response) => {
    //     console.log("Email sent successfully:", response);
    //     // Optionally reset the form after submission
    //     setFormData({
    //       name: "",
    //       email: "",
    //       phno: "",
    //       message: "",
    //     });
    //     toast.success("Email sent successfully!");
    //   },
    //   (error) => {
    //     toast.error("Something went wrong. Please try again.");
    //     // Handle any error in sending email
    //   }
    // );
  };

  return (
    <div className="relative h-fit flex py-20 px-5 w-full flex-col gap-2 items-center justify-center ">
      <div className="hidden lg:block size-[400px] rounded-full bg-primary-20/10 bg-opacity-30 blur-[100px] absolute top-[50px] left-2"></div>
      <div className="hidden lg:block size-[400px] rounded-full bg-primary-20/10 bg-opacity-30 blur-[100px] absolute top-4 right-0"></div>

      <div className="hidden lg:block size-[400px] rounded-full bg-primary-20/10 bg-opacity-30 blur-[100px] absolute bottom-[50px] right-2"></div>
      <div className="hidden lg:block size-[400px] rounded-full bg-primary-20/10 bg-opacity-30 blur-[100px] absolute bottom-4 left-0"></div>

      <Image
        src={IMAGES.ContactUs_bg}
        alt=""
        className="absolute top-0 bottom-0 right-0 left-0 z-0"
      />
      <div className="w-full max-w-[1280px] flex flex-col justify-center items-center mx-auto px-4 md:px-8 xl:px-0">
        <Heading
          alignment="center"
          heading="Get in touch"
          description="Get in touch, and together, let's scale new heights of success!"
          descriptionWidth="max-w-[900px] mx-auto"
        />

        <div className="inline-flex p-5 w-full h-full,  md:max-h-[546px] items-center md:gap-4 lg:gap-7 rounded-2xl border-2 border-[rgba(10,13,23,0.05)] bg-[rgba(255,255,255,0.04)] backdrop-blur-[190px] my-10 flex-col md:flex-row">
          <div className="w-full order-2 md:order-1 md:w-[50%] md:px-10 px-2 py-10 h-full">
            <form onSubmit={handleSubmit} className="space-y-4" ref={form}>
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
          <div className="relative w-full order-1  md:order-2 md:w-[50%]  md:p-0 h-full">
            <Image
              src={IMAGES.ContactUs}
              alt="hero-image"
              className="object-cover rounded-3xl w-full h-full md:max-h-[456px]"
            />
            <div className="absolute inset-0 flex items-end justify-center px-6 bg-black/50 rounded-3x pb-10">
              <p className="text-white/80 text-center text-xs font-medium">
                Ready to turn your ideas into reality? We’re here to help you
                navigate the digital landscape with innovative solutions
                tailored to your needs. Whether you’re looking for cutting-edge
                technology, seamless integrations, or expert guidance, our team
                is dedicated to empowering your business to thrive. Let’s
                connect and explore how we can create something remarkable
                together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
