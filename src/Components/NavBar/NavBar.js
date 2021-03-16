import React, { useState} from "react";
import {Link} from "react-router-dom";
// import { LoginContext } from "../../Login";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {IconContext} from 'react-icons';
import {NavBarData} from './NavBarData';
import Logo from '../images/findexLargerLogo.png';
import './NavBar.css';

function NavBar(){
    // const {loggedIn, toggle} = useContext(LoginContext)
    // const history = useHistory()

    const [navBar, setNavBar] = useState(false)

    const showNavBar = () => setNavBar(!navBar);
    return (
        <>
        <IconContext.Provider value={{color:'fff'}}>
            <div className="navBar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showNavBar}/> 
                </Link>
                <Link exact to="/">
                    <img src={Logo} alt="top-logo" className="top-title" width="200" height = "60"/>
                </Link>

            </div>
            <nav className={navBar ? "nav-menu active" : "nav-menu"}>
                <ul className='nav-menu-items' onClick={showNavBar}>
                    <li className="navBar-toggle">
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {NavBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
           
            </nav>
        </IconContext.Provider>

        </>
    )

}

export default NavBar;