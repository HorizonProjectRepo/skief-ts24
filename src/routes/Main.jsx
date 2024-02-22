import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Cookie from "../components/Cookie";
import Cookies from "js-cookie";
const Main = () => {
  const [showCookie, setShowCookie] = useState(false);
  useEffect(() => {
    const cookieValue=Cookies.get('cookiePermission')
    if(!cookieValue){
      setShowCookie(true)
    }
  },[])
  const setCookie=(val)=>{
    Cookies.set('cookiePermission',val)
    setShowCookie(false)
  }
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto text-white">
        <Outlet />
      </div>
      {showCookie && <Cookie setCookie={setCookie} />}
    </>
  );
};

export default Main;
