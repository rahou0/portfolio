import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AboutImageProfile from "../../images/about.svg";
import { Marginer } from "../../components/marginer";
import Button from "../../components/Button";
import PageTitle from "../../components/PageTitle";
import Description from "../../components/Description";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

const PageContainer = styled.div`
  width: 100vw;
  min-height: 120vh;
  max-width: 100%;
  background-color: #161922;
`;
const AboutPageContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 0 10%;
  padding-top: 50px;
  flex-direction: column;
`;
const SkillsTitle = styled.a`
  font-size: ${({ font }) => (font ? font + "px" : "36px")};
  font-weight: 700;
  color: ${({ color }) => (color ? "#" + color : "#FDCD73")};
  transform: ${({ trans }) =>
    trans ? "rotate(" + trans + "deg)" : "rotate(-90deg)"};
  margin-left: ${({ mleft }) => (mleft ? mleft + "px" : "-75px")};
  margin-top: ${({ mtop }) => (mtop ? mtop + "px" : "80px")};
`;
const ProfileContainer = styled.div`
  width: 400px;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const TextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
  }
  text-align: justify;
  text-justify: inter-word;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const UpperContainer = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  align-items: flex-start;
  height: 100%;
  margin-bottom: ${({ mbottom }) => (mbottom ? mbottom + "px" : "0px")};
  justify-content: space-around;
`;
const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const SkillsName = styled.a`
  font-size: 18px;
  color: ${({ color }) => (color ? "#" + color : "#fff")};
  font-weight: 600;
  opacity: 0.85;
  cursor: pointer;
`;
const SkillTitleContainer = styled.div`
  min-width: 200px;
`;
function AboutPage() {
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
    <PageContainer id="about">
      <AboutPageContainer
        pleft={isMobile ? 30 : 200}
        pright={isMobile ? 30 : 250}
      >
        <UpperContainer>
          {!isMobile && (
            <ProfileContainer>
              <img alt="profile image rahim" src={AboutImageProfile} />
            </ProfileContainer>
          )}
          {!isMobile && <Marginer direction="horizontal" margin={100} />}
          <TextContentContainer>
            <PageTitle font={isMobile ? 25 : 30}>─ {t("aboutTitle")}</PageTitle>
            <Marginer direction="vertical" margin={isMobile ? 15 : 30} />
            <Description color={"fff"}>{t("AboutDescriptionP1")}</Description>
            <Marginer direction="vertical" margin={isMobile ? 15 : 35} />

            <Description color={"fff"}>{t("AboutDescriptionP2")}</Description>
            <Marginer direction="vertical" margin={isMobile ? 35 : 70} />
            <ButtonContainer>
              <Button padding={"10px 15px"} width={100} font={14} weight={500}>
                {t("hireMe")}
              </Button>
              <Marginer direction="horizontal" margin={40} />
              <Button padding={"10px 15px"} width={100} font={14} weight={900}>
                {t("downloadcv")}
              </Button>
            </ButtonContainer>
          </TextContentContainer>
        </UpperContainer>
        <Marginer direction="vertical" margin={isMobile ? 60 : 100} />

        <BottomContainer
          direction={isMobile ? "column" : "row"}
          mbottom={isMobile ? 50 : 1}
        >
          <SkillsTitle
            trans={isMobile ? 1 : 90}
            mleft={isMobile ? 1 : 0}
            font={isMobile ? 25 : 30}
            mtop={isMobile ? 1 : 0}
          >
            ── {t("skillsTitle")}
          </SkillsTitle>
          {isMobile && <Marginer direction="vertical" margin={20} />}

          <SkillsContainer>
            <SkillsName>{t("skill1Name")}</SkillsName>
            {isMobile && <Marginer direction="vertical" margin={5} />}
            <Description color={"FDCD73"}>{t("skill1Description")}</Description>
            <Marginer direction="vertical" margin={isMobile ? 15 : 40} />
            <SkillsName>{t("skill2Name")}</SkillsName>
            {isMobile && <Marginer direction="vertical" margin={5} />}

            <Description color={"FDCD73"}>{t("skill2Description")}</Description>
          </SkillsContainer>
          <Marginer
            direction={isMobile ? "vertical" : "horizontal"}
            margin={isMobile ? 15 : 200}
          />
          <SkillsContainer>
            <SkillsName>{t("skill3Name")}</SkillsName>
            {isMobile && <Marginer direction="vertical" margin={5} />}

            <Description color={"FDCD73"}>{t("skill3Description")}</Description>
            <Marginer direction="vertical" margin={isMobile ? 15 : 40} />
            <SkillsName>{t("skill4Name")}</SkillsName>
            {isMobile && <Marginer direction="vertical" margin={5} />}

            <Description color={"FDCD73"}>{t("skill4Description")}</Description>
          </SkillsContainer>
        </BottomContainer>
      </AboutPageContainer>
    </PageContainer>
  );
}

export default AboutPage;
