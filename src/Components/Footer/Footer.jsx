import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Ajmal.</h1>

            <ul className='footer__list'>
                <li>
                    <a href='#about' className='footer__link'>About</a>
                </li>
                <li>
                    <a href='#portfolio' className='footer__link'>Projects</a>
                </li>
                <li>
                    <a href='#testimonials' className='footer__link'>Testimonials</a>
                </li>
            </ul>

            <div className='footer__social'>
               <a href='https://www.instagram.com/ajmalashrf/?hl=en' className='footer__social-link' target='_blank' rel="noreferrer" >
               <i className="uil uil-instagram"></i>
               </a>
               <a href='https://www.linkedin.com/in/ajmal-ashraf-3b2733269/' className='footer__social-link'  target='_blank' rel="noreferrer" >
               <i className="uil uil-linkedin"></i>
               </a>
               <a href='https://github.com/ajmal-ashraf' className='footer__social-link'  target='_blank' rel="noreferrer" >
               <i className="uil uil-github"></i>
               </a>
            </div>

            <span className='footer__copy'>
            Copyright © 2021.All Right Reserved. <br/>Designed and Devoloped by <a href='https://www.instagram.com/ajmalashrf/'>@ajmalashrf</a>
            </span>
        </div>
    </footer>
  )
}

export default Footer
