import ButtonGoUp from "./components/ButtonGoUp";
import NavBar from "./components/NavBar";
import AboutPage from "./containers/AboutPage";
import BlogPage from "./containers/BlogPage";
import ContactPage from "./containers/ContactPage";
import HomePage from "./containers/HomePage";
import PortfolioPage from "./containers/PortfolioPage";
import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div>
      <Router>
        <ButtonGoUp />
        <NavBar />
        <Switch>
          <Route path="/">
            <HomePage />
            <AboutPage />
            <PortfolioPage />
            <BlogPage />
            <ContactPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
