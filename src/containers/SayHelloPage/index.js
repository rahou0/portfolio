import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Description from "../../components/Description";
import PageTitle from "../../components/PageTitle";
import { Marginer } from "../../components/marginer";

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
  return (
    <PageContainer>
      <SayHelloPageContainer>
        <Description>Have any Project in Mind ?</Description>
        <Marginer direction="vertical" margin={10} />
        <PageTitle weight={400} font={60}>
          Just Say Hello !
        </PageTitle>
        <Marginer direction="vertical" margin={40} />

        <Button padding={"10px 10px"} width={100} weight={500} font={14}>
          Hire ME
        </Button>
      </SayHelloPageContainer>
    </PageContainer>
  );
}

export default SayHelloPage;
