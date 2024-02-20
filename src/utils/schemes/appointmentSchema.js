import * as Yup from "yup";

export const appointmentSchema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\+?[0-9\s]+$/, "Invalid phone number")
    .min(12, "Phone must be at least 12 characters")
    .max(13, "Phone must be max 13 characters"),
  child_age: Yup.number()
    .integer("Child age must be an integer")
    .min(0, "Child age must be a positive number")
    .max(18, "Child age must be max 18")
    .required("Child age is required"),
  time: Yup.string().required("Time is required"),
  email: Yup.string()
    .email("Invalid email address")
    .test(
      "email-format",
      "Email should contain '@' and a valid domain",
      (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      }
    )
    .required("Email is required"),
  parent_name: Yup.string().required("Parent's name is required").min(2),
  comment: Yup.string().required("Comment is required"),
});
