import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <section className="section">
      <h2>404</h2>
      <p>page not found</p>
      <Link to="/">go to home</Link>
    </section>
  );
};
