import React from "react";
import { AppointmentData, UpcomingScheduleData } from "../data";

const AppointmentCard = ({ appointment }) => (
  <div
    className={`p-6 rounded-[30px] shadow-card ${appointment.BgColor} ${appointment.TextColor} ${appointment.width}`}
  >
    <div className="flex justify-between items-start">
      <div>
        <h4 className="font-semibold text-sm my-3 md:mr-8">{appointment.title}</h4>
        <p className="text-xs">{appointment.time}</p>
        <p className="text-xs mt-0.5">{appointment.doctor}</p>
      </div>
      <div className={`p-1.5 rounded-lg`}>{appointment.icon}</div>
    </div>
  </div>
);

const UpcomingScheduleCard = ({ item }) => (
  <div
    className={`p-4 rounded-[25px] shadow-card ${item.BgColor} ${item.TextColor} ${item.width}`}
  >
    <div className="flex justify-between items-start">
      <div className="p-2">
        <h4 className="font-semibold text-sm my-2">{item.title}</h4>
        <p className="text-xs">{item.time}</p>
      </div>
      <div className={`p-1.5 rounded-lg`}>{item.icon}</div>
    </div>
  </div>
);

const AppointmentsSection = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:flex gap-4">
        {AppointmentData.map((appt) => (
          <AppointmentCard key={appt.id} appointment={appt} />
        ))}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-cl-text-primary mb-3">
          The Upcoming Schedule
        </h3>
        <div className="space-y-4">
          {UpcomingScheduleData.map((group) => (
            <div key={group.id}>
              <h4 className="text-md font-medium text-cl-text-secondary lg:mt-7 lg:mb-4 my-2">
                {group.day}
              </h4>
              <div className="grid grid-cols-1 sm:flex gap-4">
                {group.items.map((item) => (
                  <UpcomingScheduleCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsSection;
