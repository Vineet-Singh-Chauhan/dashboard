import {createContext, useReducer} from "react";
import toggleReducer from "./toggleReducer";

const INITIAL_STATE = {
    toggle:false
}

export const toggleContext = createContext(INITIAL_STATE)

export const ToggleContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(toggleReducer,INITIAL_STATE);
    return(
        <toggleContext.Provider value={{toggle:state.toggle,dispatch}}>
            {children}
        </toggleContext.Provider>
    )
}