import { Link, useParams } from "react-router-dom";
import products from "../data";

export const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <section className="section product">
      <img src={product.image} />
      <h5>{product.name}</h5>
      <Link to="/products">back to products</Link>
    </section>
  );
};
