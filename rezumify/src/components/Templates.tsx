import React from 'react'
import { Link } from 'react-router-dom'
import templateOne from '../Assets/templateOne.jpg'
import templateTwo from '../Assets/templateTwo.jpg'
import templateThree from '../Assets/templateThree.png'

const Templates = () => {
  return (
    <div>
        <h1>Select a Template</h1>

        <div>
            <Link to='/templates/original'>
                <img src={templateOne} alt='resume-template'/>
            </Link>
            
            <Link to='/templates/fancy'>
                <img src={templateTwo} alt='resume-template'/>
            </Link>
            
            <Link to='/templates/simple'>
                <img src={templateThree} alt='resume-template'/>
            </Link>
        </div>
    </div>
  )
}

export default Templates