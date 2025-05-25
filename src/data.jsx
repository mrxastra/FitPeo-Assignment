import React from "react";
import {
  LayoutGrid,
  ArrowUpDown,
  CalendarDays,
  PlusSquare,
  ChartSpline,
  MessageCircle,
  Phone,
  Settings,
  Search,
  Bell,
  Plus,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ArrowRight,
} from "lucide-react";

const defaultIconProps = { size: 20, strokeWidth: 1.5 };
const navIconProps = {
  ...defaultIconProps,
  className: "text-cl-text-secondary group-hover:text-cl-blue",
};
const activeNavIconProps = { ...defaultIconProps, className: "text-cl-blue" };

//All options of side nav General

export const SideNavTopData = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <LayoutGrid {...activeNavIconProps} />,
    active: true,
  },
  { id: "history", label: "History", icon: <ArrowUpDown {...navIconProps} /> },
  {
    id: "calendar",
    label: "Calendar",
    icon: <CalendarDays {...navIconProps} />,
  },
  {
    id: "appointments",
    label: "Appointments",
    icon: <PlusSquare {...navIconProps} />,
  },
  {
    id: "statistics",
    label: "Statistics",
    icon: <ChartSpline {...navIconProps} />,
  },
];

// tools in side nav
export const SideNavData = [
  { id: "chat", label: "Chat", icon: <MessageCircle {...navIconProps} /> },
  { id: "support", label: "Support", icon: <Phone {...navIconProps} /> },
];

//bottom side nav
export const SideNavDownData = [
  { id: "setting", label: "Setting", icon: <Settings {...navIconProps} /> },
];

export const HumanModelPath = "./humanBody.png";


//Health Card data of Lungs teeth and bones
export const HealthData = [
  {
    id: "lungs",
    title: "Lungs",
    icon: <img src="./lungs.png" />,
    date: "Date: 26 Oct 2021",
    progress: 80,
    progressColor: "bg-cl-red",
  },
  {
    id: "teeth",
    title: "Teeth",
    icon: <img src="./teeth.png" />,
    date: "Date: 26 Oct 2021",
    progress: 80,
    progressColor: "bg-cl-green",
  },
  {
    id: "bone",
    title: "Bone",
    icon: <img src="./bone.png" />,
    date: "Date: 26 Oct 2021",
    progress: 80,
    progressColor: "bg-cl-orange",
  },
];

//In activity the arry represent 6 values [top bar,bottom bar,margin at the bottom, space between 2 verticle line, color of top bar, color of bottom bar]
export const ActivityGraphData = [
  {
    name: "Mon",
    uv: [
      [60, 60, 0, 0, 0, 0],
      [25, 40, 28, 0, 1, 1],
      [25, 25, 20, 5, 0, 0],
      [20, 20, 0, 0, 0, 0],
    ],
  },
  {
    name: "Tues",
    uv: [
      [60, 60, 0, 5, 1, 2],
      [25, 40, 28, 0, 2, 2],
      [25, 25, 20, 5, 0, 0],
      [20, 20, 0, 0, 1, 1],
    ],
  },
  {
    name: "Wed",
    uv: [
      [60, 60, 0, 0, 0, 0],
      [25, 40, 28, 0, 0, 0],
      [25, 25, 20, 5, 1, 2],
      [20, 20, 0, 0, 2, 2],
    ],
  },
  {
    name: "Thurs",
    uv: [
      [60, 60, 0, 5, 0, 0],
      [25, 40, 28, 0, 1, 1],
      [25, 25, 20, 5, 1, 2],
      [20, 20, 0, 0, 0, 0],
    ],
  },
  {
    name: "Fri",
    uv: [
      [60, 60, 0, 0, 0, 0],
      [25, 40, 28, 0, 2, 2],
      [25, 25, 20, 5, 0, 0],
      [20, 20, 0, 0, 0, 0],
    ],
  },
  {
    name: "Sat",
    uv: [
      [60, 60, 0, 5, 1, 2],
      [25, 40, 28, 0, 1, 1],
      [25, 25, 20, 5, 0, 0],
      [20, 20, 0, 0, 2, 2],
    ],
  },
  {
    name: "Sun",
    uv: [
      [60, 60, 0, 0, 0, 0],
      [25, 40, 28, 0, 0, 0],
      [25, 25, 20, 5, 1, 2],
      [20, 20, 0, 0, 2, 2],
    ],
  },
  {
    name: ":",
    uv: [
      [60, 60, 0, 5, 0, 0],
      [25, 40, 28, 0, 1, 1],
      [25, 25, 20, 5, 0, 0],
      [20, 20, 0, 0, 2, 2],
    ],
  },
];

