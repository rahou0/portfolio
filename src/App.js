import ButtonGoUp from "./components/ButtonGoUp";
import NavBar from "./components/NavBar";
import AboutPage from "./containers/AboutPage";
import BlogPage from "./containers/BlogPage";
import ContactPage from "./containers/ContactPage";
import HomePage from "./containers/HomePage";
import PortfolioPage from "./containers/PortfolioPage";

function App() {
  return (
    <div>
      <ButtonGoUp />
      <NavBar />
      <HomePage />
      <AboutPage />
      <PortfolioPage />
      <BlogPage />
      <ContactPage />
    </div>
  );
}

export default App;
