import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Card = styled(motion.div)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  width: 300px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16), 0 8px 16px rgba(0, 0, 0, 0.23);
  height: 400px;
  margin: 0 10px;
`;
const UpperCardContainer = styled.div`
  width: 100%;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
  }
`;
const CardSocialMediaInformation = styled.div`
  padding-top: 10px;
  width: 100%;
  display: flex;
  padding-left: 27px;
  justify-content: space-evenly;
`;
const DateContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  top: 42%;
  left: -9%;
  background-color: #fdcd73;
  color: #000;
  width: 130px;
  height: 40px;
  transform: rotate(90deg);
  justify-content: center;
  align-items: center;
`;
const CardTitle = styled.h3`
  color: ${({ color }) => (color ? "#" + color : "#fff")};
  font-weight: ${({ weight }) => (weight ? weight : "500")};
  font-size: ${({ font }) => (font ? font + "px" : "20px")};
  padding: 0 20px;
  cursor: pointer;
  &:hover {
    color: #fdcd73;
  }
`;
const Text = styled.a`
  color: #727796;
  font-weight: ${({ weight }) => (weight ? weight : "500")};
  font-size: ${({ font }) => (font ? font + "px" : "12px")};
  padding-left: ${({ pleft }) => (pleft ? pleft + "px" : "0px")};
  padding-bottom: ${({ pbottom }) => (pbottom ? pbottom + "px" : "0px")};
`;
const DateText = styled.a`
  font-weight: 500;
  font-size: 15px;
`;
const itemVariants = {
  visible: {
    scale: 1,
    translateX: 0,
  },
  hidden: { scale: 0, translateX: 130 },
};
function BlogCard({ image, alt, delay }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  return (
    <Card
      animate={controls}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      transition={{ duration: 1, delay: delay }}
    >
      <UpperCardContainer>
        <img alt={alt} src={image} />
      </UpperCardContainer>
      <CardSocialMediaInformation>
        <Text>By: Rahim</Text>
        <Text>25 comments</Text>
        <Text>1k likes</Text>
      </CardSocialMediaInformation>
      <DateContainer>
        <DateText>May 8, 2018</DateText>
      </DateContainer>
      <CardTitle>Desgin is Not Just Look Woow, its means...</CardTitle>
      <Text pleft={20} pbottom={20}>
        ── Read More
      </Text>
    </Card>
  );
}

export default BlogCard;
