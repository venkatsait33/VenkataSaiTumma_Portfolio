import Card from "../components/Card";
import CardTitles from "../components/CardTitles";
import { FloatingDockDemo } from "../components/FloatingDock";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProjectList from "../components/ProjectList";
import TechStack from "../components/TechStack";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CardTitles />
      <ProjectList />
      <TechStack />
      <Footer />
    </div>
  );
};
export default Home;
