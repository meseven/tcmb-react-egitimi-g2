import React from "react";
// import Paragraph from "./components/Paragraph";
import User from "./components/User";

function App() {
  return (
    <div>
      {/* <Paragraph text="Merhaba" /> */}

      <User
        // title="User"
        name={"Ahmet"}
        age={30}
        isAdmin={true}
        location={{ country: "Türkiye", city: "Ankara" }}
        friends={["Mehmet", "Ayşe", "Kerim", "Hande"]}
        handleClick={() => alert("Click event")}
      />

      <User
        title="User"
        name={"Mete"}
        age={20}
        isAdmin={false}
        location={{ country: "Türkiye", city: "Istanbul", zipCode: 34755 }}
        friends={["Fırat", "Kenan", "Mine", "Yasemin"]}
        handleClick={() => alert("Click event")}
      />
    </div>
  );
}

export default App;
