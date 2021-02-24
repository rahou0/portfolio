import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Description from "../../components/Description";
import { Marginer } from "../../components/marginer";
import PageTitle from "../../components/PageTitle";
import WebImage from "../../images/alphaLearn.png";
import MobileImage from "../../images/web.jpg";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #191d28;
  max-width: 100%;
`;
const PortfolioPageContainer = styled.div`
  display: flex;
  height: 100%;
  padding: ${({ padding }) =>
    padding ? "50px " + padding + "px" : "50px 230px"};
  flex-direction: column;
  align-items: center;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
const CardWorkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justify }) => (justify ? justify : "start")};
`;
const LinkItem = styled.a`
  color: ${({ color }) => (color ? "#" + color : "#fff")};
  font-weight: ${({ weight }) => (weight ? weight : "500")};
  font-size: ${({ font }) => (font ? font + "px" : "16px")};
  cursor: pointer;
`;
function PortfolioPage() {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <PageContainer id="portfolio">
      <PortfolioPageContainer padding={isMobile ? " 1" : ""}>
        <PageTitle font={isMobile ? 25 : 30}>{t("portfolioTitle")}</PageTitle>
        <Marginer direction="vertical" margin={5} />
        <Description>{t("portfolioDescription")} </Description>
        <Marginer direction="vertical" margin={40} />
        <HeaderContainer>
          <LinkItem color={"FDCD73"}>{t("all")}</LinkItem>
          <LinkItem style={{ cursor: "pointer" }}>{t("web")}</LinkItem>
          <LinkItem>{t("desktop")}</LinkItem>
          <LinkItem>{t("mobile")}</LinkItem>
        </HeaderContainer>
        <Marginer direction="vertical" margin={40} />
        <CardWorkContainer justify={isMobile ? "center" : "start"}>
          <Card image={WebImage} alt="bla bla bla" />
          <Card image={MobileImage} alt="bla bla bla" />
          <Card image={WebImage} alt="bla bla bla" />
          <Card image={MobileImage} alt="bla bla bla" />
          <Card image={WebImage} alt="bla bla bla" />
          <Card image={MobileImage} alt="bla bla bla" />
          <Card image={WebImage} alt="bla bla bla" />
          <Card image={MobileImage} alt="bla bla bla" />
          <Card image={WebImage} alt="bla bla bla" />
          <Card image={MobileImage} alt="bla bla bla" />
        </CardWorkContainer>
        <Marginer direction="vertical" margin={40} />

        <Button weight={600} font={16}>
          {t("seeMore")}
        </Button>
      </PortfolioPageContainer>
    </PageContainer>
  );
}

export default PortfolioPage;
