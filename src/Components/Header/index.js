import {withRouter} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
// import {AiFillHome} from 'react-icons/ai'
// import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'


import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    history.replace('/signup')
  }
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className='nav-head'>Jaipur <span className='span-logo'>Marketing</span></h1>
        <ul className="nav-items">
          <li className="logout-btn-list-item-small">
            <button
              type="button"
              className="logout-button-sm"
              onClick={onClickLogout}
            >
              <FiLogOut className="logout-icon-sm" aria-label="logout"/>
            </button>
          </li>
          <li className='logout-btn-list-item-small'>
            <button type="button">
            <GiHamburgerMenu aria-label="hamburger" />
            </button>
            
          </li>
        </ul>
        <button
          type="button"
          className="logout-button-lg"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
