
import React from 'react';
import HumanBodySection from './HumanBodySection';
import ActivityGraph from './ActivityGraph';
import Calendar from './Calendar';
import AppointmentsSection from './AppointmentsSection';

const MainSection = () => {
  return (
    //Main Section Displays Whole Dashbord
    <div className="space-y-6 lg:space-y-8">
      <div className="grid grid-cols-1 xl:grid-cols-9 gap-6 lg:gap-8">
        <div className=" lg:col-span-1 xl:col-span-5 space-y-6 2xl:mb-[8vh] lg:space-y-8">
          <HumanBodySection />
          <ActivityGraph />
        </div>

        <div className="lg:col-span-1 space-y-6 xl:col-span-4 lg:space-y-8">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
