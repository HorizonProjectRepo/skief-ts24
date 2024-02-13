import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="ml-4">
      <p className="font-bold text-[18px] max-sm:mt-4 mb-4">Information may be added</p>
      <div>
        <p className="font-bold">Venue location:</p>
        <p>DGI huset Vejle</p>
        <p>
          <Link to="https://www.dgihusetvejle.dk/" target="_blank" rel="noopener noreferrer" className="text-[#000391]">
            www.dgihusetvejle.dk
          </Link>
        </p>
      </div>
      <div className="mt-4">
        <p className="font-bold">Venue map:</p>
        <p>
          <Link to="https://www.dgihusetvejle.dk/media/reund0nh/dgi-huset-vejle_oversigtskort.pdf" className="text-[#000391]" target="_blank" rel="noopener noreferrer">
            www.dgihusetvejle.dk/media/reund0nh/dgi-huset-vejle_oversigtskort.pdf
          </Link>
        </p>
      </div>
      <p>Only 15 minutes walk from Vejle train and bus station.</p>

      <div className="mt-4">
        <h1 className="font-bold mb-4">Public transportation to the seminar:</h1>
        <div className="flex flex-col space-y-4">
          <div>
            <h1 className="font-bold">Plane:</h1>
            <p>Billund airport (BLL)</p>
            <p>
              Transport from and to the airport:{" "}
              <Link to="https://www.bll.dk/en/parking-and-transport/to-and-from-the-airport" className="text-[#000391]" target="_blank" rel="noopener noreferrer">
                www.bll.dk/en/parking-and-transport/to-and-from-the-airport
              </Link>
            </p>
          </div>
          <div>
            <h1 className="font-bold">Train:</h1>
            <p>
              From Copenhagen to Vejle,{" "}
              <Link to="https://www.DSB.dk" className="text-[#000391]" target="_blank" rel="noopener noreferrer">www.DSB.dk</Link>{" "}
            </p>
            <p>From Hamburg DE to Vejle DK, Please google various provider.</p>
          </div>
          <div>
            <h1 className="font-bold">Bus: </h1>
            <p>
              Hamburg to Vejle{" "}
              <Link to="https://global.flixbus.com/" className="text-[#000391]" target="_blank" rel="noopener noreferrer">global.flixbus.com/</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
