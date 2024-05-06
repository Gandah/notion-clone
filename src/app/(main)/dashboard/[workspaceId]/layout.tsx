import MobileSideBar from '@/components/siderbars/mobile-sidebar';
import SideBar from '@/components/siderbars/siderbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout: React.FC<LayoutProps> = ({ children, params }) => {
  return (
    <main
      className="flex overflow-hidden
      h-screen
      w-screen
  "
    >
      <SideBar params={params} />
      <MobileSideBar>
        <SideBar
          params={params}
          className="w-screen inline-block sm:hidden"
        />
      </MobileSideBar>
      <div
        className="dark:boder-Neutrals-12/70
        border-l-[1px]
        w-full
        relative
        overflow-scroll
      "
      >
        {children}
      </div>
    </main>
  );
};

export default Layout;