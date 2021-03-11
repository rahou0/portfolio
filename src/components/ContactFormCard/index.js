import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
import Button from "../Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import axios from "axios";

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
  margin: ${({ margin }) => (margin ? "50px 10%" : "100px 10%")};
  padding: 50px 50px;
  textarea {
    width: 100%;
    height: 70px;
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
const WarnignText = styled.span`
  color: red;
  font-size: 12px;
  opacity: 0.8;
  font-weight: 500;
`;
const WarningContainer = styled.div`
  width: 100%;
  text-align: end;
  padding: 5px 0;
`;
const WarningContainerRegistre = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 12px;
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
  const [errors, setErrors] = useState({
    name: { value: false, msg: "" },
    email: { value: false, msg: "" },
    project: { value: false, msg: "" },
    request: { value: false, msg: "" },
  });
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  function CheckInputs() {
    if (name === "") {
      setErrors((prevState) => ({
        ...prevState,
        name: { value: true, msg: "This Field is Empty" },
      }));
    }
    if (email === "") {
      setErrors((prevState) => ({
        ...prevState,
        email: { value: true, msg: "This Field is Empty" },
      }));
    } else {
      if (!/.+@.+\.[A-Za-z]+$/.test(email))
        setErrors((prevState) => ({
          ...prevState,
          email: { value: true, msg: "Email Invalid!" },
        }));
    }
    if (project === "") {
      setErrors((prevState) => ({
        ...prevState,
        project: { value: true, msg: "This Field is Empty" },
      }));
    }
  }
  function handleClick(e) {
    CheckInputs();
    if (
      name !== "" &&
      email !== "" &&
      project !== "" &&
      /.+@.+\.[A-Za-z]+$/.test(email) &&
      /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(name)
    )
      axios
        .post(
          "http://192.168.1.3:4000/contact",
          {
            name,
            email,
            budget: budget || 0,
            project,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": true,
            },
          }
        )
        .then(function (response) {
          console.log("sent");
        })
        .catch(function (error) {
          setErrors((prevState) => ({
            ...prevState,
            request: { value: true, msg: error.response.data },
          }));
        });
  }
  return (
    <Card
      right={i18n.language === "ar"}
      left={i18n.language === "ar"}
      position={isMobile ? "relative" : ""}
      animate={controls}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      margin={isMobile}
    >
      <motion.input
        placeholder={t("contactName")}
        initial="hidden"
        animate="visible"
        variants={FormVariants}
        transition={{ duration: 1, delay: 0.2 }}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setErrors((prevState) => ({
            ...prevState,
            name: { value: false, msg: "" },
          }));
        }}
      />
      <WarningContainer>
        {errors.name.value && <WarnignText>{errors.name.msg}</WarnignText>}
      </WarningContainer>
      <motion.input
        initial="hidden"
        animate="visible"
        variants={FormVariants}
        transition={{ duration: 1, delay: 0.4 }}
        type="email"
        placeholder={t("contactEmail")}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrors((prevState) => ({
            ...prevState,
            email: { value: false, msg: "" },
          }));
        }}
      />
      <WarningContainer>
        {errors.email.value && <WarnignText>{errors.email.msg}</WarnignText>}{" "}
      </WarningContainer>
      <motion.input
        initial="hidden"
        animate="visible"
        variants={FormVariants}
        transition={{ duration: 1, delay: 0.6 }}
        placeholder={t("contactBudget")}
        value={budget}
        onChange={(e) => {
          setBudget(e.target.value);
        }}
      />
      <motion.textarea
        initial="hidden"
        animate="visible"
        variants={FormVariants}
        transition={{ duration: 1, delay: 0.8 }}
        placeholder={t("contactDescription")}
        value={project}
        onChange={(e) => {
          setProject(e.target.value);
          setErrors((prevState) => ({
            ...prevState,
            project: { value: false, msg: "" },
          }));
        }}
      />
      <WarningContainer>
        <WarnignText>{errors.project.msg}</WarnignText>
      </WarningContainer>
      <WarningContainerRegistre>
        {errors.request.value && (
          <WarnignText>{errors.request.msg}</WarnignText>
        )}
      </WarningContainerRegistre>
      <ButtonContainer>
        <Button
          init={{ y: "30px", opacity: 0 }}
          trans={{ duration: 1, delay: 0.8 }}
          padding={"7px 7px"}
          width={100}
          onClick={handleClick}
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
