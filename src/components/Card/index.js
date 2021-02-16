import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../../components/Button";
import PageTitle from "../PageTitle";
import Description from "../Description";

const Container = styled(motion.div)`
  width: 250px;
  height: 250px;
  position: relative;
  background-color: #191d28;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16), 0 4px 8px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 10px 10px;
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
  visible: { y: 0, opacity: 1,transition: { duration: 0.7 } },
  hidden: { y: "150px", opcity: 0 },
};
const Title = styled.a`
  font-size: 20px;
  color: #fdd68c;
`;
const titleVariants = {
  hidden: { y: "30px", opacity: 0 },
  visible: { y: 0, opacity: 0.7 },
};
const DescriptionContainer = styled(motion.div)`
  z-index: 1;
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

function Card({ image, alt }) {
  const [isHovred, setHovred] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  console.log(isHovred);

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
            font={21.5}
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
