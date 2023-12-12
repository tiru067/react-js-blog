import React from "react";
import Header from "./Pages/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ search, setSearch }) => {
  return (
    <div className="App">
      <Header title={"React Blog JS"} />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
