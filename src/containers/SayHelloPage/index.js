import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Description from "../../components/Description";
import PageTitle from "../../components/PageTitle";
import { Marginer } from "../../components/marginer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
import { useTranslation } from "react-i18next";

const PageContainer = styled.div`
  width: 100vw;
  background-color: #161922;
  height: 50vh;
  max-width: 100%;
`;
const SayHelloPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
`;
function SayHelloPage() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const { t, i18n } = useTranslation();

  return (
    <PageContainer>
      <SayHelloPageContainer>
        <Description>{t("haveProject")}</Description>
        <Marginer direction="vertical" margin={10} />
        <PageTitle weight={400} font={isMobile ? 30 : 60}>
          {t("sayHello")}
        </PageTitle>
        <Marginer direction="vertical" margin={40} />

        <Button padding={"10px 10px"} width={100} weight={500} font={14}>
          {t("hireMe")}
        </Button>
      </SayHelloPageContainer>
    </PageContainer>
  );
}

export default SayHelloPage;
