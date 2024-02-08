import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import MainPageImg from "../../assets/images/MainPageImg.jpg";
import GetStartedArrow from "../../assets/icons/arrow.svg?react";

import {
  InfoBlock,
  HeroTitle,
  HeroText,
  MediaBlock,
  HeroBtn,
  StyledHeroMain,
} from "./Hero.styled";
import CardExperiencedNannies from "../CardExperiencedNannies";

const Hero = ({ children }) => {
  return (
    <StyledHeroMain>
      <InfoBlock>
        <HeroTitle>Make Life Easier for the Family:</HeroTitle>
        <HeroText>Find Babysitters Online for All Occasions</HeroText>
        <HeroBtn>
          Get started
          <GetStartedArrow />
        </HeroBtn>
      </InfoBlock>
      <MediaBlock>
        <img src={MainPageImg} />
      </MediaBlock>
      <CardExperiencedNannies />
    </StyledHeroMain>
  );
};

export default Hero;
