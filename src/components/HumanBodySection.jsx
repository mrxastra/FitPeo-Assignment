
import React from 'react';
import { HealthData, HumanModelPath, ZoomIn, ArrowRight } from '../data';
import ModelViewer from './ModelViewer';


const HealthStatusCard = ({ stat }) => (
  <div className="bg-cl-background-light p-5 rounded-xl 2xl:rounded-3xl shadow-card flex items-center lg:ml-4 space-x-4">
    <div className="flex-grow">
      <div className="flex">

        <div className={`p-2 rounded-lg w-[50px] h-[50px]`}>
          {stat.icon}
        </div>
        <div className="flex p-2 justify-between items-center">
          <h4 className="font-semibold text-cl-text-primary text-sm">{stat.title}</h4>
        </div>
      </div>
      <p className="text-xs text-cl-text-muted mt-2">{stat.date}</p>
      <div className="w-full bg-gray-200 my-2 rounded-full h-1.5">
        <div
          className={`${stat.progressColor} h-1.5 rounded-full`}
          style={{ width: `${stat.progress}%` }}
        ></div>
      </div>
    </div>
  </div>
);

const HumanBodySection = () => {
  const yourGltfFilePath = './model.glb';
  return (
    <div className="bg-cl-card-bg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-cl-text-primary">Dashboard</h2>
        <div className="flex items-center space-x-2 text-sm text-cl-text-secondary cursor-pointer hover:text-cl-blue">
          <span>This Week</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
        {/* Human Body Image Section */}
        <div className="md:col-span-5 bg-cl-background-light p-6 rounded-xl 2xl:rounded-3xl flex justify-center items-center relative min-h-[380px] md:min-h-[460px]">
          <div className="relative">

            {/* <img
            src={HumanModelPath}
            alt="Human Anatomy"
            className="max-h-[300px] md:max-h-[420px] object-contain"
            /> */}

            {/* 3D model view container */}
            <div
              className="max-h-[320px] md:max-h-[420px] object-contain"
            >
              <ModelViewer modelPath={yourGltfFilePath} />
            </div>
              <img className="rotate-180 ml-8 mt-4 w-[80%] h-[8%]" src='../../long-arrow.png'/>
            {/* <img src="../scan.png" className="absolute top-[5vw] right-[3vw] border-2 border-black w-10 h-10" /> */}
          </div>
          <button className="absolute top-4 right-4 p-2  bg-cl-background-light rounded-full hover:bg-gray-100 " aria-label="Zoom in">
            <ZoomIn size={22} className="text-cl-text-secondary" />
          </button>


              {/* Health status on 3d model  */}
          <div className="absolute top-[25%] right-[20%] md:top-[30%] md:right-[22%] transform translate-x-1/2 -translate-y-1/2">
            <div className="bg-cl-blue-dark text-white text-xs font-medium px-3 py-1 max-sm:py-[2px] rounded-xl shadow-lg flex items-center space-x-1.5 whitespace-nowrap">
              <span className="p-[0px] text-lg max-md:text-sm">❤️</span>
              <span>Healthy Heart</span>
            </div>
          </div>

          <div className="absolute bottom-[20%] left-[25%] md:left-[30%] transform -translate-x-1/2 translate-y-1/2">
            <div className="bg-cl-bar-blue text-cl-blue-dark text-xs font-medium px-3 py-1 max-sm:py-[2px] rounded-xl shadow-lg flex items-center space-x-1.5 whitespace-nowrap">
              <span className="p-[0px] text-lg max-md:text-sm">🦵</span>
              <span>Healthy Leg</span>
            </div>
          </div>
        </div>

        {/* Health status column */}
        <div className="md:col-span-4 w-[80%] max-md:w-[100%] justify-self-center space-y-4">
          {HealthData.map(stat => (
            < HealthStatusCard key={stat.id} stat={stat} />
          ))}
          <a href="#" className="mt-4 text-sm text-cl-blue hover:underline font-medium flex items-center justify-end">
            Details <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HumanBodySection;
