import {Router, Route, Switch} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import React from "react";
import AddExpensePage from "./../components/AddExpensePage";
import EditExpensePage from "./../components/EditExpensePage";
import ExpenseDashboardPage from "./../components/ExpenseDashboardPage";
import Help from "./../components/Help";
import NotFoundPage from "./../components/NotFoundPage";
import Login from "./../components/Login";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
        <PublicRoute path="/" exact={true} component={Login}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={Help} />
        <Route component={NotFoundPage} />
        </Switch>
    </div>    
    </Router>
);

export default AppRouter;
