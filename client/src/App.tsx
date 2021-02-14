import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { AuthProvider } from './context/AuthContext';
import { MessageProvider } from './context/chatMessage';
import Dasboard from './pages/Dasboard/Dasboard';
import LandingPage from './pages/Landing-Page/LandingPage';
import Login from './pages/Login/Login';
import Prepare from './pages/preparePages/prepare';
import Room from './pages/Room/Room';
import SignUp from './pages/signup/SignUp';
import PrivateRoute from './private-route/PrivateRoute';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <ReactTooltip />

                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/dasboard" component={Dasboard} />
                    <Route exact path="/signin" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/prepare" component={Prepare} />
                    <MessageProvider>
                        <PrivateRoute exact path="/room/:id" component={Room} />
                    </MessageProvider>
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
