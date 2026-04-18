import React from 'react'
import Banner from '../Home/Banner'
import Teachers from './Teachers'

function TeachersPage() {
  return (
    <>
    <Banner props={{heading:'Meet Our Teachers',pages:"Teachers"}}/>
    <Teachers/>
    </>
  )
}

export default TeachersPage