import React from "react";
import AnimatedPage from "../AnimatedPage";
import ShowRoom from "../pages/ShowRoom";
import ShowRoomForm from "../pages/ShowRoomForm";

const ShowRoomPage = () => {
  return (
    <AnimatedPage>
      <div>
        <ShowRoom />
        <ShowRoomForm />
      </div>
    </AnimatedPage>
  );
};

export default ShowRoomPage;
