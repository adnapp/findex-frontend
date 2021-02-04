import React from 'react'
import TransactionContainer from './BottomHalfBudgetPage/TransactionContainer'
import CategoryContainer from './TopHalfBudgetPage/CategoryContainer'
import MonthGraph from './TopHalfBudgetPage/MonthGraph'


function OverviewPage(){


    return(
        <>
        <h4>budgeting page, month selection here</h4>
        <div className="top-half-budget-page">
            <MonthGraph/>
            <CategoryContainer/>
        </div>
        <div className="bottom-half-budget-page">
            <TransactionContainer/>
        </div>
        </>
    )
}


export default OverviewPage