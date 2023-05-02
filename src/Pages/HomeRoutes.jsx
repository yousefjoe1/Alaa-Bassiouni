import React from 'react'

import nadaimg from '../imgs/nada-hero.jpg'

const HomeRoutes = () => {
  return (
    <div className='text-center'>
        <h1 className='shadow-md p-2'>المهندس علاء<br />(Alaa Eng)</h1>

        <h2>قريبا ..........</h2>

        <div className='max-w-[600px] mx-auto mt-2'>
            <img src={nadaimg} alt="" />
        </div>
        
    </div>
  )
}

export default HomeRoutes