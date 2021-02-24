import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";
import Description from "../../components/Description";
import { Marginer } from "../../components/marginer";
import PageTitle from "../../components/PageTitle";
import BlogCard from "../../components/BlogCard";
import WebImage from "../../images/family.jpg";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
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
    <PageContainer id="blog">
      <BlogPageContainer padding={isMobile ? " 1" : ""}>
        <PageTitle font={isMobile ? 25 : 30}>{t("blogTitle")}</PageTitle>
        <Marginer direction="vertical" margin={5} />
        <Description>{t("blogDescription")}</Description>
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
