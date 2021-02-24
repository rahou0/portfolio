import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Description from "../../components/Description";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
import ContactFormCard from "../../components/ContactFormCard";
import BottomContainer from "./BottomContainer";
import { useTranslation } from "react-i18next";

const PageContainer = styled.div`
  width: 100vw;
  background-color: #161922;
  min-height: 70vh;
  max-width: 100%;
`;
const ContactPageContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const UpperContainer = styled.div`
  background-color: #161922;
  height: ${({ height }) => (height ? "10px" : "200px")};
  padding-top: 130px;
  display: flex;
  justify-content: flex-start;
`;
const FooterContainer = styled.div`
  background-color: #161922;
  height: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
function ContactPage() {
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
  const { t, i18n } = useTranslation();
  return (
    <PageContainer id="contact">
      <ContactPageContainer>
        <UpperContainer
          height={isMobile ? 12 : ""}
          color={"fff"}
        ></UpperContainer>
        <ContactFormCard />
        <BottomContainer isMobile={isMobile} />
        <FooterContainer>
          <Description font={isMobile ? 12 : null} color={"fff"}>
            {t("firstname")} {t("lastname")}
            <Description color={"FDCD73"} font={12}>
              &copy; {new Date().getFullYear()}
            </Description>
          </Description>
        </FooterContainer>
      </ContactPageContainer>
    </PageContainer>
  );
}

export default ContactPage;
