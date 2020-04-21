import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {
    
    unsubscribeFromAuth = null

    componentDidMount() {
        const { setCurrentUser } = this.props;

        // Open Subscription
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser ({
                        id: snapShot.id,
                        // ...snapShot.data() is an object containing the data
                        ...snapShot.data()
                    })
                });  
            }
            else {
                setCurrentUser(userAuth);
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
            <Header />
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

const mapDispatchToPros = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToPros)(App);
