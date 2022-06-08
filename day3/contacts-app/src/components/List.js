import React, { useContext } from "react";
import ContactContext from "../context/ContactContext";

function List() {
  const { contacts, setContacts } = useContext(ContactContext);

  const handleDelete = (id) => {
    const cloned = [...contacts];
    const index = cloned.findIndex((item) => item.id === id);

    cloned.splice(index, 1);

    setContacts(cloned);
  };

  return (
    <div>
      <h2>Rehber</h2>

      {contacts.map((contact) => (
        <div key={contact.id}>
          {contact.name} ({contact.phoneNumber}){" "}
          <span className="delete" onClick={() => handleDelete(contact.id)}>
            x
          </span>
        </div>
      ))}
    </div>
  );
}

export default List;
