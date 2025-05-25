
import React from 'react';
import SideNav from './components/SideNav';
import Header from './components/Header';
import MainSection from './components/MainSection';

const App = () => {
  return (
    <div className="flex h-screen bg-cl-bg-main font-sans antialiased">
      <SideNav />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto max-xl:p-6 xl:p-0">
          <MainSection />
        </main>
      </div>
    </div>
  );
};

export default App;
