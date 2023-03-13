import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
       <div className='about__box'>
         <i className='bx bx-award about__icon'></i>
         <h3 className='about__title'>Creative.</h3>
         <span className='about__title'>exploring design trends</span>
       </div>
       <div className='about__box'>
         <i className='bx bx-briefcase-alt about__icon'></i>
         <h3 className='about__title'>Completed</h3>
         <span className='about__title'>3 + Projects</span>
       </div>
       <div className='about__box'>
         <i className='bx bx-support about__icon'></i>
         <h3 className='about__title'>Support</h3>
         <span className='about__title'>Online 24/7</span>
       </div>
    </div>
  )
}

export default Info
