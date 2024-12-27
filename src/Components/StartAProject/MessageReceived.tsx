import { ICONS } from "@/assets";
import Image from "next/image";

const MessageReceived = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <Image src={ICONS.success} alt="success-icon" className="size-[170px]" />
      <div>
      <h1 className="bg-text-gradient bg-clip-text text-transparent text-2xl font-semibold font-Poppins text-center">
        Message Received!!
      </h1>
      <p className="text-neutral-15 font-Inter text-sm mt-2">
        Thanks for reaching out to us!! We will get back to you shortly.
      </p>
      </div>
    </div>
  );
};

export default MessageReceived;
