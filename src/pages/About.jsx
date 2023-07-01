import React from 'react'
import {FaHotjar} from 'react-icons/fa'
const About = () => {
  return (
    <>
      <h1 className='text-6xl mb-4 text-red-300'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.
        <br/>
        With a better UI for collective outlook on the profiles
        <br/><br/>
        
        <div className='flex flex-row'>
            Made by <a href='https://www.linkedin.com/in/getatanu/' target="_blank" className='text-red-300 font-semibold'>&nbsp; Atanu</a><div className='pl-4'> <FaHotjar/> </div> 
        </div>
        </p>
    </>
  )
}

export default About