const createTimeSlotsForDay = (dayTimes, bookedTimes = {}) => {
  return dayTimes.map((time) => ({
    time,
    booked: !!bookedTimes[time],
    bookedColor: bookedTimes[time]?.color || undefined,
    isCurrent: bookedTimes[time]?.type === "current",
  }));
};

const ALL_DAY_TIMES = [
  ["10:00", "11:00", "12:00", "13:00", "14:00"],
  ["08:00", "09:00", "10:00", "11:30", "12:30"],
  ["12:00", "___", "13:00", "14:00", "15:00", "16:00"],
  ["10:00", "11:00", "___", "13:00", "14:00", "15:00"],
  ["___", "14:00", "16:00"],
  ["12:00", "14:00", "15:00"],
  ["09:00", "10:00", "11:00", "12:00", "16:00"],
];

export const CalendarData = [
  {
    dayName: "Mon",
    dateNumber: "25",
    slots: createTimeSlotsForDay(ALL_DAY_TIMES[0]),
  },
  {
    dayName: "Tues",
    dateNumber: "26",
    isToday: false,
    hasEvent: true,
    slots: createTimeSlotsForDay(ALL_DAY_TIMES[1], {
      "09:00": {
        color: "bg-cl-calendar-event-dark text-white font-medium",
        type: "booked",
      },
    }),
  },
  {
    dayName: "Wed",
    dateNumber: "27",
    slots: createTimeSlotsForDay(ALL_DAY_TIMES[2]),
  },
  {
    dayName: "Thurs",
    dateNumber: "28",
    hasEvent: true,
    slots: createTimeSlotsForDay(ALL_DAY_TIMES[3], {
      "11:00": {
        color: "bg-cl-calendar-blue text-white font-medium",
        type: "booked",
      },
    }),
  },
  {
    dayName: "Fri",
    dateNumber: "29",
    slots: createTimeSlotsForDay(ALL_DAY_TIMES[4]),
  },
  {
    dayName: "Sat",
    dateNumber: "30",
    hasEvent: true,
    slots: createTimeSlotsForDay(ALL_DAY_TIMES[5], {
      "12:00": {
        color: "bg-cl-calendar-blue text-white font-medium",
        type: "booked",
        extra: "pr-[50px]",
      },
    }),
  },
  {
    dayName: "Sun",
    dateNumber: "31",
    hasEvent: true,
    slots: createTimeSlotsForDay(ALL_DAY_TIMES[6], {
      "09:00": {
        color: "bg-cl-calendar-blue text-white font-medium",
        type: "booked",
        extra: "pl-[50px]",
      },
    }),
  },
];

export const AppointmentData = [
  {
    id: "dentist",
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    width: "w-auto",
    icon: <p className="text-xl">🦷</p>,
    BgColor: "bg-cl-blue-dark",
    TextColor: "text-white",
  },
  {
    id: "physio",
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    width: "w-300px",
    icon: <p className="text-xl">💪</p>,
    BgColor: "bg-cl-blue-medium",
    TextColor: "text-cl-blue-dark",
  },
];

export const UpcomingScheduleData = [
  {
    id: "thursday",
    day: "On Thursday",
    items: [
      {
        id: "health-check",
        title: "Health checkup complete",
        time: "11:00 AM",
        BgColor: "bg-cl-blue-medium",
        icon: <p className="text-xl">💉</p>,
      },
      {
        id: "ophthalmologist",
        title: "Ophthalmologist",
        time: "14:00 PM",
        BgColor: "bg-cl-blue-medium",
        icon: <p className="text-xl">👁️ </p>,
      },
    ],
  },
  {
    id: "saturday",
    day: "On Saturday",
    items: [
      {
        id: "cardiologist",
        title: "Cardiologist",
        time: "12:00 AM",
        BgColor: "bg-cl-blue-medium",
        icon: <p className="text-xl">❤️ </p>,
      },
      {
        id: "neurologist",
        title: "Neurologist",
        time: "16:00 PM",
        BgColor: "bg-cl-blue-medium",
        icon: <p className="text-xl">👨‍⚕️ </p>,
      },
    ],
  },
];

export {
  LayoutGrid,
  ArrowUpDown,
  CalendarDays,
  PlusSquare,
  ChartSpline,
  MessageCircle,
  Phone,
  Settings,
  Search,
  Bell,
  Plus,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ArrowRight,
};
