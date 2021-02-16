import React from "react";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";
import Description from "../../components/Description";
import { Marginer } from "../../components/marginer";
import PageTitle from "../../components/PageTitle";
import BlogCard from "../../components/BlogCard";
import WebImage from "../../images/family.jpg";

const PageContainer = styled.div`
  width: 100vw;
  min-height: 80vh;
  max-width: 100%;
  background-color: #161922;
`;
const BlogPageContainer = styled.div`
  display: flex;
  height: 100%;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  padding: ${({ padding }) =>
    padding ? "50px " + padding + "px" : "50px 230px"};
  flex-direction: column;
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
function BlogPage() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
    <PageContainer>
      <BlogPageContainer padding={isMobile ? " 1" : ""}>
        <PageTitle font={isMobile ? 25 : 30}>My Blog</PageTitle>
        <Marginer direction="vertical" margin={5} />
        <Description>bla bla bla bla </Description>
        <Marginer direction="vertical" margin={40} />
        <CardContainer>
          <BlogCard
            delay={isMobile ? 0 : 0.2}
            alt={"hhhhhh"}
            image={WebImage}
          ></BlogCard>
          <BlogCard
            delay={isMobile ? 0 : 0.4}
            alt={"hhhhhh"}
            image={WebImage}
          ></BlogCard>
          <BlogCard
            delay={isMobile ? 0 : 0.6}
            alt={"hhhhhh"}
            image={WebImage}
          ></BlogCard>
        </CardContainer>
      </BlogPageContainer>
    </PageContainer>
  );
}

export default BlogPage;
