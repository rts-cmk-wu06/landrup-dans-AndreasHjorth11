import React, { useState, createContext } from "react";

export const formContext = createContext({
  username: "",
  password: "",
});

const FormProvider = ({ children }) => {
  const [formdata, setFormdata] = useState({});

  return (
    <formContext.Provider value={{ formdata, setFormdata }}>
      {children}
    </formContext.Provider>
  );
};

export default FormProvider;