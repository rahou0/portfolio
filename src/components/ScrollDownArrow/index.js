import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Text = styled(motion.a)`
  color: ${({ color }) => (color ? "#" + color : "#fdcd73")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  font-size: ${({ font }) => (font ? font + "px" : "20px")};
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 100px;
  text-align: start;
  margin-right: 10px;
  margin-bottom: ${({ mbottom }) => (mbottom ? mbottom + "px" : "")};
  margin-right: ${({ mright }) => (mright ? mright + "px" : "")};
  transform: rotate(90deg);
  cursor: pointer;
`;
function ScrollDownArrow(props) {
  const { color, weight, font, mright, mbottom } = props;
  return (
    <Text
      color={color}
      font={font}
      weight={weight}
      mright={mright}
      mbottom={mbottom}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.9 }}
    >
      SCROLL DOWN ⟶
    </Text>
  );
}

export default ScrollDownArrow;
