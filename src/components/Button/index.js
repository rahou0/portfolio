import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const ButtonWrapper = styled(motion.div)`
  padding: ${({ padding }) => (padding ? padding : "13px 20px")};
  color: #000;
  border-radius: ${({ radius }) => (radius ? radius + "px" : "1px")};
  text-align: center;
  cursor: pointer;
  font-size: ${({ font }) => (font ? font + "px" : "15px")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  background-color: #fdcd73;
  width: ${({ width }) => (width ? width + "px" : "140px")};
  border: 2px solid transparent;

  background: linear-gradient(to right, #191d28 50%, #fdcd73 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    background-position: left bottom;
    //background-color: #191d28;
    border: 2px solid #fdcd73;
    color: #fdcd73;
  }
  &:focus {
    outline: none;
  }
`;
function Button(props) {
  const { width, padding, font, weight, radius, init, trans } = props;
  return (
    <ButtonWrapper
      padding={padding}
      width={width}
      weight={weight}
      font={font}
      radius={radius}
      initial={init}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={trans}
    >
      {props.children}
    </ButtonWrapper>
  );
}

export default Button;
