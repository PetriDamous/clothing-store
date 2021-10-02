import React from "react";

import SHOP_DATA from "../../data/shop.data";

import CollectionsPreview from "../../components/collections-preview/CollectionsPreview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherColletionProps }) => (
          <CollectionsPreview key={id} {...otherColletionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
