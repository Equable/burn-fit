import React from 'react';
import { Router, Route, Redirect } from 'react-router'
import { createBrowserHistory } from 'history';
import Home from 'pages/Home';

const browserHistory = createBrowserHistory();

const routePaths = Object.freeze({
    root: '/',
});

const Routes = ({}) => {
    return(
        <Router history={browserHistory}>
            <Route path={routePaths.root} component={Home} />
        </Router>
    )
}

export default Routes;
export { routePaths };