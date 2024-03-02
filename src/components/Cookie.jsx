import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";
const Cookie = ({ setCookie,setShowCookie }) => {
  return (
    <div className=" flex fixed bottom-0 w-full bg-white px-3 pt-3 pb-1 sm:p-4 z-[99999] text-black rounded ">
      <div className="relative w-full flex sm:flex-row flex-col">
        <div className="w-[100%] sm:w-[80%]">
          {/* <div className="font-bold">This website uses cookies</div> */}
          <div className="text-[12px] font-normal mr-1">
            We share some information about your use of our website with third
            parties concerning analytics and social media If you accept or
            continue to use this site, we will assume that you agree to this.
          </div>
        </div>
        <div className="w-[100%] sm:w-[20%] flex justify-center sm:justify-end items-center font-semibold">
          <div className="flex">
            <button
              className="block mr-8 border border-green-500  font-bold px-4 py-[6px] rounded text-[12px] mt-2 sm:mt-0"
              onClick={() => setCookie(true)}
            >
              I accept
            </button>
          </div>
        </div>
        <div className="absolute top-[-8px] right-[-8px] sm:right-0 text-red-500"><HiOutlineXMark className="cursor-pointer" onClick={() => setShowCookie(false)} /></div>
      </div>
    </div>
  );
};

export default Cookie;
