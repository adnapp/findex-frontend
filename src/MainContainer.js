import React from 'react'
import { Route, Switch } from "react-router-dom";
import BudgetPage from './Components/BudgetRelated/BudgetPage';
import Home from './Components/HomePage/Home';
import InvestmentMain from './Components/InvestmentRelated/InvestmentMain';
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
            <Route exact path="/investments">
                <InvestmentMain/>
            </Route>
        </Switch>
        </>
    )
}

export default MainContainer