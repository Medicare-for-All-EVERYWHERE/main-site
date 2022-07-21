import * as React from "react"
import Logo from "../images/logo.png"
import { Link } from 'gatsby'
import '../styles/Footer.scss'
import {FooterSocialLinks} from '../helpers/constants'

const Footer = ({organization='Medicare for All EVERYWHERE'}) =>
  <footer>
    <div className='container'>
      <div className='socialMediaLinks'>
      {
        FooterSocialLinks.map(link => <a href={link.url} title={link.title} target='_blank' rel='noreferrer'><img src={link.logo} alt={link.title}/></a>)
      }
      </div>
      <Link href='/' target='_blank' rel='noopener noreferrer'><img src={Logo} alt="Logo"/></Link>
      <p>© {organization} {new Date().getFullYear()}.</p>
    </div>
  </footer>

export default Footer
