import React, { useContext, useState } from "react";
import ContactContext from "../context/ContactContext";

function Form() {
  const { setContacts } = useContext(ContactContext);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    setContacts((prev) => [
      ...prev,
      {
        id: prev[prev.length - 1] ? prev[prev.length - 1].id + 1 : 1,
        name,
        phoneNumber,
      },
    ]);
    setName("");
    setPhoneNumber("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="İsim"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        placeholder="Telefon numarası"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <button type="submit">Kaydet</button>
    </form>
  );
}

export default Form;
