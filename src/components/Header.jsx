
import React from 'react';
import { Search, Bell, Plus } from '../data';

const HeaderNav = () => {
  return (
    <header className=" p-6 xl:pt-12 flex items-center justify-between sticky top-0 z-30">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cl-text-muted" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="pl-12 pr-4 py-2.5 rounded-xl border  w-52 md:w-[35vw] 2xl:w-[43vw] bg-white placeholder-cl-text-muted text-cl-text-primary"
        />
        <Bell className="absolute right-4 top-1/2 -translate-y-1/2 text-cl-text-muted" size={24} />
      </div>
      {/* profile Action button  */}
      <div className="flex items-center xl:pr-12 space-x-4 md:space-x-6">
        <button className="w-11 h-11 bg-cl-bar-blue rounded-lg"><img className="mt-1" src="../assets/profile.png" /></button>
        <button className="bg-cl-blue-dark text-white p-3 rounded-lg flex items-center justify-center shadow-sm">
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
};

export default HeaderNav;
