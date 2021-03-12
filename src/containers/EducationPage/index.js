import React from "react";
import styled from "styled-components";
import Description from "../../components/Description";
import PageTitle from "../../components/PageTitle";
import { Marginer } from "../../components/marginer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
const PageContainer = styled.div`
  width: 100vw;
  background-color: #191d28;
  height: 100vh;
  max-width: 100%;
`;
const EducationPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
`;
function EducationPage() {
  return (
    <PageContainer>
      <EducationPageContainer>
        <h1>Education Comming soon ....!</h1>
      </EducationPageContainer>
    </PageContainer>
  );
}

export default EducationPage;
