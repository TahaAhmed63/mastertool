import About from "../Components/About";
import Collection from "../Components/Collection";
import Contact from "../Components/Contact";
import FunFacts from "../Components/FunFacts";
import HeroSlider from "../Components/HeroSlider";
import News from "../Components/News";
import RoadMapSlider from "../Components/RoadMapStep";
import SectionDivider from "../Components/SectionDivider";
import Layout from "../layout/Layout";
const Index = () => {
  return (
    <Layout pageTitle={"Home"}>
      {/* Home Section */}
      <HeroSlider />
      {/* !Home Section */}
      {/* Fun Facts */}
      <FunFacts />
      {/* !Fun Facts */}
      {/* About Section */}
      <About />
      {/* !About Section */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Collection Section */}
      <Collection />
      {/* !Collection Section */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section RoadMap */}
      <RoadMapSlider />
      {/* !Section RoadMap */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section News */}
      <News />
      {/* !Section News */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section */}
      <Contact />
    </Layout>
  );
};
export default Index;
