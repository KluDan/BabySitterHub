import { useFormik } from "formik";
import { useState } from "react";
import { appointmentSchema } from "../../utils/schemes/appointmentSchema";
import Button from "../Button";
import { CloseBtn } from "../Form/Form.styled";
import { InputError } from "../FormInput/FormInput.styled";

import {
  AppointmentForm,
  PopUp,
  TextBlock,
  Nanny,
  StyledTextarea,
  SuccessMessage,
} from "./PopUpAppointment.styled";
import PopUpInput from "./PopUpInput";

const PopUpAppointment = ({ onClose, nanny }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { name, avatar_url } = nanny;
  const handleClick = (
    address,
    phone,
    child_age,
    time,
    email,
    parent_name,
    comment
  ) => {
    console.log(
      "Form values:",
      address,
      phone,
      child_age,
      time,
      email,
      parent_name,
      comment
    );
  };

  const formik = useFormik({
    initialValues: {
      address: "",
      phone: "",
      child_age: "",
      time: "",
      email: "",
      parent_name: "",
      comment: "",
    },
    onSubmit: () => {
      console.log("Form submitted");
      handleClick(
        formik.values.address,
        formik.values.phone,
        formik.values.child_age,
        formik.values.time,
        formik.values.email,
        formik.values.parent_name,
        formik.values.comment
      );

      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    },
    validationSchema: appointmentSchema,
  });

  return (
    <PopUp>
      <CloseBtn onClick={onClose} />
      <TextBlock>
        <h3>Make an appointment with a babysitter</h3>
        <p>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
        </p>
      </TextBlock>
      <Nanny>
        <img src={avatar_url} alt="Portrait of the babysitter" />
        <div>
          <span>Your nanny</span>
          <h4>{name}</h4>
        </div>
      </Nanny>
      <AppointmentForm onSubmit={formik.handleSubmit}>
        <PopUpInput
          value={formik.values.address}
          name="address"
          type="text"
          placeholder="Address"
          onChange={formik.handleChange}
          formik={formik}
        />
        <PopUpInput
          value={formik.values.phone}
          name="phone"
          type="tel"
          placeholder="+380"
          onChange={formik.handleChange}
          formik={formik}
        />
        <PopUpInput
          value={formik.values.child_age}
          name="child_age"
          type="number"
          placeholder="Child's age"
          onChange={formik.handleChange}
          formik={formik}
        />
        <PopUpInput
          value={formik.values.time}
          name="time"
          type="time"
          placeholder="00:00"
          onChange={formik.handleChange}
          formik={formik}
        />
        <PopUpInput
          value={formik.values.email}
          name="email"
          type="email"
          placeholder="Email"
          isGridStretchRow="true"
          onChange={formik.handleChange}
          formik={formik}
        />
        <PopUpInput
          value={formik.values.parent_name}
          name="parent_name"
          type="text"
          placeholder="Father's or mother's name"
          isGridStretchRow="true"
          onChange={formik.handleChange}
          formik={formik}
        />
        <>
          <StyledTextarea
            value={formik.values.comment}
            name="comment"
            placeholder="Comment"
            onChange={formik.handleChange}
          />
          {formik.touched.comment && formik.errors.comment && (
            <InputError>{formik.errors.comment}</InputError>
          )}
        </>
        {isSubmitted ? (
          <SuccessMessage>
            Your application has been successfully submitted. Please await
            confirmation via email.
          </SuccessMessage>
        ) : (
          <Button title="Send" border={false} padding="14px" type="submit" />
        )}
      </AppointmentForm>
    </PopUp>
  );
};

export default PopUpAppointment;
