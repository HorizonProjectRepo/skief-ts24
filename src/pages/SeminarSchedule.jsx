import React from "react";

const SeminarSchedule = () => {
  return (
    <div>
       <div className="my-4 mx-2 font-semibold text-center">
        <p className="text-[18px]">Schedule Technical Seminar</p>
        <p className="text-[13px]">Schedule may be subject to changes!</p>
      </div>
      <div className="flex justify-center mt-8">
      <div className="w-[850px] max-[850px]:w-full h-screen">
        <iframe
          title="pdf"
          src="http://www.skif.dk/xdoc/388/skief2024_schedule.pdf"
          width="100%"
          height="100%"
          
        ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SeminarSchedule;
