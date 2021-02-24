import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Text = styled(motion.a)`
  color: ${({ color }) => (color ? "#" + color : "#fdcd73")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  font-size: ${({ font }) => (font ? font + "px" : "20px")};
  position: absolute;
  right: ${({ lang }) => (lang === "ar" ? 100 : 0)};
  left: ${({ lang }) => (lang === "ar" ? 0 : 100)};
  bottom: 0;
  margin-bottom: 100px;
  text-align: start;
  margin-bottom: ${({ mbottom }) => (mbottom ? mbottom + "px" : "")};
  margin-right: ${({ mright }) => (mright ? mright + "px" : "")};
  transform: rotate(90deg);
  cursor: pointer;
`;
function ScrollDownArrow(props) {
  const { color, weight, font, mright, mbottom } = props;
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <Text
      lang={i18n.language}
      color={color}
      font={font}
      weight={weight}
      mright={mright}
      mbottom={mbottom}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.9 }}
    >
      {t("scrollDown")} ⟶
    </Text>
  );
}

export default ScrollDownArrow;
