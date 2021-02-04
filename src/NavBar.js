import React from "react"
import {NavLink} from "react-router-dom"

function NavBar(){


    return(
        <nav className="nav-bar"> 
            <NavLink exact to="/">
                <strong>HOME</strong>
            </NavLink>
            <NavLink exact to="/budget">
                <strong>Budgets</strong>
            </NavLink>
            <NavLink exact to="/profile">
                <strong>Profile</strong>
            </NavLink>
        
        
        </nav>
    )
}

export default NavBar;