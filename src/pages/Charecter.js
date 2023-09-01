import React from 'react'
import Faq from '../Components/Faq'
import Contact from '../Components/Contact'
import Collection from '../Components/Collection'
import SectionDivider from '../Components/SectionDivider'
import News from '../Components/News'

const Charecter = () => {
  return (
    <div>
      <Collection/>
      <SectionDivider/>
      <Faq/>
      <SectionDivider/>
      <News/>
      <SectionDivider/>
      <Contact/>
    </div>
  )
}

export default Charecter
