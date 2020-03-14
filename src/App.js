import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
    return (
        <div>
        {/* Switch means ONLY render one of the Route inside (follow top-to-bottom order). */}
            <Switch>
                {/* exact means if the path to be exactly same, not just including. 
                If exact={false}, that means if the path includes '/', then render the page. */}
                <Route exact path='/' component={ HomePage } />
                <Route path='/shop' component={ ShopPage } />
                {/* ":" means dynamicly changing value, and is accessed as params for the component  */}
                {/* <Route path='/hats/:hatsId' component={ HatsPage } /> */}
            </Switch>
        </div>
    );
}

export default App;
