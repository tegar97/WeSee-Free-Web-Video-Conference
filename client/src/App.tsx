import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/dasboard" component={Dasboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Register} />
                    <Route path="/room" component={Room} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
