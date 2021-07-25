import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
  LinkItem,
} from "./style.js";
const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText className="logo-text">Ultra Profile</LogoText>
        </Logo>

        <UlList>
          <ListItem>
            <LinkItem href="#" exact to="/">
              Home
            </LinkItem>
          </ListItem>
          <ListItem className="list-item">
            <Anchor href="#">Work</Anchor>
          </ListItem>
          <ListItem className="list-item">
            <Anchor href="#">Portfolio</Anchor>
          </ListItem>
          <ListItem className="list-item">
            <Anchor href="#">Resume</Anchor>
          </ListItem>
          <ListItem className="list-item">
            <Anchor href="#">About</Anchor>
          </ListItem>
          <ListItem className="list-item">
            <LinkItem to="/contact">Contact</LinkItem>
          </ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
};
export default Navbar;
