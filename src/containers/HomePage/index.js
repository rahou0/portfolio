import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./index.css";
import { Marginer } from "../../components/marginer";
import { useTranslation } from "react-i18next";
import {
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiDribbble,
  FiGithub,
} from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import ScrollDownArrow from "../../components/ScrollDownArrow";
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
`;
const HomePageContainer = styled.div`
  display: flex;
  height: 100%;
  padding: ${({ padding }) => (padding ? "0 4%" : "0 10%")};
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  background-color: #191d28;
  text-align: start;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
`;
const HelloContainer = styled.div`
  display: flex;
  min-width: 200px;
`;
const IconContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  bottom: 0;
  margin-bottom: ${({ mbottom }) => (mbottom ? mbottom + "px" : "")};
  margin-left: ${({ mleft }) => (mleft ? mleft + "px" : "")};
  right: ${({ lang }) => (lang === "ar" ? 1 : 100)};
  left: ${({ lang }) => (lang === "ar" ? 100 : 0)};
`;
function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  const { t, i18n } = useTranslation();
  return (
    <PageContainer>
      <HomePageContainer padding={isMobile}>
        <HelloContainer>
          <PageTitle
            trans={{ duration: 1, delay: 0.5 }}
            init={{ y: "-20vh", opacity: 0 }}
            font={15}
            weight={400}
            color={"FDCD73"}
          >
            ──
          </PageTitle>
          <PageTitle
            trans={{ duration: 1, delay: 0.5 }}
            init={{ y: "-20vh", opacity: 0 }}
            font={15}
            weight={500}
            color={"FDCD73"}
          >
            {t("hello")}
          </PageTitle>
        </HelloContainer>
        <TitleContainer>
          <PageTitle
            font={isMobile ? 26 : isTablet?45:60}
            color={"fff"}
            init={{ y: "30vh", opacity: 0 }}
            trans={{ duration: 1, delay: 1.5 }}
          >
            {t("im")}{" "}
            <PageTitle
              init={{ y: "30vh", opacity: 0 }}
              trans={{ duration: 1, delay: 1.5 }}
              font={isMobile ? 26 : isTablet?45:60}
            >
              {t("firstname")}
            </PageTitle>
            {t("lastname")}
          </PageTitle>
        </TitleContainer>
        <PageTitle
          color={"fff"}
          font={isMobile ? 22 : isTablet?35:49.5}
          weight={400}
          init={{ y: "-6vh", opacity: 0 }}
          trans={{ duration: 0.5, delay: 2.3 }}
        >
          {t("jobtitle")}
        </PageTitle>

        {!isMobile && (
          <ScrollDownArrow weight={400} font={20} mright={10} mbottom={100} />
        )}
        <Marginer direction="vertical" margin={isMobile ? 60 : 80} />
        <Button
          raduis={3}
          weight={500}
          width={isMobile ? 150 : 150}
          padding={isMobile ? " 10px 6px" : "13px 20px"}
          init={{ opacity: 0 }}
          trans={{ delay: 2.9 }}
        >
          {t("cvButtonName")}
        </Button>
        <IconContainer
          lang={i18n.language}
          mleft={isMobile ? 20 : 60}
          mbottom={isMobile ? 20 : 50}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.9 }}
        >
          <FiTwitter id="iconStyle"></FiTwitter>
          <Marginer direction="horizontal" margin={15} />
          <FiFacebook id="iconStyle"></FiFacebook>
          <Marginer direction="horizontal" margin={15} />
          <FiLinkedin id="iconStyle"></FiLinkedin>
          <Marginer direction="horizontal" margin={15} />
          <FaBehance id="iconStyle"></FaBehance>
          <Marginer direction="horizontal" margin={15} />
          <FiGithub id="iconStyle"></FiGithub>
          <Marginer direction="horizontal" margin={15} />
          <FiDribbble id="iconStyle"></FiDribbble>
        </IconContainer>
      </HomePageContainer>
    </PageContainer>
  );
}

export default HomePage;
