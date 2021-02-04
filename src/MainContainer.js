import React from 'react'
import { Route, Switch } from "react-router-dom";
import OverviewPage from './Components/BudgetRelated/OverviewPage';
import Home from './Home';
import Profile from './Components/ProfileRelated/Profile';



function MainContainer(){


    return( 
        <>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/overview">
                <OverviewPage/>
            </Route>
            <Route exact path="/profile">
                <Profile/>
            </Route>




        </Switch>



        </>
    )
}

export default MainContainer