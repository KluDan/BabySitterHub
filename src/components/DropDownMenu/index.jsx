import { useState } from "react";
import Vector from "../../assets/icons/vector.svg?react";
import {
  DropdownButton,
  DropdownContainer,
  DropdownList,
  DropdownListItem,
} from "./DropDownMenu.styled";

const CustomDropdown = ({ onSelect }) => {
  const options = [
    { label: "A to Z", value: "a-z" },
    { label: "Z to A", value: "z-a" },
    { label: "Price: Low to High", value: "asc" },
    { label: "Price: High to Low", value: "desc" },
    { label: "Popular", value: "popular" },
    { label: "Not popular", value: "not-popular" },
    { label: "Show all", value: "show-all" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[6] || null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
    setIsRotated(!isRotated);
  };

  return (
    <DropdownContainer>
      <label htmlFor="filters">Filters</label>
      <DropdownButton onClick={handleToggle} id="filters">
        {selectedOption.label || "Select an option"}
        <Vector
          style={{ transform: isRotated ? "rotate(180deg)" : "rotate(0)" }}
        />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownListItem
              key={index}
              onClick={() => handleOptionClick(option)}
              selected={selectedOption && option.value === selectedOption.value}
            >
              {option.label}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default CustomDropdown;
