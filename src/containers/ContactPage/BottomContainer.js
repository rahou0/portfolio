import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiDribbble,
  FiGithub,
} from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { Marginer } from "../../components/marginer";
import styled from "styled-components";
import Description from "../../components/Description";

const ContactRowContainer = styled.div`
  display: flex;
`;

const IconContainer = styled(motion.div)`
  display: flex;
  margin-bottom: ${({ mbottom }) => (mbottom ? mbottom + "px" : "")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  margin-left: ${({ mleft }) => (mleft ? mleft + "px" : "")};
`;
const Container = styled.div`
  background-color: #191d28;
  height: 40%;
  width: 100%;
`;
const ContactInfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) =>
    padding ? "50px " + padding + "px" : "50px 230px"};
`;
const itemVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: 1 },
  },
  hidden: { opacity: 0, x: "-20px" },
};
function BottomContainer({ isMobile }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <Container>
      <ContactInfoContainer
        animate={controls}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        padding={isMobile ? "20" : ""}
      >
        <ContactRowContainer>
          <Description font={16} weight={100} color={"61677F"}>
            ─
          </Description>
          <Marginer direction="horizontal" margin={10} />
          <Description font={16} weight={400} color={"fdcd73"}>
            (+213) 657368220
          </Description>
        </ContactRowContainer>
        <Marginer direction="vertical" margin={10} />
        <ContactRowContainer>
          <Description font={16} weight={100} color={"61677F"}>
            ─
          </Description>
          <Marginer direction="horizontal" margin={10} />
          <Description font={16} weight={400} color={"fdcd73"}>
            hamani97abderahim@gmail.com
          </Description>
        </ContactRowContainer>
        <Marginer direction="vertical" margin={10} />
        <ContactRowContainer>
          <Description font={16} weight={100} color={"61677F"}>
            ─
          </Description>
          <Marginer direction="horizontal" margin={10} />
          <Description font={16} weight={400} color={"fdcd73"}>
            Setif, Algeria
          </Description>
        </ContactRowContainer>
        <Marginer direction="vertical" margin={30} />

        <IconContainer justify={isMobile ? "center" : ""}>
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
      </ContactInfoContainer>
    </Container>
  );
}

export default BottomContainer;
