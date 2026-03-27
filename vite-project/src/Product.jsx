import "./Product.css";
import Price from "./Price.jsx";

function Product({ title }) {
  let oldPrices = [2999, 29999, 299, 3399];
  let newPrices = [3000, 30000, 300, 3400];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>Description</p>
      <Price />
    </div>
  );
}

export default Product;
