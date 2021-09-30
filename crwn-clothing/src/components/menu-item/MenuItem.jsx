import React from "react";

import "./styles/menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  const backgroundImage = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <div className={`${size} menu-item `}>
        <div style={backgroundImage} className="background-image" />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
