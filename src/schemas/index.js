import * as yup from "yup";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email().required("Please enter a valid email"),
  name: yup.string().required("Please enter your name"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Please enter your phone"),
  textarea: yup
    .string()
    .min(10, "cannot be less than 10")
    .max(250, "cannot be more than 250")
    .required("Please add a comment"),
  checkbox: yup.boolean().oneOf([true], "Please accept the terms of service"),
});
