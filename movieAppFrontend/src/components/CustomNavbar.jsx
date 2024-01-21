import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import { doLogout, isAdminLogin, isUserLogin } from "../auth";
import Login from "../pages/Login";
function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  //asa component loads it exceuted
  useEffect(() => {
    setLogin(isUserLogin() || isAdminLogin());
    setUser(localStorage.getItem("LoginId"));
  }, [login]);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={ReactLink} to="/">
          Movie Booking
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Admin
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/movie">
                Movies
              </NavLink>
            </NavItem>
            {login && (
              <>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    more
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={ReactLink} to="/reset">
                      Reset Password
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/">
                      <Button onClick={doLogout}>Logout</Button>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            )}
          </Nav>
          <Nav></Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default CustomNavbar;
