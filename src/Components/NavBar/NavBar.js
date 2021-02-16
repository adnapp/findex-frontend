import React, {useContext, useState} from "react"
import {Link, useHistory} from "react-router-dom"
import { LoginContext } from "../../Login"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {NavBarData} from './NavBarData'
import './NavBar.css';
import {IconContext} from 'react-icons'

function NavBar(){
    const {loggedIn, toggle} = useContext(LoginContext)
    const history = useHistory()
    const [navBar, setNavBar] = useState(false)

    const showNavBar = () => setNavBar(!navBar);

    return (
        <>
        <IconContext.Provider value={{color:'fff'}}>
            <div className="navBar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showNavBar}/> 
                </Link>
                <p>Hello</p>
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







    // const headerLinksObj = () => {
    //    return(
    //    <>
    //     <li>
    //         <NavLink exact to="/budget">
    //             <strong>BUDGETS</strong>
    //         </NavLink>
    //     </li>
    //     <li>
    //         <NavLink exact to="/profile">
    //             <strong>PROFILE</strong>
    //         </NavLink>
    //     </li>
    //     <li>
    //         <NavLink exact to="/investments">
    //             <strong>INVESTMENTS</strong>
    //         </NavLink>
    //     </li>
    //     </>)
    // }

    // return(
    //     <nav className="nav-bar"> 
    //     <ul>
    //         <li>
    //             <NavLink exact to="/">
    //                 <strong>HOME</strong>
    //             </NavLink>
    //         </li>
            
    //         {loggedIn ? headerLinksObj() : history.push(`/`)}         

    //         <li className="login" onClick={toggle}>
    //             {loggedIn ? "LOGOUT" : "LOGIN"}
    //         </li>
            
    //     </ul>
        
    //     </nav>
    // )
}

export default NavBar;