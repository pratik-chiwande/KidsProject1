import React from 'react'
import Homebanner from './Homebanner'
import './Home.css'
import Facility from '../Facility/Facility'
import Homeabout from './Homeabout'
import Homepopular from './Homepopular'
import Hometeachers from './Hometeachers'
import Homegallery from './Homegallery'

function Home() {
  return (
    <>
    <section className="Home">
        <Homebanner/>
        <Facility/>
        <Homeabout/>
        <Homepopular/>
        <Hometeachers/>
        <Homegallery/>
    </section>
    </>
  )
}

export default Home