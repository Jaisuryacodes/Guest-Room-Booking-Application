import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Content from "../page/customer/components/Content";
import CustomerMenu from "../page/customer/components/CustomerMenu";
const Customerpage = () => {
  return (
    <>
      <CustomerMenu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Customerpage;
