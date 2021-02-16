import React from "react";
import styled from "styled-components";
import AboutImageProfile from "../../images/about.svg";
import { Marginer } from "../../components/marginer";
import Button from "../../components/Button";
import PageTitle from "../../components/PageTitle";
import Description from "../../components/Description";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  background-color: #161922;
`;
const AboutPageContainer = styled.div`
  display: flex;
  height: 100%;
  padding-top: 50px;
  padding-left: ${({ pleft }) => (pleft ? pleft + "px" : "250px")};
  padding-right: ${({ pright }) => (pright ? pright + "px" : "0px")};
  flex-direction: column;
`;
const SkillsTitle = styled.h2`
  font-size: ${({ font }) => (font ? font + "px" : "30px")};
  line-height: 0;
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
  width: 400px;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const UpperContainer = styled.div`
  display: flex;
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  align-items: flex-start;
  height: 100%;
  margin-right: ${({ mright }) => (mright ? mright + "px" : "400px")};
  margin-bottom: ${({ mbottom }) => (mbottom ? mbottom + "px" : "0px")};
  justify-content: space-around;
`;
const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const SkillsName = styled.h4`
  font-size: 16px;
  color: ${({ color }) => (color ? "#" + color : "#fff")};
  opacity: 0.85;
  line-height: 0.1;
  cursor: pointer;
`;
function AboutPage() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <PageContainer>
      <AboutPageContainer
        pleft={isMobile ? 30 : 250}
        pright={isMobile ? 30 : 0}
      >
        <UpperContainer>
          {!isMobile && (
            <ProfileContainer>
              <img alt="profile image rahim" src={AboutImageProfile} />
            </ProfileContainer>
          )}
          {!isMobile && <Marginer direction="horizontal" margin={100} />}
          <TextContentContainer>
            <PageTitle font={isMobile ? 25 : 30}>─ About Me </PageTitle>
            <Marginer direction="vertical" margin={isMobile ? 15 : 30} />
            <Description color={"8B8EB3"}>
              I'm a final year student pursuing master's in Software engineer 🎓
              from Farhat abbas University of algeria 🏛. I'm a passionate
              learner who's always willing to learn and work across technologies
              and domains 💡.
            </Description>
            <Marginer direction="vertical" margin={isMobile ? 15 : 35} />

            <Description color={"8B8EB3"}>
              I'm a Full-Stack Developer. Let's make something special.
            </Description>
            <Marginer direction="vertical" margin={isMobile ? 35 : 70} />
            <ButtonContainer>
              <Button padding={"10px 15px"} width={100} font={14} weight={500}>
                HIRE ME
              </Button>
              <Marginer direction="horizontal" margin={40} />
              <Button padding={"10px 15px"} width={100} font={14} weight={900}>
                ⟶
              </Button>
            </ButtonContainer>
          </TextContentContainer>
        </UpperContainer>
        <Marginer direction="vertical" margin={isMobile ? 60 : 100} />
        <BottomContainer
          mright={isMobile ? 1 : 400}
          direction={isMobile ? "column" : "row"}
          mbottom={isMobile ? 50 : 1}
          mleft={isMobile ? 50 : 1}
        >
          <SkillsTitle
            trans={isMobile ? 1 : 90}
            mleft={isMobile ? 1 : 0}
            font={isMobile ? 25 : 30}
            mtop={isMobile ? 1 : 0}
          >
            ── My Skills
          </SkillsTitle>
          <SkillsContainer>
            <SkillsName>Data Base Administartor</SkillsName>
            <Description color={"FDCD73"}>SQL & NOSQL Data Bases</Description>
            <Marginer direction="vertical" margin={isMobile ? 10 : 40} />
            <SkillsName>Mobile Developer</SkillsName>
            <Description color={"FDCD73"}>Flutter, JAVA</Description>
          </SkillsContainer>
          <Marginer direction="horizontal" margin={isMobile ? 1 : 200} />
          <SkillsContainer>
            <SkillsName>Software Developer</SkillsName>
            <Description color={"FDCD73"}>JAVA, Python, C#</Description>
            <Marginer direction="vertical" margin={isMobile ? 10 : 40} />
            <SkillsName>Full-Stack Developer</SkillsName>
            <Description color={"FDCD73"}>ReactJs, NodeJs</Description>
          </SkillsContainer>
        </BottomContainer>
      </AboutPageContainer>
    </PageContainer>
  );
}

export default AboutPage;
