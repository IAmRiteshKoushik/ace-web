import React, { useState } from "react";
import Profile from "./profile.tsx";
import "./login_Styles.css";

const Button = () => {
  const [showIcon, setShowIcon] = useState(false);

  const replace = () => {
    setShowIcon(true);
  };
  return (
    <div>
      {showIcon ? (
        <Profile />
      ) : (
        <button className="login" onClick={replace}>
          Login/Sign Up
        </button>
      )}
    </div>
  );
};
export default Button;
