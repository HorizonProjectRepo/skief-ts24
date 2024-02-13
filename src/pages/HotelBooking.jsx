import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/images/hotel-booking-image.png";
const HotelBooking = () => {
  return (
    <div className="mx-2">
      <div className="my-4  font-semibold ">
        <p className="text-[18px]">Hotel booking and Hotel discounts.</p>
        <p className="text-[13px]">
          SKIF Denmark have made some very favorable agreements with two nearby
          hotels.
        </p>
      </div>
      <div className="max-w-[800px]">
        SKIF Denmark have prebooked as many rooms as we were allowed to but
        unfortunatelly only close to 200 rooms. So to ensure a room with big
        discount, we recommend to book as soon as possible.
      </div>
      <div className="font-bold mt-8">
        <p>Vejle Center Hotel</p>
        <p>Willy Sørensens Plads 3</p>
        <p>7100 Vejle</p>
      </div>
      <div className="mt-4">
        <h1 className="font-bold">Information:</h1>
        <p>30m from the venue.</p>
        <p>
          When booking via below links, the price is for the room, so booking a
          3 person room, the price shown is for all 3 persons.
        </p>
        <div className="flex flex-col my-4 space-y-2">
          <p>
            Karate1{" "}
            <Link
              to="https://bit.ly/3QErf3G"
              className="text-[#000391]"
              target="_blank"
              rel="noreferrer"
            >
              https://bit.ly/3QErf3G
            </Link>
          </p>
          <p>
            Karate2{" "}
            <Link
              to="https://bit.ly/3saVjdZ"
              className="text-[#000391]"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              https://bit.ly/3saVjdZ
            </Link>
          </p>
          <p>
            Karate3{" "}
            <Link
              to="https://bit.ly/3Qi3jlo"
              className="text-[#000391]"
              target="_blank"
              rel="noreferrer"
            >
              https://bit.ly/3Qi3jlo
            </Link>
          </p>
        </div>
        <div>
          <p className="font-bold mb-3">
            Language and currency can be changed in upper right corner
          </p>
          <div>
            {" "}
            <img src={img1} alt="img1" />
          </div>
        </div>
      </div>
      <div className="font-bold mt-10 mb-8">
        <p>Hotel Cabinn Vejle</p>
        <p>Dæmningen 6</p>
        <p>7100 Vejle</p>
      </div>
      <div>
        <h1 className="font-bold">Discounted day price:</h1>
        <p>Economic room single 499dkk (66 Euro)</p>
        <p>Economic double room 610dkk (81 Euro)</p>
        <p>Caps S room single 595dkk (79 Euro)</p>
        <p>Caps S room double 795dkk (106 Euro)</p>{" "}
      </div>
      <div className="my-4">
        <p> Break can be purchase at 99dkk (13 Euro) pr person </p>
        <p>
          (Breakfast can also be purchase at the registration for the seminar)
        </p>
      </div>
      <div>
        <h1 className="font-bold">
          For discounted price please book via email to:
        </h1>
        <p>
          Hotel manager, Dorte Kobel{" "}
          <Link to={"mailto:doko@cabinn.com"}> doko@cabinn.com</Link>
        </p>
        <p>
          <span className="font-bold">In the subject field write:</span> SKIEF
          Karate
        </p>
        <p className="font-bold">
          In the mail, state:{" "}
          <span className="font-normal">(Name,Address and Phone number)</span>
        </p>
      </div>
      <div className="my-4">
        <p>
          Discounted prics only available until 2 months before the seminar!
        </p>
        <p>
          Normal hotel link:{" "}
          <Link
            to={"https://en.cabinn.com/hotel/cabinn-vejle"}
            className="text-[#000391]"
            target="_blank"
            rel="noreferrer"
          >
            https://en.cabinn.com/hotel/cabinn-vejle
          </Link>{" "}
        </p>
        <p>For other hotels, please search the area of Vejle.</p>
      </div>
    </div>
  );
};

export default HotelBooking;
