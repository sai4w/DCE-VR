import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
