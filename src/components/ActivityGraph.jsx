import React from "react";
import { ActivityGraphData } from "../data";

const ActivityGraph = () => {
  return (
    <div className="bg-cl-background-light p-6 xl:ml-6 rounded-2xl shadow-card-lg">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-lg font-semibold text-cl-text-primary">Activity</h3>
        <span className="text-xs text-cl-text-muted">
          3 appointment on this week
        </span>
      </div>

      <div className="mt-4 h-42 min-w-fit grid grid-cols-8 items-end justify-around space-x-2 px-2">
        {ActivityGraphData.map((item) => (
          <div
            key={item.name}
            className="flex flex-col col-span-1 items-center"
          >
            <div className="flex w-full items-end justify-around h-full">
              {item.uv.map((val, index) => (
                <div key={index} className="md:w-1 w-[3px] "> 
                {/* top bar of the graph */}
                  <div
                    className={`bg-${val[4] === 0
                        ? "cl-bar-grey"
                        : val[4] === 1
                          ? "cl-bar-blue"
                          : "cl-bar-dark"
                      } h-[${val[0]}px]`}
                  ></div>
                  {/* space between 2 vertical bars */}
                  <div
                    className={`h-[${val[3]}px] w-full rounded-t-full`}
                  ></div>
                  {/* bottom bar of the graph */}
                  <div
                    className={`bg-${val[5] === 0
                        ? "cl-bar-grey"
                        : val[5] === 1
                          ? "cl-bar-blue"
                          : "cl-bar-dark"
                      } h-[${val[1]}px] rounded-b-full mb-[${val[2]}px]`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Day Name of whole week */}
      <div className="flex justify-around w-[100%]">
        {ActivityGraphData.slice(0, 7).map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <span className="mt-2 place-items-end text-xs text-cl-text-muted">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityGraph;
