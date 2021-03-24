import React,{useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Context} from '../context/context';


const AuthRoute = ({component: Component, ...rest})=>{
    const {user} = useContext(Context);

    return(
        <Route {...rest} render={props => user ? <Component {...props}/> : <Redirect to ="/" />}/>
    )
}

export default AuthRoute;