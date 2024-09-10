import React from 'react'

const WhatWeOfferCrad = ({whatWeOfferArray}) => {
  return (
    <div className='flex w-auto sm:w-[30%] gap-2 flex-wrap flex-col rounded-lg border border-solid border-b-red-100-50 border-2 p-2'>
        <img className='rounded-lg object-cover w-full h-48' src={whatWeOfferArray.imgSrc} alt='img' />
        <p className='text-center font-mono font-bold'>{whatWeOfferArray.text}</p>
    </div>
  )
}
export default WhatWeOfferCrad;