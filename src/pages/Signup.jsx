import React, { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({ name: "", country: "", email: "" });
  const [selectedGrade, setSelectedGrade] = useState("No grade");
  const grades = [
    "No grade",
    "8th Kyu",
    "7th Kyu",
    "6th Kyu",
    "5th Kyu",
    "4th Kyu",
    "3rd Kyu",
    "2nd Kyu",
    "1st Kyu",
    "1st Dan",
    "2nd Dan",
    "3rd Dan",
    "4th Dan",
    "5th Dan",
    "6th Dan",
    "7th Dan",
    "8th Dan",
  ];
  const items = [
    {
      title: "Technical Seminar",
      text: "For participants to training sessions on Friday, Saturday, Sunday - DKK 750 (= EUR 100)",
      price: "750 kr",
      quantity: 0,
    },
    {
      title: "Referee Clinic, no examination incl.",
      text: "It is possible to participate in the Referee Clinic without taking the final exam. Participation fee includes sandwich and water for lunch on Thursday and Friday. DKK 375 (= EUR 50)",
      price: "375 kr.",
      quantity: 1,
    },
    {
      title: "Referee Clinic, no examination incl.",
      text: "It is possible to participate in the Referee Clinic without taking the final exam. Participation fee includes sandwich and water for lunch on Thursday and Friday. DKK 375 (= EUR 50)",
      price: "375 kr.",
      quantity: 1,
    },
    {
      title: "Referee Clinic, incl. examination",
      text: "Participation fee includes sandwich and water for lunch Thursday and Friday. DKK 525 (= EUR 70)",
      price: "525 kr.",
      quantity: 0,
    },
    {
      title: "Thursday dinner/buffet",
      text: "Drinks not included, except tap water. DKK 120 (= EUR 16)",
      price: "120 kr.",
      quantity: 0,
    },
    {
      title: "Friday breakfast",
      text: "Including drinks (Milk, juice, coffee, tea). DKK 90 (= EUR 12) (Check if your hotel includes breakfast)",
      price: "90 kr.",
      quantity: 0,
    },
    {
      title: "Friday lunch/buffet",
      text: "Drinks not included, except tap water. DKK 105 (= EUR 14)",
      price: "105 kr.",
      quantity: 0,
    },
    {
      title: "Friday Dinner/buffet",
      text: "Drinks not included, except tap water. DKK 120 (= EUR 16)",
      price: "120 kr.",
      quantity: 0,
    },
    {
      title: "Saturday breakfast",
      text: "Including drinks (Milk, juice, coffee, tea). DKK 90 (= EUR 12) (Check if your hotel includes breakfast)",
      price: "90 kr.",
      quantity: 0,
    },
    {
      title: "Saturday lunch/buffet",
      text: "Drinks not included, except tap water. DKK 105 (= EUR 14)",
      price: "105 kr.",
      quantity: 0,
    },
    {
      title: "Saturday Dinner & Party",
      text: "Drinks not included. DKK 300 (= EUR 40)",
      price: "300 kr.",
      quantity: 0,
    },
    {
      title: "Sunday breakfast",
      text: "Including drinks (Milk, juice, coffee, tea). DKK 90 (= EUR 12) (Check if your hotel includes breakfast)",
      price: "90 kr.",
      quantity: 0,
    },
    {
      title: "Sunday lunch/buffet",
      text: "Drinks not included, except tap water. DKK 105 (= EUR 14)",
      price: "105 kr.",
      quantity: 0,
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="my-4 mx-2">
        <p className="text-[18px]">SKIEF Technical Seminar - Sign Up</p>
        <p className="text-[13px]">Last sign up: September 1. 2024</p>
      </div>
      <form className="mx-2">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center my-16">
          <div className="w-full sm:basis-[41%] sm:mr-2 flex flex-col ">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="mt-2 p-2 outline-none rounded w-full"
            />
          </div>
          <div className="w-full sm:basis-[33%] sm:mr-2 flex flex-col">
            <label htmlFor="country" className="font-bold">
              Membership country
            </label>
            <input
              type="text"
              value={data.country}
              onChange={(e) => setData({ ...data, country: e.target.value })}
              className="mt-2 p-2 outline-none rounded w-full"
            />
          </div>
          <div className="w-full sm:basis-[26%] sm:mr-2 flex flex-col">
            <label htmlFor="grade" className="font-bold">
              Garde
            </label>
            <select
              value={selectedGrade} // ...force the select's value to match the state variable...
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="mt-2 outline-none p-2 rounded  w-full" // ... and update the state variable on any change!
            >
              {grades?.map((grade, index) => (
                <option value={grade}>{grade}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="my-8 grid sm:grid-cols-2 gap-2">
          {items.map((item, index) => (
            <div
              key={index + 100}
              className="flex px-2 py-8 border shadow-2xl mt-4 rounded"
            >
              <div className="basis-[60%] mr-2">
                <h1 className="font-bold mb-2">{item.title}</h1>
                <p>{item.text}</p>
              </div>
              <div className="basis-[40%]">
                <p className="font-bold mb-2">
                  <span className="mr-2">Price:</span>
                  {item.price}
                </p>
                <p>
                  <span className="mr-2">Quantity:</span>
                  {/* {item.quantity} */}
                  <input
                    type="number"
                    className="block mt-2 w-[65px] outline-none rounded p-1"
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
        <label htmlFor="email" className="font-bold">
          Email * Obligatory
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="block w-[350px] my-2 p-2 outline-none rounded"
        />
        <button
          type="submit"
          className="font-semibold mb-8 px-4 py-2 border rounded hover:text-fuchsia-50"
        >
          Send Registration & Payment
        </button>
      </form>
    </div>
  );
};

export default Signup;
