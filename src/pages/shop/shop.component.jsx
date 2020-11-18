import React, { useState } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import { SHOP_DATA } from "../../data.js";

const ShopPage = () => {
  const [collection, setCollection] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collection.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
