import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Auth Header</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
