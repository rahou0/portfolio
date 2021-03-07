import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageTitle from "../PageTitle";
import Description from "../Description";
import { Link } from "react-router-dom";

const Container = styled(motion.div)`
  width: 31.3%;
  height: 250px;
  @media (max-width: 992px) {
    width: 48%;
    height: 200px;
  }
  @media (max-width: 772px) {
    width: 50%;
    height: 200px;
  }
  position: relative;
  background-color: #191d28;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16), 0 4px 8px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 1% 1%;
`;
const ImageContainer = styled(motion.div)`
  width: 100%;
  background-color: #191d28;

  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const itemVariants = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  hidden: { y: "150px", opcity: 0 },
};
const titleVariants = {
  hidden: { y: "30px", opacity: 0 },
  visible: { y: 0, opacity: 0.7 },
};
const DescriptionContainer = styled(motion.div)`
  z-index: 1;
  padding-top: 5px;
  position: absolute;
  width: 100%;
  pointer-events: none;
  height: 40%;
  background-color: #191d28;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  bottom: 0;
`;
const LinkWrapper = styled.a`
  padding: 5px 10px;
  background-color: transparent;
  color: white;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid #fdd68c;

  &:hover {
    text-decoration: underline;
    color: red;
  }
`;
const WrapperContainer = styled.div`
  display: flex;
  width: 92%;
  justify-content: flex-end;
`;
function Card({ image, alt }) {
  const [isHovred, setHovred] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const changeItem = () => {
    console.log("hello");
  };
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  return (
    <Container
      onMouseEnter={() => setHovred(true)}
      onMouseLeave={() => setHovred(false)}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
    >
      {isHovred && (
        <DescriptionContainer
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          transition={{ duration: 1 }}
        >
          <PageTitle
            init={{ y: "30px", opacity: 0 }}
            trans={{ duration: 0.7, delay: 0.2 }}
            font={18}
            color={"fff"}
          >
            Xmas Gift
          </PageTitle>
          <Description
            init={{ y: "40px", opacity: 0 }}
            trans={{ duration: 0.7, delay: 0.2 }}
            color={"fdd68c"}
          >
            React JS / Node.js
          </Description>
          <WrapperContainer>
            <LinkWrapper
              onClick={changeItem}
              href={"/google.com"}
              target="_blank"
            >
              VIEW SITE
            </LinkWrapper>
          </WrapperContainer>
        </DescriptionContainer>
      )}
      <ImageContainer
        onMouseEnter={() => setHovred(true)}
        onMouseLeave={() => setHovred(false)}
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <img src={image} alt={alt} />
      </ImageContainer>
    </Container>
  );
}

export default Card;
