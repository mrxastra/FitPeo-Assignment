import AppointmentsSection from "./AppointmentsSection";
import React from "react";
import {
  CalendarData,
  ChevronLeft,
  ChevronRight,
} from "../data";

const TimeSlot = ({ slot }) => {
  let slotClasses =
    "h-8 md:h-8 min-w-full flex items-center justify-center max-sm:rounded-md rounded-[10px] text-xs";
  if (slot.booked) {
    slotClasses += ` ${slot.bookedColor || "bg-cl-calendar-event text-white"}`;
  }
  return (
    <div className={`${slotClasses} relative`}>
      {slot.time.substring(0, 5)}
      {slot.bookedColor === "bg-cl-calendar-blue text-white font-medium" ? (
        <div className="bg-white p-[0.3vh] absolute bottom-1 rounded-full"></div>
      ) : (
        <></>
      )}
    </div>
  );
};

const DayColumn = ({ day }) => {
  const selected = day.dayName === "Tues";
  return (
    // displayin day name and date 
    <div
      className={`flex flex-col xl:w-[120%] lg:p-4 lg:w-[80%] items-center space-y-2 2xl:space-y-3 xl:p-2  py-4 rounded-xl ${selected ? "bg-[#ecf3fe] shadow-md" : ""
        }`}
    >
      <span
        className={`text-xs font-medium ${selected ? "text-cl-blue" : "text-cl-text-secondary"
          }`}
      >
        {day.dayName}
      </span>
      <span
        className={`text-lg font-semibold ${selected ? "text-cl-blue" : "text-cl-text-primary"
          }`}
      >
        {day.dateNumber}
      </span>
      {/* displaying time of day */}
      <div className="space-y-0.5 w-full">
        {day.slots.slice(0, 3).map((slot, index) => (
          <TimeSlot key={index} slot={slot} />
        ))}
      </div>
    </div>
  );
};

const Calendar = () => {
  return (
    <div className="bg-cl-background-light p-5 xl:pt-[15vh] overflow-y-auto xl:absolute top-0 rounded-2xl shadow-card-lg h-full 2xl:w-[37vw]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-semibold text-cl-text-primary">
          October 2021
        </h3>
        <div className="flex space-x-2 2xl:mr-2">
          <button
            className="p-1.5 rounded-md hover:bg-gray-100 text-cl-text-secondary hover:text-cl-blue "
            aria-label="Previous month"
          >
            {/* <ChevronLeft size={18} /> */}
            <img className="rotate-180" src="../assets/arrow.png" />
          </button>
          <button
            className="p-1.5 rounded-md hover:bg-gray-100 text-cl-text-secondary hover:text-cl-blue "
            aria-label="Next month"
          >
            <img src="../assets/arrow.png" />
            {/* <ChevronRight size={18} /> */}
          </button>
        </div>
      </div>
      {/* Displayin 7 colums of calendar  */}
      <div className="grid grid-cols-7 gap-1 lg:pr-10  md:gap-1.5">
        {CalendarData.map((dayData) => (
          <DayColumn key={dayData.dayName} day={dayData} />
        ))}
      </div>
      <div className="mt-12 2xl:mr-12">
        <AppointmentsSection />
      </div>
    </div>
  );
};

export default Calendar;
