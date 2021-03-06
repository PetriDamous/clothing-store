import React from "react";

import "./styles/custom-button.styles.scss";

const CustomButton = ({ children, isGoogle, ...otherProps }) => {
  return (
    <button
      className={`${isGoogle ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
