import React from 'react'
import { Route, Switch } from "react-router-dom";
import BudgetPage from './Components/BudgetRelated/BudgetPage';
import Home from './Home';
import Profile from './Components/ProfileRelated/Profile';



function MainContainer(){


    return( 
        <>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/budget">
                <BudgetPage/>
            </Route>
            <Route exact path="/profile">
                <Profile/>
            </Route>
        </Switch>
        </>
    )
}

export default MainContainer