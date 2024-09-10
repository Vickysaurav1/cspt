import React from 'react'
import Hero from './Hero'
import WhatWeOffer from './WhatWeOffer'


const Body = () => {
  return (
    <div className='w-screen h-auto p-4 sm:p-8 pb-3 flex flex-col gap-4'>
      <Hero/>
      <WhatWeOffer/>

    </div>
  )
}

export default Body