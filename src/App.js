import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => {
    // console.log(props);
    return(
        <div>
        {/* <Link to='/'>Homepage</Link> */}
        {/* <Link to={`${props.match.url}/21`} > To Detail</Link> */}
        {/* <button onClick={() => props.history.push('/')} >Homepage</button> */}
            <h1>HATS PAGE</h1>
            {/* <p>Hats ID: {props.match.params.hatsId}</p> */}
        </div>
    )
}


function App() {
    return (
        <div>
        {/* Switch means ONLY render one of the Route inside (follow top-to-bottom order). */}
            <Switch>
                {/* exact means if the path to be exactly same, not just including. 
                If exact={false}, that means if the path includes '/', then render the page. */}
                <Route exact path='/' component={ HomePage } />
                <Route exact path='/hats' component={ HatsPage } />
                {/* ":" means dynamicly changing value, and is accessed as params for the component  */}
                {/* <Route path='/hats/:hatsId' component={ HatsPage } /> */}
            </Switch>
        </div>
    );
}

export default App;
