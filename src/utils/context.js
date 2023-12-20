import { useContext, createContext, useReducer } from "react";
import { reducer } from "./reducer";


const AppContext = createContext();

const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <AppContext.Provider value="hi mom!!!">
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}
export default AppProvider;