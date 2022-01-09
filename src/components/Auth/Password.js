import React from "react";
import { useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";

const Password = () => {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  return (
    <div>
      <div
        style={{
          width: "400px",
          height: "200px",
          margin: "50px auto",
          borderRadius: "10px",
          backgroundColor: "rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          style={{
            border: "none",
            width: "90%",
            height: "40px",
          }}
          type="text"
          name=""
          id=""
        />
        <span onClick={() => forgotPassword(email)}>отправить</span>
      </div>
    </div>
  );
};

export default Password;
