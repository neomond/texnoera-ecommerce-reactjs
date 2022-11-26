import React from "react";
import Swal from "sweetalert2";
import "./ShowRoomForm.css";
import "../routes/styles/OrderingPage.css";
import showroomFormImg from "../assets/showroom-formImg.png";
import { useForm } from "react-hook-form";

const ShowRoomForm = () => {
  // React hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required" },
    phone: { required: "phone is required" },
    time: { required: "time is required" },
  };

  // Sweet alert messages
  const successFormAlert = () => {
    Swal.fire({
      title: "Thanks!",
      text: "Your data has been sent",
      icon: "success",
    });
  };
  return (
    <>
      <div className="showroom-form-wrapper">
        <div className="showroom-form-logo">
          <img src={showroomFormImg} alt="" />
        </div>
        <div className="showroom-form-header">SIGN UP FOR A SHOWROOM</div>
        <div className="showroom-form">
          <form
            autoComplete="off"
            onSubmit={handleSubmit(handleRegistration, handleError)}
          >
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", registerOptions.name)}
              placeholder="Enter your first name"
            />
            {errors?.name && errors.name.message}

            <input
              type="tel"
              id="phone"
              name="phone"
              {...register("phone", registerOptions.phone)}
              placeholder="Enter your phone"
            />

            <input
              type="text"
              id="time"
              name="time"
              {...register("time", registerOptions.time)}
              placeholder="Enter appropriate time"
            />

            <textarea
              id="textareaa"
              name="textareaa"
              rows="6"
              cols="71"
              placeholder="Add comment"
            ></textarea>

            <button
              onClick={successFormAlert}
              className="btn-submit"
              type="button"
              value="Submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShowRoomForm;
