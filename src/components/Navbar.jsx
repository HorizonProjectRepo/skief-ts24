import { Link, NavLink } from "react-router-dom";

//import img1 from "../assets/k-logo.webp";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import logo1 from "../assets/images/logo1.PNG";
import logo2 from "../assets/images/logo2.png";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showsideNav, setShowSideNav] = useState(false);
  const showDropdownHandler = (val) => {
    setShowDropdown(val);
  };
  const showSidebarHandler = () => {
    setShowSideNav(!showsideNav);
  };
  return (
    <>
      {showsideNav && (
        <div
          className={`sidebar w-[320px] p-4 h-screen lg:hidden fixed z-10 top-0 bg-black text-white duration-500 transition-all ${
            showsideNav ? "left-0" : "left-[-150%]"
          }`}
        >
          <div className="flex justify-between">
            <div></div>
            <button
              className="h-[50px]"
              onClick={() => setShowSideNav(!showsideNav)}
            >
              <IoClose className="text-[36px]" />
            </button>{" "}
          </div>
          <ul className="flex flex-col text-[12px] font-grotesk font-semibold basis-2/4 uppercase mx-auto">
            <li className="flex">
              <NavLink
                to="http://www.skif.dk/side.asp?ID=87422"
                className={({ isActive, isPending }) =>
                  (isPending ? "pending" : isActive ? "" : "") +
                  " hover:text-[#98979C] py-4 pl-2 pr-4 text-[12px]"
                }
                target="_blank"
              >
                SKIEF TECHNICAL SEMINAR - SIGN UP
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/skief2024_schedule.pdf"
                className={({ isActive, isPending }) =>
                  (isPending ? "pending" : isActive ? "" : "") +
                  "  hover:text-[#98979C] py-4 pl-2 pr-4"
                }
                target="_blank"
              >
                SCHEDULE TECHNICAL SEMINAR
              </NavLink>
            </li>
            <li
              className="
             flex flex-col"
            >
              <NavLink
                to="http://www.skif.dk/side.asp?ID=87424"
                className={({ isActive, isPending }) =>
                  (isPending ? "pending" : isActive ? "" : "") +
                  "  hover:text-[#98979C] py-4 pl-2 pr-4 flex "
                }
                target="_blank"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                SCHEDULE REFEREE CLINIC
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="http://www.skif.dk/side.asp?ID=87420"
                className={({ isActive, isPending }) =>
                  (isPending ? "pending" : isActive ? "" : "") +
                  "  hover:text-[#98979C] py-4 pl-2 pr-4"
                }
                target="_blank"
              >
                HOTEL BOOKING AND HOTEL DISCOUNTS
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="http://www.skif.dk/side.asp?ID=87421"
                className={({ isActive, isPending }) =>
                  (isPending ? "pending" : isActive ? "" : "") +
                  "  hover:text-[#98979C] py-4 pl-2 pr-4"
                }
                target="_blank"
              >
                NICE TO KNOW
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                className={({ isActive, isPending }) =>
                  (isPending ? "pending" : isActive ? "" : "") +
                  "  hover:text-[#98979C] py-4 pl-2 pr-4"
                }
                onMouseEnter={() => showDropdownHandler(true)}
                onMouseLeave={() => showDropdownHandler(false)}
              >
                Contact
              </NavLink>
            </li>
            {showDropdown && (
              <div
                className=" z-10 bg-white  top-[80px] left-[-82px] border shadow-md font-normal mx-2"
                onMouseEnter={() => showDropdownHandler(true)}
                onMouseLeave={() => showDropdownHandler(false)}
              >
                <Link
                  to="mailto:carsten@skif.dk"
                  className="block  p-2 text-base text-black hover:text-[#98979C]"
                >
                  carsten@skif.dk
                </Link>
              </div>
            )}
          </ul>
        </div>
      )}
      <div className="flex items-center justify-center max-lg:justify-between w-[98%] h-[100px] font-grotesk mx-auto mt-2 uppercase">
        <div className="flex  gap-2 md:hidden">
          <div className="w-[80px]">
            <img
              src={logo2}
              alt="logo2"
              className="md:hidden w-[80px] max-[320px]:w-[80px] max-[320px]:h-[80px] object-cover"
            />
          </div>
          <img
            src={logo1}
            alt="logo1"
            className="md:hidden w-[80px] max-[320px]:w-[80px] max-[320px]:h-[80px]"
          />
        </div>
        <ul className="flex    text-[12px] font-semibold  max-md:hidden pb-4 ">
          <li className=" flex justify-center items-center">
            <NavLink
              to="http://www.skif.dk/side.asp?ID=87422"
              className={({ isActive, isPending }) =>
                (isPending ? "pending" : isActive ? "" : "") +
                " mx-4 hover:text-white"
              }
              target="_blank"
            >
              SKIEF TECHNICAL SEMINAR - SIGN UP
            </NavLink>
          </li>
          <li className="flex justify-center items-center">
            <NavLink
              to="/skief2024_schedule.pdf"
              className="mx-4 hover:text-white"
              target="_blank"
            >
              SCHEDULE TECHNICAL SEMINAR
            </NavLink>
          </li>
          <li className="flex justify-center items-center">
            <NavLink
              to="http://www.skif.dk/side.asp?ID=87424"
              className="mx-4 hover:text-white"
              target="_blank"
            >
              SCHEDULE REFEREE CLINIC
            </NavLink>
          </li>
          <li className="relative flex justify-center items-center">
            <NavLink
              to="http://www.skif.dk/side.asp?ID=87420"
              className="mx-4 hover:text-white"
              target="_blank"
            >
              HOTEL BOOKING AND HOTEL DISCOUNTS
            </NavLink>
          </li>
          <li className="flex justify-center items-center">
            <NavLink
              to="http://www.skif.dk/side.asp?ID=87421"
              className={({ isActive, isPending }) =>
                (isPending ? "pending" : isActive ? "" : "") +
                " mx-4 hover:text-white"
              }
              target="_blank"
            >
              NICE TO KNOW
            </NavLink>
          </li>
          <li className="relative flex justify-center items-center">
            <NavLink
              className={({ isActive, isPending }) =>
                (isPending ? "pending" : isActive ? "" : "") +
                " mx-4 hover:text-white h-[100px] flex items-center"
              }
              onMouseEnter={() => showDropdownHandler(true)}
              onMouseLeave={() => showDropdownHandler(false)}
            >
              Contact
            </NavLink>
            {showDropdown && (
              <div
                className="absolute z-10 bg-white  top-[80px] left-[-82px] border shadow-md font-normal"
                onMouseEnter={() => showDropdownHandler(true)}
                onMouseLeave={() => showDropdownHandler(false)}
              >
                <Link
                  to="mailto:carsten@skif.dk"
                  className="block p-2 text-base hover:text-[#98979C]"
                >
                  carsten@skif.dk
                </Link>
              </div>
            )}
          </li>
        </ul>

        <div onClick={() => showSidebarHandler()}>
          <FaBars className="text-black text-[24px] md:hidden" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
