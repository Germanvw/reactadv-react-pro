import {
  ProductButtons,
  ProductImage,
  ProductCard,
  ProductTitle,
} from "../components/index";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug - 1",
  img: "coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons style={{ backgroundColor: "#70d1f8" }} />
        </ProductCard>
      </div>
    </div>
  );
};
