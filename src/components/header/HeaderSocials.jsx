import React from 'react'
import './header.css'
import {BsLinkedin} from  'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from  'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://twiter.com" target="_blank"><FaGithub/></a>
        <a href="https://github.com" target="_blank"><BsTwitter/></a>


    </div>
  )
}

export default HeaderSocials