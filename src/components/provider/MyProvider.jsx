import React, { createContext, useState, useContext } from "react";
import localStorageHelper from "../../helpers/localStorageHelper";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [chanelName, setChanelName] = useState(
    localStorageHelper.localStorageHelper.getItem("conversions")?.length > 0
      ? localStorageHelper.localStorageHelper.getItem("conversions")[0]
          ?.parts[0]?.text
      : ""
  );

  return (
    <MyContext.Provider value={{ chanelName, setChanelName }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { MyProvider, useMyContext };
