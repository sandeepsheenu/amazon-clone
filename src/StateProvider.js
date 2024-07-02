// setup data layer
// we need this to track basket 

import { Children, createContext,useContext,useReducer } from "react";

export const StateContext=createContext();

// build a provider
export const StateProvider=({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>   
);
// this is how we use it insise a cpmoonent
const UseStateValue = () =>useContext(StateContext)
export default UseStateValue