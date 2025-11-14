import React from 'react'

import Hero from '../components/Homepage/hero'
import Problems from '../components/Homepage/Problems'
import UIUX from '../components/Homepage/uiux'
import Sunday from '../components/Homepage/Sunday'
import Incubator from '../components/Homepage/Incubator'


function home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Problems />
      <UIUX />
      <Sunday />
      <Incubator />
    </div>
  )
}

export default home
