import React,{createContext, useReducer} from 'react';
import jwtDecode from 'jwt-decode';

const initialState ={
    currentCompilation: "Default",
    user: null,
    switchCompilation: (data) => {},
    userLogin: (data) => {},
    logout: () => {}
}

if(localStorage.getItem('token')){
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    console.log("token, ", decodedToken.exp * 1000)
    console.log("datenow", Date.now())
    if(decodedToken.exp * 1000 < Date.now()){
        localStorage.removeItem('token');
    }else{
        initialState.user = decodedToken;
    }
}

const Context = createContext(initialState);

function reducer(state, action){
    switch(action.type){
        case 'SWITCH_COMPILATION':
            return{
                ...state,
                currentCompilation: action.payload
            }
        case 'LOGIN':
            return{
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return{
                ...state,
                user: null
            }
        default:
            return state;
    }
}

function Provider(props){
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const switchCompilation = (data) =>{
        dispatch({
            type: 'SWITCH_COMPILATION',
            payload: data
        });
    }

    const userLogin = (data) =>{
        localStorage.setItem("token", data.token );
        dispatch({
            type: 'LOGIN',
            payload: data
        });
    }

    const logout = () =>{
        localStorage.removeItem("token");
        dispatch({
            type: 'LOGOUT'
        });
    }

    return(
        <Context.Provider value={{currentCompilation: state.currentCompilation, switchCompilation, user: state.user, userLogin, logout}} {...props} />
    )
};

export {Context, Provider};