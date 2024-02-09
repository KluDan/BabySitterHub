import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    formType: null,
  });

  const openModal = (formType) => {
    setModalConfig({ isOpen: true, formType });
  };

  const closeModal = () => {
    setModalConfig({ isOpen: false, formType: null });
  };

  return (
    <ModalContext.Provider value={{ modalConfig, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
