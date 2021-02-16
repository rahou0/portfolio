import React from "react";
import styled from "styled-components";
const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const LinkWrapper = styled.ul`
  height: 100%;
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
`;
const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: white;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
`;
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
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
function NavLinks() {
  return (
    <NavLinksContainer>
      <LinkWrapper>
        <LinkItem>
          <Link href="#">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">ABOUT</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">PORTFOLIO</Link>
        </LinkItem>{" "}
        <LinkItem>
          <Link href="#">BLOG</Link>
        </LinkItem>{" "}
        <LinkItem>
          <Link href="#">CONTACT</Link>
        </LinkItem>{" "}
      </LinkWrapper>
    </NavLinksContainer>
  );
}

export default NavLinks;
