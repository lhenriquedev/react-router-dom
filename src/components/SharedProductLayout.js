import { Outlet } from "react-router-dom";

export function SharedProductLayout() {
  return (
    <>
      <h2>Products</h2>
      <Outlet />
    </>
  );
}
