import { useState, useEffect } from "react";
import { styled } from "styled-components";
import Vector from "../assets/icons/vector.svg?react";

const calculateRightPosition = () => {
  const windowWidth = window.innerWidth;
  const containerWidth = 1184;
  const rightMargin = (windowWidth - containerWidth) / 2;
  return rightMargin;
};

const StyledButton = styled.button`
  position: fixed;
  bottom: 60px;
  right: ${calculateRightPosition()}px;
  z-index: 999;
  border-radius: 50%;
  border: none;
  background-color: rgba(16, 57, 49, 0.5);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    right: 20px;
    bottom: 20px;
    width: 40px;
    height: 40px;
  }
`;

const StyledVector = styled(Vector)`
  width: 24px;
  height: 24px;
  transform: rotate(180deg);
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showScrollButton && (
        <StyledButton onClick={handleScrollToTop}>
          <StyledVector />
        </StyledButton>
      )}
    </>
  );
};

export default ScrollToTopButton;
