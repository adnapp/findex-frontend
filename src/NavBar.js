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
                <strong>Budgets</strong>
            </NavLink>
        </li>
        <li>
            <NavLink exact to="/profile">
                <strong>Profile</strong>
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

        </ul>
        
        <p className="login" onClick={toggle}>{loggedIn ? "LOGOUT" : "LOGIN"}</p>
        </nav>
    )
}

export default NavBar;