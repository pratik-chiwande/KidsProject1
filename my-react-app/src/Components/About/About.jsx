import React from 'react'
import Banner from '../Home/Banner'
import Facility from '../Facility/Facility'
import Homeabout from '../Home/Hometeachers'
import Hometeachers from '../Home/Homeabout'
import WhyChoose from './Why Choose/WhyChoose'

function About() {
  return (
  <>
  <Banner props={{heading:"About our KidsAcademy" ,pages:"About us"}}/>
  <Facility/>
  <Homeabout/>
  <WhyChoose/>
  <Hometeachers/>
  </>
  )
}

export default About