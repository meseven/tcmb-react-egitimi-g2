import React, { createContext, useState } from "react";

const ContactContext = createContext();

export const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Mehmet Seven", phoneNumber: "+9000000000" },
    { id: 2, name: "Ahmet Vural", phoneNumber: "+9000000012" },
  ]);

  const values = {
    contacts,
    setContacts,
  };

  return (
    <ContactContext.Provider value={values}>{children}</ContactContext.Provider>
  );
};

export default ContactContext;
