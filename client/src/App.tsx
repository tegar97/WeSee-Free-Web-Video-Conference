import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { AuthProvider } from './context/AuthContext';
import { MessageProvider } from './context/chatMessage';
import LandingPage from './pages/Landing-Page/LandingPage';

import PrivateRoute from './private-route/PrivateRoute';

const App: React.FC = () => {
    const Room = React.lazy(() => import('./pages/Room/Room'));
    const Signin = React.lazy(() => import('./pages/Login/Login'));
    const SignUp = React.lazy(() => import('./pages/signup/SignUp'));

    return (
        <AuthProvider>
            <Router>
                <ReactTooltip />

                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Suspense
                        fallback={
                            <div
                                className="flex items-center justify-center text-white"
                                style={{ backgroundColor: '#fff' }}
                            >
                                <h1>LOADING .......</h1>
                            </div>
                        }
                    >
                        <Route exact path="/signin" component={Signin} />
                        <Route exact path="/signup" component={SignUp} />
                        <MessageProvider>
                            <PrivateRoute exact path="/room/:id" component={Room} />
                        </MessageProvider>
                    </Suspense>
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
