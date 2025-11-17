import React from 'react'

import Hero from '../components/Homepage/hero'
import Problems from '../components/Homepage/Problems'
import UIUX from '../components/Homepage/uiux'
import Sunday from '../components/Homepage/Sunday'
import Incubator from '../components/Homepage/Incubator'
import Testimonials from '../components/Homepage/Testimonial'
import Unlock from '../components/Homepage/Unlock'
import Contact from '../components/Homepage/Contact'
import Gallary from '../components/Homepage/Gallary'


function home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Problems />
      <UIUX />
      <Sunday />
      <Incubator />
      <Gallary />
      <Testimonials />
      <Contact />
      <Unlock />
      
    </div>
  )
}

export default home
