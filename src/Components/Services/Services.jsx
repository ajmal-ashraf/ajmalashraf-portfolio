import React, { useState } from 'react'
import './Services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className='services section' id='services'>
       <h2 className='section__title'>Services.</h2>
       <span className='section__subtitle'>What i offer.</span>

       <div className='services__container container grid'>
        <div className='services__content'>
            <div>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className='services__title'>Web <br/> Development.</h3>
            </div>
            <span className='services__button' onClick={() => toggleTab(1)}>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className='services__modal-content'>
                    <i className='uil uil-times services__modal-close'  onClick={() => toggleTab(0)}></i>

                    <h3 className='services__modal-title'>Web Development.</h3>
                    <p className='services__modal-description'>
                    Providing quality and effecient web pages that is aestheticaly pleasing and user friendly.
                    </p>

                    <ul className='services__modal-services grid'>
                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>
                            Website and software application designing, building, or maintaining.
                            </p>
                        </li>

                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>
                            Determining user needs by analyzing technical requirements.
                            </p>
                        </li>

                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>
                            Evaluating code to ensure it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems.
                            </p>
                        </li>

                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>
                            Identifying problems uncovered by customer feedback and testing, and correcting or referring problems to appropriate personnel for correction.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='services__content'>
            <div>
                <i className='uil uil-arrow services__icon'></i>
                <h3 className='services__title'>UI/UX <br/> Designs.</h3>
            </div>
            <span className='services__button' onClick={() => toggleTab(2)}>View More
            <i className='uil uil-arrow-right services__button-icon'></i>
            </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className='services__modal-content'>
                    <i className='uil uil-times services__modal-close'  onClick={() => toggleTab(0)}></i>

                    <h3 className='services__modal-title'>UI/UX Designer.</h3>
                    <p className='services__modal-description'>
                    Providing quality and effecient UI/UX Designs that is aestheticaly pleasing and user friendly.
                    </p>

                    <ul className='services__modal-services grid'>
                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>
                            Investigating user experience design requirements for our suite of digital assets.
                            </p>
                        </li>

                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>
                            Developing and conceptualizing a comprehensive UI/UX design strategy for the brand.
                            </p>
                        </li>

                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>
                            Designing UI elements and tools such as navigation menus, search boxes, tabs, and widgets for our digital assets.
                            </p>
                        </li>

                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>
                            Producing high-quality UX design solutions through wireframes, visual and graphic designs, flow diagrams, storyboards, site maps, and prototypes.
                            </p>
                        </li>

                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>
                            Adhering to style standards on typography and graphic design.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       </div>
    </section>
  )
}

export default Services
