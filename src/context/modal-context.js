import React, { useState } from "react";
export const ModalContext = React.createContext({
  isModalOpen: false,
  openModalHandler: function () {},
  closeModalHandler: function () {},
  toggleModalHandler: function () {},
});

function ModalContextProvider(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalHandler = function () {
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
  };
  const closeModalHandler = function (e) {
    document.body.style.overflow = "unset";
    setIsModalOpen(false);
  };
  const toggleModalHandler = function (e) {
    if (e.target.closest("button").dataset.modal === "true") {
      document.body.style.overflow = "unset";
    }
    if (e.target.closest("button").dataset.modal === "false") {
      document.body.style.overflow = "hidden";
    }
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModalHandler,
        closeModalHandler,
        toggleModalHandler,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
