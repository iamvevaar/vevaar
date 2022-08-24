import React from 'react'
import "./services.css"
import {IoDiamond} from "react-icons/io5"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container servicesContainer">

        <article className='services'>
        <div className="servicesHead">
          <h3>Video Editing</h3>
        </div>
        <ul className="servicesList">
          <li>
            <IoDiamond className='serviceListIcon'/>
            <p>Editing</p>
          </li>
          <li>
            <IoDiamond className='serviceListIcon'/>
            <p>Editing</p>
          </li>
          <li>
            <IoDiamond className='serviceListIcon'/>
            <p>Editing</p>
          </li>
          <li>
            <IoDiamond className='serviceListIcon'/>
            <p>Editing</p>
          </li>
        </ul>        
        </article>

        <article className='services'>
        <div className="servicesHead">
          <h3>Content Creation</h3>
        </div>
        <ul className="servicesList">
          <li>
            <IoDiamond className='serviceListIcon'/>
            <p>Editing</p>
          </li>
          <li>
            <IoDiamond className='serviceListIcon'/>
            <p>Editing</p>
          </li>
          <li>
            <IoDiamond className='serviceListIcon'/>
            <p>Editing</p>
          </li>
          <li>
            <IoDiamond className='serviceListIcon'/>
            <p>Editing</p>
          </li>
          <li>
            <IoDiamond className='serviceListIcon'/>
            <p>Editing</p>
          </li>
        </ul>        
        </article>
        
        <article className='services'>
        <div className="servicesHead">
          <h3>Coding</h3>
        </div>
        <ul className="servicesList">
          <li>
            <IoDiamond className='serviceListIcon'/>
            <p>Editing</p>
          </li>
          <li>
            <IoDiamond className='serviceListIcon'/>
            <p>Editing</p>
          </li>
          <li>
            <IoDiamond className='serviceListIcon'/>
            <p>Editing</p>
          </li>
          <li>
            <IoDiamond className='serviceListIcon'/>
            <p>Editing</p>
          </li>
        </ul>        
        </article>

        
        
      </div>
    </section>
    )
}

export default Services