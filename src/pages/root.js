import { Outlet } from "react-router-dom";

import { Navbar, Sidebar, Footer } from "../components";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
