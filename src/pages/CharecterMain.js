import React from 'react'
import Layout from '../layout/Layout'

import Faq from '../Components/Faq'
import Contact from '../Components/Contact'
import Collection from '../Components/Collection'
import SectionDivider from '../Components/SectionDivider'
import News from '../Components/News'
const CharecterMain = () => {
  return (
    <Layout pageTitle={"Charecter"}>
  
       {/* !Home Section #2 */}
       {/* Section About #2 */}
        <Collection/> 
       {/* !Section About #2 */}
       {/* Section Divider */}
       <SectionDivider />
       {/* !Section Divider */}
       {/* Collection Section */}
       <Faq/>
       {/* !Collection Section */}
       {/* Section Divider */}
   
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
  )
}

export default CharecterMain
