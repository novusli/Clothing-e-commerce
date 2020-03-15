import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }
    unsubscribeFromAuth = null

    componentDidMount() {
        // Open Subscription
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });

            console.log(user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
            <Header currentUser={ this.state.currentUser } />
            {/* Switch means ONLY render one of the Route inside (follow top-to-bottom order). */}
                <Switch>
                    {/* exact means if the path to be exactly same, not just including. 
                    If exact={false}, that means if the path includes '/', then render the page. */}
                    <Route exact path='/' component={ HomePage } />
                    <Route exact path='/shop' component={ ShopPage } />
                    <Route exact path='/signin' component={ SignInAndRegisterPage } />
                    {/* ":" means dynamicly changing value, and is accessed as params for the component  */}
                    {/* <Route path='/hats/:hatsId' component={ HatsPage } /> */}
                </Switch>
            </div>
        );
    }

    
}

export default App;
