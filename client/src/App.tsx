import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { AuthProvider } from './context/AuthContext';
import { MessageProvider } from './context/chatMessage';
import LandingPage from './pages/Landing-Page/LandingPage';
import Prepare from './pages/preparePages/prepare';

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
                                style={{ backgroundColor: '#000', height: '100vh', width: '100%' }}
                            >
                                <h1 className="text-2xl font-bold">LOADING .......</h1>
                            </div>
                        }
                    >
                        <Route exact path="/signin" component={Signin} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/prepare/:roomid" component={Prepare} />
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
