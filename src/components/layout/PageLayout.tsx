import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({
  children = <div className="p-8 text-center">Page content goes here</div>,
}: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar will be imported and used here once it's created */}
      <header>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="text-center">Navbar Placeholder</div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      {/* Footer will be imported and used here once it's created */}
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Footer Placeholder</div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
