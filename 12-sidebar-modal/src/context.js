import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebar, setIsSideBar] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const openSidebar = () => {
    setIsSideBar(true);
  };

  const closeSidebar = () => {
    setIsSideBar(false);
  };

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        openModal,
        closeModal,
        closeSidebar,
        isModal,
        isSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
