import React from "react";

import "./styles/collection-preview.styles.scss";

import CollectionItem from "../collection-item/CollectionItem";

const CollectionsPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherCollectionItemProps }) => (
            <CollectionItem key={id} {...otherCollectionItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionsPreview;
