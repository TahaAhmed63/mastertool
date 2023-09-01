import { About2 } from "../Components/About";
import Collection from "../Components/Collection";
import Contact from "../Components/Contact";
import Faq from "../Components/Faq";
import News from "../Components/News";
// import RoadMapSlider from "../Components/RoadMapStep";
import SectionDivider from "../Components/SectionDivider";
import WaterHero from "../Components/WaterHero";
import Layout from "../layout/Layout";
import AllCharecter from "../Components/allCharecter";
import { useEffect } from "react";


// const WaterHero = dynamic(() => import("../Components/WaterHero"), {
//   ssr: false,
// });

const Index4 = () => {
  useEffect(() => { 
 
    window.scrollTo(0,0)

 }, []);
  return (
    <Layout pageTitle={"Home #4"}>
      <WaterHero />
      {/* !Home Section #2 */}
      {/* Section About #2 */}
      <About2 />
      {/* !Section About #2 */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Collection Section */}
      <Collection />
      {/* !Collection Section */}
      {/* Section Divider */}
      <SectionDivider />
      <AllCharecter/>
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section FAQ */}
      <Faq />
      {/* !Section FAQ */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section RoadMap */}
      {/* <RoadMapSlider /> */}
      {/* !Section RoadMap */}
      {/* Section Divider */}

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
export default Index4;
