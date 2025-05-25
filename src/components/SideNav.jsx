
import React from 'react';
import { SideNavTopData, SideNavData, SideNavDownData } from '../data';

const SideNavItem = ({ item }) => {
  return (
    <a
      href="#"
      className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg group  duration-150 ${item.active ? ' text-cl-blue-dark' : 'text-cl-text-secondary hover:bg-cl-background-light hover:text-cl-blue'
        }`}
      aria-current={item.active ? 'page' : undefined}
    >
      {item.icon && React.cloneElement(item.icon, {
        className: ``,
        size: 20
      })}
      <span className={`font-semibold font text-sm`}>{item.label}</span>
    </a>
  );
};

const SideNav = () => {
  return (
    // Name of the website 
    <aside className=" max-sm:hidden max-xl:w-62 xl:mr-3 xl:w-64 bg-cl-bg-sidebar p-6 xl:pt-14 flex flex-col shadow-lg flex-shrink-0 h-full">
      <div className="text-3xl font-bold text-cl-bar-blue mb-12">
        Health<span className="text-cl-blue-dark">care.</span>
      </div>
    {/* General option of side bar  */}
      <nav className="flex-grow flex flex-col">
        <div className="mb-8">
          <h3 className="text-sm text-cl-text-muted  mb-3 px-4">General</h3>
          <ul className="space-y-1.5">
            {SideNavTopData.map((item) => (
              <li key={item.id}>
                <SideNavItem item={item} />
              </li>
            ))}
          </ul>
        </div>
            {/* tools of side bar  */}
        <div className="mb-auto">
          <h3 className="text-sm text-cl-text-muted  mb-3 px-4">Tools</h3>
          <ul className="space-y-1.5">
            {SideNavData.map((item) => (
              <li key={item.id}>
                <SideNavItem item={item} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="space-y-1.5">
            {SideNavDownData.map((item) => (
              <li key={item.id}>
                <SideNavItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
