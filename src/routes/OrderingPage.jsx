import React, { useContext } from "react";
import "./styles/OrderingPage.css";
import Swal from "sweetalert2";
import { VscClose } from "react-icons/vsc";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import AnimatedPage from "../AnimatedPage";
import { CartContext } from "../CartContext";

import { useNavigate } from "react-router-dom";

const Ordering = () => {
  const navigate = useNavigate();
  const { cart, total, changeQuantity, deleteFromCart, setCart } =
    useContext(CartContext);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log("values", values);
    actions.resetForm();
    setCart([]);
    Swal.fire({
      title: "Thanks!",
      text: "Your order has been accepted!",
      icon: "success",
      confirmButtonText: "Continue shopping",
    }).then(() => navigate("/catalog"));
  };

  const {
    values,
    errors,
    handleBlur,
    isSubmitting,
    handleChange,
    touched,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      textarea: "",
      checkbox: true,
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  if (cart.length === 0)
    return (
      <div className="ordering-empty-wrapper">
        <h1 className="submenu-cont-noprod">You have no products! </h1>
      </div>
    );

  return (
    <AnimatedPage>
      <div className="ordering-wrapper">
        <div className="ordering-head">CHECKOUT</div>

        {cart.map((product) => (
          <div className="ordering-products-container" key={product.id}>
            <div className="ordering-products-left">
              <div className="ordering-products-left-img-container">
                <img
                  src={`http://localhost:3200/${product?.productImage}`}
                  alt="product item"
                />
              </div>
              <p>{product.name}</p>
            </div>
            <div className="ordering-products-right">
              <div className="ordering-products-options">
                <select>
                  <option>Size 42</option>
                  <option>Size 44</option>
                  <option>Size 46</option>
                  <option>Size 48</option>
                  <option>Size 50</option>
                </select>
              </div>
              <div className="ordering-products-quantity">
                <button
                  onClick={() => changeQuantity(product, "DEC")}
                  disabled={product.quantity < 2}
                >
                  -
                </button>
                <span> {product.quantity}</span>
                <button onClick={() => changeQuantity(product, "INC")}>
                  +
                </button>
              </div>
              <div className="ordering-products-total">
                <p>{product.price} ₽</p>
              </div>
              <div className="vscclose">
                <VscClose
                  onClick={() => deleteFromCart(product.id)}
                  className="ordering-products-delete"
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "none",
                    color: "#CAC7C7",
                  }}
                  onMouseOver={({ target }) => (target.style.color = "#E1C4A9")}
                  onMouseOut={({ target }) => (target.style.color = "#CAC7C7")}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="ordering-form-wrapper">
          <div className="ordering-form-header">MAIN INFORMATION</div>
          <div className="ordering-form">
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="form-checkout"
            >
              <input
                type="text"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name ? "input-error" : ""}
                placeholder="Enter your name"
              />
              {errors.name && touched.name && (
                <p className="error">{errors.name}</p>
              )}
              <br />
              <input
                type="tel"
                id="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? "input-error" : ""}
                placeholder="Enter your phone"
              />
              {errors.phone && touched.phone && (
                <p className="error">{errors.phone}</p>
              )}
              <br />
              <input
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
                placeholder="Enter your e-mail"
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
              <br />
              <textarea
                name="textarea"
                rows="6"
                cols="71"
                value={values.textarea}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.textarea && touched.textarea ? "input-error" : ""
                }
                placeholder="Add comment"
              ></textarea>
              {errors.textarea && touched.textarea && (
                <p className="error">{errors.textarea}</p>
              )}
              <span>
                <input
                  type="checkbox"
                  name="checkbox"
                  checked
                  id="check"
                  className={
                    errors.checkbox && touched.checkbox ? "input-error" : ""
                  }
                  value={values.checkbox}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                I accept the public offer agreement
              </span>
              {errors.checkbox && touched.checkbox && (
                <p className="error">{errors.checkbox}</p>
              )}

              <div className="total-amount-form">
                <p>Total:</p>
                <p>{total} ₽</p>
              </div>
              <button
                disabled={isSubmitting}
                className="order-form-btn"
                type="submit"
                value="Submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Ordering;
