import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { deviceSize } from "../responsive";
import NavLinks from "./NavLinks";
import MobileNavLinks from "./MobileNavLinks";

const NavBarContainer = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  top: 0;
  overflow: hidden;
  max-width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  min-height: 60px;
  background-color: #191d28;
  z-index: 2;
  transition: "top 0.6s";
`;
const MenuContainer = styled.div`
  display: flex;
  padding: ${({ padding }) => (padding ? "0 " + padding + "px" : "0 60px")};
  align-items: center;
  justify-content: space-between;
`;
const MiddleNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const ItemNavBar = styled.a`
  text-decoration: none;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => (color ? "#" + color : "#fff")};
  margin-right: 20px;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fdcd73;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
    filter: contrast(0.6);
  }
`;
const Title = styled.h2`
  font-size: 30px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  color: ${({ color }) => (color ? "#" + color : "#fff")};
  padding-right: 20px;
`;
function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
    <NavBarContainer>
      <MenuContainer padding={isMobile ? 30 : ""}>
        <Title color={"FDCD73"}> eramex </Title>
        {!isMobile && <NavLinks />}
        {isMobile && <MobileNavLinks />}

        {!isMobile && (
          <MiddleNavBarContainer>
            <ItemNavBar>AR</ItemNavBar>
            <ItemNavBar>FRA</ItemNavBar>
            <ItemNavBar color={"FDCD73"}>ENG</ItemNavBar>
          </MiddleNavBarContainer>
        )}
      </MenuContainer>
    </NavBarContainer>
  );
}

export default NavBar;
