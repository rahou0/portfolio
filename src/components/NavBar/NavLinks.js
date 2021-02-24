import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
const LinkName = styled(Link)`
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
  const { t, i18n } = useTranslation();

  return (
    <NavLinksContainer>
      <LinkWrapper>
        <LinkItem>
          <LinkName to="/#">{t("home")}</LinkName>
        </LinkItem>
        <LinkItem>
          <LinkName to="/#about">{t("about")}</LinkName>
        </LinkItem>
        <LinkItem>
          <LinkName to="/#portfolio">{t("portfolio")}</LinkName>
        </LinkItem>
        <LinkItem>
          <LinkName to="/#blog">{t("blog")}</LinkName>
        </LinkItem>
        <LinkItem>
          <LinkName to="/#contact">{t("contact")}</LinkName>
        </LinkItem>
      </LinkWrapper>
    </NavLinksContainer>
  );
}

export default NavLinks;
