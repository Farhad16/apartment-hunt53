import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';
import jwt_decode from "jwt-decode";


const PrivateRoute = ({ children, ...rest }) => {
    const [signInUser, setSignInUser] = useContext(UserContext);

    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        } else {
            const decodedToken = jwt_decode(token);
            setSignInUser({ ...decodedToken })
            return decodedToken.email;
        }
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (signInUser.email || isLoggedIn()) ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;