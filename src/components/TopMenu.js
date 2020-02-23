import React, { useState } from "react";
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
  Input
} from "reactstrap";

const TopMenu = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Light Novel</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Category
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Isekai</DropdownItem>
                <DropdownItem>Magic</DropdownItem>
                <DropdownItem>School Life</DropdownItem>
                <DropdownItem>Harem</DropdownItem>
                <DropdownItem>Adventure</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>All</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/signin">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart">Cart</NavLink>
            </NavItem>
            <Input placeholder="Search" />
          </Nav>
          <NavbarText>Best LN</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopMenu;
