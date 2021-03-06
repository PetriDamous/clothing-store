import React from "react";

import "./styles/collection-item.styles.scss";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  const backgroundImage = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="collection-item">
      <div style={backgroundImage} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
