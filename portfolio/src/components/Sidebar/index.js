import {Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faSkype} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome , faUser} from '@fortawesome/free-solid-svg-icons'

const  Sidebar =() => (
    <div className ='nav-bar'>
         <Link className = 'logo' to='/'>
            <img src={LogoS} alt ="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt ="slobodan"/>
         </Link>
        <nav>
            <NavLink exact="true"  activeClassname="active" to="/">
                 <FontAwesomeIcon icon ={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" 
            activeClassname="active" 
            className="about-link" 
            to="/about">
                 <FontAwesomeIcon icon ={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" 
            activeClassname="active" 
            className="contact-link" 
            to="/contact">
                 <FontAwesomeIcon icon ={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
          <li>
               <a 
               target="_blank" 
               rel='noreferrer' 
               href="https://www.linkedin.com/in/sneha-mittal-334a6b223/">
                    <FontAwesomeIcon icon ={faLinkedin} color="#4d4d4e" />
               </a>
          </li>

          <li>
               <a 
               target="_blank" 
               rel='noreferrer' 
               href="https://github.com/Sneha-Mittal88293">
                    <FontAwesomeIcon icon ={faGithub} color="#4d4d4e" />
               </a>
          </li>

          <li>
               <a 
               target="_blank" 
               rel='noreferrer' 
               href="skype:live:.cid.d97a9a4f2b53eeaa">
                    <FontAwesomeIcon icon ={faSkype} color="#4d4d4e" />
               </a>
          </li>
        </ul>

    </div>
)

export default Sidebar