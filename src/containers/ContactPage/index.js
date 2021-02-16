import React from "react";
import styled from "styled-components";
import Description from "../../components/Description";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
import ContactFormCard from "../../components/ContactFormCard";
import BottomContainer from "./BottomContainer";

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
  flex-direction: column;
  position: relative;
`;
const UpperContainer = styled.div`
  background-color: #161922;
  height: 30%;
  margin: ${({ margin }) => (margin ? "0px " + margin + "px" : "0px 230px")};
  width: 100%;
  padding-top: 130px;
  display: flex;
  justify-content: flex-start;
`;
const TextContainer = styled.div`
  max-width: 300px;
  padding-left: ${({ pleft }) => (pleft ? pleft + "px" : "230px")};
  margin-bottom: 20px;
`;

const FooterContainer = styled.div`
  background-color: #161922;
  height: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ArrowLine = styled.a`
  color: ${({ color }) => (color ? "#" + color : "#fff")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  font-size: ${({ font }) => (font ? font + "px" : "16px")};
  transform: ${({ transform }) =>
    transform ? "rotate(" + transform + "deg)" : "rotate(0deg)"};
  cursor: pointer;
`;
function ContactPage() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <PageContainer>
      <ContactPageContainer>
        <UpperContainer>
          <TextContainer pleft={isMobile ? 50 : ""}>
            <Description
              init={{ x: "-20px", opacity: 0 }}
              trans={{ duration: 1 }}
              font={21.5}
              weight={400}
              color={"8B8EB3"}
              opacity={1}
            >
              Let's make something new, different and more meaningful or make
              thing more visual or Conceptual ?{" "}
              <Description
                init={{ x: "-20px", opacity: 0 }}
                trans={{ duration: 1 }}
                font={22}
                weight={400}
                color={"fdcd73"}
                opacity={1}
              >
                Just Say Hello !
              </Description>
            </Description>
          </TextContainer>
          {!isMobile && (
            <ArrowLine
              transform={isMobile ? 90 : ""}
              font={25}
              weight={400}
              color={"fdcd73"}
            >
              ────
            </ArrowLine>
          )}
        </UpperContainer>
        <ContactFormCard />
        <BottomContainer isMobile={isMobile} />
        <FooterContainer>
          <Description font={isMobile ? 12 : ""} color={"fff"}>
            ABDERAHIM HAMANI{" "}
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
