import React from "react";
import { Fade } from "react-awesome-reveal";
import img1 from "../assets/images/1.PNG";
import img2 from "../assets/images/2.PNG";
import img3 from "../assets/images/3.PNG";
import img4 from "../assets/images/4.PNG";
import img5 from "../assets/images/5.PNG";
import hero from "../assets/images/hero.png";
import ins1 from "../assets/images/ins1.PNG";
import ins2 from "../assets/images/ins2.PNG";
import logo1 from "../assets/images/logo1.PNG";
import logo2 from "../assets/images/logo2.png";

const Home = () => {
  const allData = [
    {
      id: 1,
      img: img1,
      name: "Shihan Masaru Miura",
      title: "9th dan, Italiy",
    },
    {
      id: 2,
      img: img2,
      name: "Shihan Shiro Asano",
      title: "9th dan, UK1",
    },
    {
      id: 3,
      img: img3,
      name: "Shihan Rikuta Koga",
      title: "9th dan, Switzerland",
    },
    {
      id: 4,
      titleImg: ins2,
      img: img4,
      name: "Kancho Nobuaki Kanazawa",
      title: "8th dan",
    },
    {
      id: 5,
      titleImg: " ",
      img: img5,
      name: "Shuseki Shihan Manabu Murakami",
      title: "8th dan",
    },
  ];
  return (
    <>
      <section className="">
        {/* <p className="text-2xl font-bold mb-3 text-[#001143]">
          VEJLE · DENMARK
        </p>
        <div className="flex items-center">
          <p
            className="text-2xl sm:text-4xl font-bold uppercase"
            style={{
              color: "#001143",
              writingMode: "vertical-rl",
              transform: "rotate(-180deg)",
            }}
          >
            10-13th October
          </p>
          <p className="ml-3 text-4xl lg:text-9xl font-bold">
            SKIEF <br /> TECHNICAL <br /> SEMINAR <br /> 24
          </p>
        </div> */}
        <Fade duration={3000}>
          <img className="lg:max-w-5xl " src={hero} alt="hero"/>
        </Fade> 
      </section>

      <div className="max-w-xs md:flex ">
        <img className="md:max-lg:relative md:max-lg:left-56 max-sm:relative max-sm:top-10 max-sm:left-8" src={ins1} alt="instructor"/>

        <img className="ml-0 lg:ml-[300px] w-56 sm:w-60 max-sm:relative max-sm:left-10 max-sm:top-[86.5rem] sm:max-lg:relative sm:max-md:top-[88.25rem] sm:max-md:left-60 md:max-lg:top-[88rem] md:max-lg:right-20" src={ins2} alt="instructor" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 max-sm:gap-y-12 sm:max-lg:gap-y-14">
        {allData.map((data) => {
          return (
              <div className="mb-7 mx-auto">
                <img className="mb-2 w-full" src={data.img} alt="" />
                <h2 className="font-bold w-36">{data.name}</h2>
                <p>{data.title}</p>
              </div>
          );
        })}
      </div>

      <Fade duration={1000}>
      <div className="grid lg:grid-cols-6 gap-8 my-20 px-4 lg:px-0">
        <div className="col-span-2 font-semibold sm:font-thin">
          <p className="h-16 font-bold">PRELIMINARY SCHEDULE</p>
          <div className="grid grid-cols-2">
            <p>Thursday 10th:</p>
            <p>Referee Clinic</p>
          </div>
          <div className="grid grid-cols-2 mt-12">
            <p>Friday 11th:</p>
            <p className="">
              Referee Clinic continued Technical Seminar BOD meeting and General
              assembly
            </p>
          </div>
          <div className="grid grid-cols-2 mt-7">
            <p>Saturday 12th:</p>
            <p className="">Technical Seminar Dan grading Party</p>
          </div>
          <div className="grid grid-cols-2 my-8">
            <p>Sunday 13th:</p>
            <p className="">Technical Seminar</p>
          </div>
        </div>

        <div className="col-span-3 font-base sm:font-thin">
          <p className="h-16 font-bold">INFORMATION WILL BE UPDATED CONTINOUSLY</p>
          <div className="">
            <p>
              Information like Accommodation options and possibilities, travel
              info, signup and more information will be part of the updates.:
            </p>
          </div>
          <div className="my-5">
            <p>
              To receive update notifications, please sign up here: <br />
              <span className="font-semibold cursor-pointer">http://skief-technicalseminar2024.dk</span>
            </p>
          </div>
          <div className="mt-20 flex">
            <p>Contact information:</p>
            <a href="mailto:carsten@skif.dk" className="ml-2 font-semibold">carsten@skif.dk</a>
          </div>
          <div className="my-14">
            <p className="font-semibold">
              Venue address: <br /> DGI Huset Vejle, Willy Sørensens Plads 5, 7100
              Vejle, Denmark
            </p>
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1 mx-auto">
          <img className="w-24 -mt-10 sm:mt-6" src={logo2} alt="" />
          <img className="w-24 mt-6" src={logo1} alt="" />
        </div>
      </div>
      </Fade>

      <div class="py-10 border-t-2 border-gray-900 lg:px-0">
        <div class="flex items-center flex-col md:flex-row gap-3 max-sm:pl-2 mx-auto justify-center">
          <p className="text-xl ">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z"></path></svg>
          </p>
          <p class="block antialiased font-sans font-light text-inherit text-sm lg:text-lg">Shotokan Karate-Do International Denmark - All Rights Reserved Website developed by
            <a target="_blank" rel="noreferrer" class="font-semibold text-black hover:text-gray-900" href="https://www.kodeend.com/"> KodeEnd IT Solutions AB</a>
          </p>
        </div>
      </div>
      
      {/* <section className="flex flex-col lg:flex-row py-20">
        <div className="">
          <h2 className="font-bold text-xl">PRELIMINARY SCHEDULE</h2><br />
          <div className="w-96">
            <div className="flex justify-between items-start">
              <p>Thursday 10th:</p>
              <p className="">Referee Clinic </p>
            </div>
            <div className="flex justify-between items-start">
              <p> Friday 11th:</p>
              <p>Referee Clinic continued Technical Seminar BOD meeting
            and  General assembly  </p>
            </div>
            
          </div>
      
        </div>

        <div className="">
          <h2 className="font-bold text-xl">INFORMATION WILL BE UPDATED CONTINOUSLY</h2> <br />
          <p className="w-96">
            Information like Accommodation options and possibilities, travel
            info, signup and more information will be part of the updates.{" "}
            <br /> <br />
            To receive update notifications, please sign up here: <br/>
            http://skief-technicalseminar2024.dk <br />
            <br />
            Contact information: Carsten@skif.dk <br />
            <br />
            Venue address: DGI Huset Vejle, Willy Sørensens Plads 5, 7100 Vejle,
            Denmark
          </p>
        </div>

        <div className="flex flex-col">
          <img className="w-24" src={logo2} alt="logo2" />
          <img className="w-32" src={logo1} alt="logo1" />
        </div>
      </section> */}
    </>
  );
};

export default Home;
