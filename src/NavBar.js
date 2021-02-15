import React, {useContext, useState} from "react"
import {NavLink, useHistory} from "react-router-dom"
import { LoginContext } from "./Login"

function NavBar(){
    const {loggedIn, toggle} = useContext(LoginContext)
    const history = useHistory()

    const headerLinksObj = () => {
       return(
       <>
        <li>
            <NavLink exact to="/budget">
                <strong>BUDGETS</strong>
            </NavLink>
        </li>
        <li>
            <NavLink exact to="/profile">
                <strong>PROFILE</strong>
            </NavLink>
        </li>
        <li>
            <NavLink exact to="/investments">
                <strong>INVESTMENTS</strong>
            </NavLink>
        </li>
        </>)
    }

    return(
        <nav className="nav-bar"> 
        <ul>
            <li>
                <NavLink exact to="/">
                    <strong>HOME</strong>
                </NavLink>
            </li>
            
            {loggedIn ? headerLinksObj() : history.push(`/`)}         

            <li className="login" onClick={toggle}>
                {loggedIn ? "LOGOUT" : "LOGIN"}
            </li>
            
        </ul>
        
        </nav>
    )
}

export default NavBar;