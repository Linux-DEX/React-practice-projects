import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Main Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h1>Main Footer</h1>
      </footer>
    </div>
  );
};

export default MainLayout;
