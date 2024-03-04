import React, { useState } from "react";
// https://reactdatepicker.com/
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles for the datepicker
import "../app/globals.css";

export default function CalendarFunc() {
  const [startDate, setStartDate] = useState(new Date());
  

  return (
    <>
    <p className="font-semibold text-base mb-2">Select Date</p>
    <div className="flex">
      <DatePicker
      
        showIcon
        selected={startDate}
        className="border rounded-lg cursor-pointer hover:bg-slate-100"
        onChange={(date) => setStartDate(date)}
        dateFormat="MMMM d, yyyy" // Specify the date format
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            className=" mt-[2px]"
          >
            <mask id="ipSApplication0">
              <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
                <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                <path
                  fill="#fff"
                  d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                ></path>
              </g>
            </mask>
            <path
              fill="currentColor"
              d="M0 0h48v48H0z"
              mask="url(#ipSApplication0)"
            ></path>
          </svg>
        }
        />
      <button className="bg-navyblack hover:bg-primary text-white px-2 py-1 rounded-lg text-para ml-2 capitalize">get details</button>
        </div>
    </>
  );
}