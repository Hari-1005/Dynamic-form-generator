import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="h-screen flex flex-col md:flex-row">{children}</div>;
};

export default Layout;
