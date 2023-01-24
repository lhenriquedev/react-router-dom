import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { StyledNavbar } from "./StyledNavbar";

export function SharedLayout() {
  return (
    <>
      <StyledNavbar />
      <section className="section">
        <Outlet />
      </section>
    </>
  );
}
