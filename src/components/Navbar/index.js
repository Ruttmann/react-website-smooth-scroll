import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
