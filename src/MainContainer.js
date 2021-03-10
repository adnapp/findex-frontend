import React from 'react'
import { Route, Switch } from "react-router-dom";
import BudgetPage from './Components/BudgetRelated/BudgetPage';
import Home from './Components/HomePage/Home';
import InvestmentDetail from './Components/InvestmentRelated/InvestmentDetail';
import InvestmentMain from './Components/InvestmentRelated/InvestmentMain';
import Profile from './Components/ProfileRelated/Profile';



function MainContainer(){


    return( 
        <div className='main-container-div'>
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
            <Route path="/investments/:id">
                <InvestmentDetail/>
            </Route>
            <Route exact path="/investments">
                <InvestmentMain/>
            </Route>
        </Switch>
        </div>
    )
}

export default MainContainer