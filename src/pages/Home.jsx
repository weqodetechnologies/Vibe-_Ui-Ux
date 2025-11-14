import React from 'react'

import Hero from '../components/Homepage/hero'
import Problems from '../components/Homepage/Problems'
import UIUX from '../components/Homepage/uiux'
import Sunday from '../components/Homepage/Sunday'


function home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Problems />
      <UIUX />
      <Sunday />
    </div>
  )
}

export default home
