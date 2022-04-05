import { Link, NavLink } from 'react-router-dom'
import './sidebar.scss'
import LogoS from './../../assets/images/logo-s.png'
import LogoSubtitle from './../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faGavel,
  faHome,
  faT,
  faUser,
  faVolleyball,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to={'/'}>
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contacts"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://kemerovo.hh.ru/resume/abdb3d94ff09cd003a0039ed1f7a345278784b"
          >
            <FontAwesomeIcon icon={faVolleyball} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://kemerovo.hh.ru/resume/abdb3d94ff09cd003a0039ed1f7a345278784b"
          >
            <FontAwesomeIcon icon={faGavel} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://kemerovo.hh.ru/resume/abdb3d94ff09cd003a0039ed1f7a345278784b"
          >
            <FontAwesomeIcon icon={faT} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://kemerovo.hh.ru/resume/abdb3d94ff09cd003a0039ed1f7a345278784b"
          >
            <FontAwesomeIcon icon={faT} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
