import React from "react";
import { Fade } from "react-awesome-reveal";
import img1 from "../assets/images/1.PNG";
import img2 from "../assets/images/2.1.jpg";
import img3 from "../assets/images/3.PNG";
import img4 from "../assets/images/4.PNG";
import img5 from "../assets/images/5.PNG";
import hero from "../assets/images/hero.png";
import ins1 from "../assets/images/ins1.PNG";
import ins2 from "../assets/images/ins2.PNG";
import logo1 from "../assets/images/logo1.PNG";
import logo2 from "../assets/images/logo2.png";
import NewsLetter from "../components/NewsLetter";

const links = [
  {
    label: "Sign Up",
    url: "https://www.skif.dk/side.asp?ID=87422",
  },
  {
    label: "Schedule technical seminar",
    url: "https://www.skif.dk/xdoc/388/skief2024_schedule.pdf",
  },
  {
    label: "Referee clinic",
    url: "https://www.skif.dk/side.asp?ID=87424",
  },
  {
    label: "Dan Grading",
    url: "https://www.skif.dk/side.asp?ID=87689",
  },
  {
    label: "Nice to know",
    url: "https://www.skif.dk/side.asp?ID=87421",
  },
  {
    label: "Hotel",
    url: "https://www.skif.dk/side.asp?ID=87420",
  },
];

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
      img: img3,
      name: "Shihan Rikuta Koga",
      title: "9th dan, Switzerland",
    },
    {
      id: 3,
      img: img2,
      name: "Sensei Niels Thomassen",
      title: "7th Dan,SKIF DK instructor",
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
      <section className="flex items-center flex-col lg:flex-row">
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
        <div className="flex-1 max-w-fit max-md:hidden">
          <Fade duration={2000} direction="left">
            <img className="w-24 sm:w-32" src={logo2} alt="" />
          </Fade>
        </div>
        <div className="flex-1">
          <Fade duration={1500} direction="down">
            <img className="" src={hero} alt="hero" />
          </Fade>
        </div>

        {/* only for mobile device */}

        {/* only for mobile device */}

        <div className="max-md:hidden">
          <Fade duration={2000} direction="right">
            <img className="w-24 sm:w-32" src={logo1} alt="" />
          </Fade>
        </div>
      </section>

      {/* Instructor 1 */}
      <section>
        <div className="max-w-xs mb-8">
          <img className="" src={ins1} alt="instructor" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-4">
          {allData.slice(0, 3).map((data) => {
            return (
              <div className="mb-7 mx-auto" key={data.id}>
                <Fade duration={1500} direction="left">
                  <img
                    className="mb-4 w-80 h-80 object-cover transition-transform hover:-translate-y-4 hover:shadow-blue-950 hover:shadow-lg rounded-xl
                    "
                    src={data.img}
                    width={220}
                    height={220}
                    alt={data.title}
                  />
                  <h2 className="text-xl">{data.name}</h2>
                  <p className="font-semibold text-lg text-blue-950">
                    {data.title}
                  </p>
                </Fade>
              </div>
            );
          })}
        </div>
      </section>

      {/* Instructor 2 */}
      <section className="mt-10">
        <div className="max-w-[300px] mb-8">
          <img className="" src={ins2} alt="instructor 2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-4">
          {allData.slice(3).map((data) => {
            return (
              <div className="mb-7 mx-auto" key={data.id}>
                <Fade duration={1500} direction="right">
                  <img
                    className="mb-4 w-80 h-80 object-cover transition-transform hover:-translate-y-4 hover:shadow-blue-950 hover:shadow-lg rounded-xl
                    "
                    src={data.img}
                    width={220}
                    height={220}
                    alt={data.title}
                  />
                  <h2 className="text-xl">{data.name}</h2>
                  <p className="font-semibold text-lg text-blue-950">
                    {data.title}
                  </p>
                </Fade>
              </div>
            );
          })}
        </div>
      </section>

      {/* Venue area */}
      <Fade duration={2000} direction="left">
        <div className="my-12 px-4 lg:px-0 shadow-3xl shadow-blue-950 py-8 text-white rounded-xl flex flex-col  justify-center items-center">
          <div className="text-[20px] max-w-3xl">
            ATTENTION!:{" "}
            <span className="font-bold text-[#000391]">
              No payment for seminar, referee clinic, party, arranged food etc.
              will be possible at the venue! All payment must be done via the
              sign up link!
            </span>{" "}
          </div>

          <div className="flex flex-col space-y-3 mt-8 mb-6">
            {links?.map((link, i) => (
              <p key={i}>
                {link.label}:{" "}
                <a
                  className="ml-1 text-[#000391] max-[480px]:block max-[480px]:ml-0 hover:underline text-[16px] max-[480px]:text-[12px]"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.url}
                </a>
              </p>
            ))}
          </div>
          <div className="text-[20px]  ">
            Deadline for Sign Up is
            <span className="font-bold text-[#000391] ml-2 max-[480px]:block">
              8th September 2024
            </span>{" "}
          </div>
        </div>
      </Fade>

      {/* Subscription area */}
      <section className="mb-16">
        <Fade direction="down" duration={2000}>
          <div className=" mx-auto  rounded-xl shadow-3xl shadow-blue-950 p-6">
            <NewsLetter />
          </div>
        </Fade>
      </section>

      <div class="py-10 border-t-2 lg:px-0">
        <div class="flex items-center flex-col md:flex-row gap-3 max-sm:pl-2 mx-auto justify-center">
          <p className="text-xl ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z"></path>
            </svg>
          </p>
          <p class="block antialiased font-sans font-light text-inherit text-sm lg:text-lg">
            Shotokan Karate-Do International Denmark - All Rights Reserved
            Website developed by
            <a
              target="_blank"
              rel="noreferrer"
              class="font-semibold text-black hover:text-gray-900 hover:underline"
              href="https://www.kodeend.com/"
            >
              {" "}
              KodeEnd IT Solutions AB
            </a>
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
