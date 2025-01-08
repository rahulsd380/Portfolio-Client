
import React from "react";
import {MdOutlineMail, MdOutlinePhoneIphone} from "react-icons/md";

const StartProjectBanner = () => {

    return (
        <section
            className="w-full max-w-[1100px] mx-auto rounded-xl my-20 py-[20px] sm:py-[40px] px-[40px] sm:px-[80px] bg-gradient-to-br from-[#161819] to-[#5C26B5] relative overflow-hidden font-Poppins">
            <div className="w-full sm:w-[60%]">
                <div className="w-full sm:w-[60%]">
                    <h1 className="text-[2rem] uppercase sm:text-[2.8rem] bg-text-gradient bg-clip-text text-transparent leading-[45px] font-semibold">Have A Project Idea?</h1>
                    <p className="text-[0.9rem] text-[#CBCBCB] mt-5">Turn your project idea into reality with our expert team, providing guidance and flawless execution.✌️</p>
                </div>

                <div className="relative mt-12 mb-6">
                    <input className="py-3 pr-4 pl-12 w-full outline-none"
                           placeholder="Your Contact Number"/>
                    <MdOutlinePhoneIphone
                        className="p-1.5 bg-[#F8F8F8] text-[#6C777C] text-[2rem] absolute top-[50%] left-2 transform translate-y-[-50%]"/>

                    <button
                        className="absolute bottom-[-20px] right-[-20px] bg-[#825FF1] hover:bg-[#7755e8] text-white py-3 px-8">Submit
                    </button>
                </div>
            </div>

            <MdOutlineMail
                className="text-[30rem] absolute top-[-100px] right-[-100px] text-white opacity-10 rotate-[-30deg]"/>
        </section>
    );
};

export default StartProjectBanner;
                    