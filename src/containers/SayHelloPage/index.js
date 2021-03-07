import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Description from "../../components/Description";
import PageTitle from "../../components/PageTitle";
import { Marginer } from "../../components/marginer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const PageContainer = styled.div`
  width: 100vw;
  background-color: #161922;
  height: 50vh;
  max-width: 100%;
`;
const SayHelloPageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
`;
const itemVariants = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};
const AnimationContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: center;
`;

function SayHelloPage() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const { t, i18n } = useTranslation();
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  return (
    <PageContainer>
      <SayHelloPageContainer>
        <AnimationContainer
          animate={controls}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          transition={{ duration: 1, delay: 0 }}
        >
          <Description>{t("haveProject")}</Description>
        </AnimationContainer>

        <Marginer direction="vertical" margin={10} />
        <AnimationContainer
          animate={controls}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <PageTitle weight={400} font={isMobile ? 30 : 60}>
            {t("sayHello")}
          </PageTitle>
        </AnimationContainer>

        <Marginer direction="vertical" margin={40} />
        <AnimationContainer
          animate={controls}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button padding={"10px 10px"} width={100} weight={500} font={14}>
            {t("hireMe")}
          </Button>
        </AnimationContainer>
      </SayHelloPageContainer>
    </PageContainer>
  );
}

export default SayHelloPage;
