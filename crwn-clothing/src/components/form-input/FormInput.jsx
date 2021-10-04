import React from "react";

import "./styles/form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherProps }) => {
  console.log(otherProps);
  return (
    <div className="group">
      {label ? (
        <label
          className={`${otherProps.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}

      <input className="form-input" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
