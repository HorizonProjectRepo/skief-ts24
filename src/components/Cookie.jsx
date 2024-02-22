import React from "react";

const Cookie = ({setCookie}) => {
  return (
    <div className="fixed bottom-0 w-full h-[160px] bg-white p-4 z-[99999] text-black rounded">
      <div className="font-bold">This website uses cookies</div>
      <div className="text-lg font-normal">
        We share some information about your use of our website with third
        parties concerning analytics and social media If you accept or continue
        to use this site, we will assume that you agree to this.
      </div>
      <div className="flex justify-center font-semibold"><button className="mr-4 border border-green-500 font-bold px-6 py-3 rounded" onClick={()=>setCookie(true)}>I accept</button></div>
    </div>
  );
};

export default Cookie;
