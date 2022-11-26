import React from "react";
import AnimatedPage from "../AnimatedPage";
import AboutBrand from "../pages/AboutBrand";
import Categories from "../pages/Categories";
import Celebrities from "../pages/Celebrities";
import Customers from "../pages/Customers";
import Header from "../pages/Header";
import ShowRoom from "../pages/ShowRoom";
import ShowRoomForm from "../pages/ShowRoomForm";

const MainPage = () => {
  return (
    <div>
      <AnimatedPage>
        <Header />
        <Categories />
        <AboutBrand />
        <ShowRoom />
        <ShowRoomForm />
        <Customers />
        <Celebrities />
      </AnimatedPage>
    </div>
  );
};

export default MainPage;
