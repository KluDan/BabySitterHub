import Button from "../Button";
import { CloseBtn } from "../Form/Form.styled";

import {
  AppointmentForm,
  PopUp,
  TextBlock,
  Nanny,
  StyledTextarea,
} from "./PopUpAppointment.styled";
import PopUpInput from "./PopUpInput";

const PopUpAppointment = ({ onClose, nanny }) => {
  console.log("Nanny", nanny);
  const { name, avatar_url } = nanny;
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
      <AppointmentForm>
        <PopUpInput name="address" type="text" placeholder="Address" />
        <PopUpInput name="phone" type="tel" placeholder="+380" />
        <PopUpInput name="child_age" type="number" placeholder="Child's age" />
        <PopUpInput name="time" type="time" placeholder="00:00" />
        <PopUpInput
          name="email"
          type="email"
          placeholder="Email"
          isGridStretchRow="true"
        />
        <PopUpInput
          name="parent_name"
          type="text"
          placeholder="Father's or mother's name"
          isGridStretchRow="true"
        />
        <StyledTextarea placeholder="Comment" />
      </AppointmentForm>
      <Button title="Send" border={false} padding="14px" />
    </PopUp>
  );
};

export default PopUpAppointment;
