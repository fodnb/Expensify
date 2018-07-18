import {BrowserRouter, Route, Switch} from "react-router-dom"
import React from "react";
import AddExpensePage from "./../components/AddExpensePage";
import EditExpensePage from "./../components/EditExpensePage";
import ExpenseDashboardPage from "./../components/ExpenseDashboardPage";
import Header from "./../components/Header";
import Help from "./../components/Help";
import NotFoundPage from "./../components/NotFoundPage";



const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header /><br/>
        <Switch>
        <Route path="/" exact={true} component={ExpenseDashboardPage}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={Help} />
        <Route component={NotFoundPage} />
        </Switch>
    </div>    
    </BrowserRouter>
);

export default AppRouter;
