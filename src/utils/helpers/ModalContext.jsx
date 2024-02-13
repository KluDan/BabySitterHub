import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    formType: null,
    selectedNanny: null,
  });

  const openModal = (formType, selectedNanny) => {
    setModalConfig({ isOpen: true, formType, selectedNanny });
  };

  const closeModal = () => {
    setModalConfig({ isOpen: false, formType: null, selectedNanny: null });
  };

  return (
    <ModalContext.Provider value={{ modalConfig, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
