import React, { useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
import Button from "../Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16), 0 8px 16px rgba(0, 0, 0, 0.23);
  background-color: #191d28;
  position: ${({ position }) => (position ? position : "absolute")};
  right: ${({ right }) => (right ? null : 0)};
  left: ${({ left }) => (left ? 0 : null)};
  bottom: 0;
  min-width: 250px;
  height: 300px;
  margin: 100px 250px;
  padding: 50px 50px;
  textarea {
    width: 100%;
    height: 70px;
    margin-bottom: 30px;
    text-decoration: none;
    background-color: #191d28;
    border: none;
    color: #fff;
    border-bottom: 1px solid #61677f;
    &::placeholder {
      color: #61677f;
    }
    &:focus {
      outline: none !important;
      border-color: #fdcd73;
      &::placeholder {
        color: #fdcd73;
        opacity: 0.4;
      }
    }
  }
  input {
    width: 100%;
    height: 30px;
    margin-bottom: 20px;
    background-color: #191d28;
    text-decoration: none;
    border: none;
    color: #fdcd73;
    border-bottom: 1px solid #61677f;
    &::placeholder {
      color: #61677f;
    }
    &:focus {
      outline: none !important;
      border-color: #fdcd73;
      &::placeholder {
        color: #fdcd73;
        opacity: 0.4;
      }
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
const itemVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 0.7 },
  },
  hidden: { opacity: 0 },
};
const FormVariants = {
  hidden: { y: "30px", opacity: 0 },
  visible: { y: 0, opacity: 0.7 },
};
function ContactFormCard() {
  const { t, i18n } = useTranslation();

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <Card
    right={i18n.language==="ar"}
    left={i18n.language==="ar"}
      position={isMobile ? "relative" : ""}
      animate={controls}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
    >
      <motion.input
        placeholder={t("contactName")}
        initial="hidden"
        animate="visible"
        variants={FormVariants}
        transition={{ duration: 1, delay: 0.2 }}
      ></motion.input>
      <motion.input
        initial="hidden"
        animate="visible"
        variants={FormVariants}
        transition={{ duration: 1, delay: 0.4 }}
        type="email"
        placeholder={t("contactEmail")}
      ></motion.input>
      <motion.input
        initial="hidden"
        animate="visible"
        variants={FormVariants}
        transition={{ duration: 1, delay: 0.6 }}
        placeholder={t("contactBudget")}
      ></motion.input>
      <motion.textarea
        initial="hidden"
        animate="visible"
        variants={FormVariants}
        transition={{ duration: 1, delay: 0.8 }}
        placeholder={t("contactDescription")}
      ></motion.textarea>
      <ButtonContainer>
        <Button
          init={{ y: "30px", opacity: 0 }}
          trans={{ duration: 1, delay: 0.8 }}
          padding={"10px 10px"}
          width={100}
          weight={500}
          font={14}
        >
          {t("hireMe")}
        </Button>
      </ButtonContainer>
    </Card>
  );
}

export default ContactFormCard;
