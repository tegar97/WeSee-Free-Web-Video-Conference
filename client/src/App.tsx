import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { AuthProvider } from './context/AuthContext';
import Dasboard from './pages/Dasboard/Dasboard';
import LandingPage from './pages/Landing-Page/LandingPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Room from './pages/Room/Room';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <ReactTooltip />

                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/dasboard" component={Dasboard} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Register} />
                    <Route exact path="/room" component={Room} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
