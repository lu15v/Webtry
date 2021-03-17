import React,{createContext, useReducer} from 'react';


const initialState ={
    currentCompilation: "Default",
    switchCompilation: (data) => {}
}


const Context = createContext(initialState);

function reducer(state, action){
    switch(action.type){
        case 'SWITCH_COMPILATION':
            return{
                ...state,
                currentCompilation: action.payload
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

    return(
        <Context.Provider value={{currentCompilation: state.currentCompilation, switchCompilation}} {...props} />
    )
};

export {Context, Provider};