import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
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
import { NameContext } from "../contexts/Name";

export default function TopMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { searchName } = useContext(NameContext);
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      let text = event.target.value.trim();
      if (!text) {
        return;
      }

      searchName(text);
      history.push("/search");
    }
  }

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
            <Input 
              placeholder="Search for light novel" 
              onKeyUp={onKeyUp}
            />
          </Nav>
          <NavbarText>Best LN</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

