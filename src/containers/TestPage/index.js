import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
const PageContainer = styled.div`
  height: 200vh;
  width: 100vw;
  max-width: 100%;
`;
const TestContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Text = styled.a`
  font-size: 40px;
  color: #000;
`;
const ButtonWrapper = styled.div`
  width: 200px;
  height: 60px;
  font-size: 20px;
  background-color: grey;
`;
function TestPage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <PageContainer id="test">
      <TestContainer>
        <Text>Here button</Text>
        <ButtonWrapper>Click ME</ButtonWrapper>
      </TestContainer>
    </PageContainer>
  );
}

export default TestPage;
