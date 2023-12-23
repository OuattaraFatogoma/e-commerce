import { useContext, createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import {
    LOADING, 
    DATA_FETCHED, 
    FETCHING_ERROR, 
    TOGGLE_SIDEBAR
} from "./constants"

const AppContext = createContext();
const url = 'https://fakestoreapi.com/products';
const initialState = {
    cart: {
        items: [],
        amount: 0,
        total: 0,
    },
    products: [],
    isLoading: true,
    isLogin: false,
    isSidebarOpen: false,
}
const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    function toggleSidebar() {
        dispatch({type: TOGGLE_SIDEBAR})
    }
    async function fetchProducts(){
        try {
            dispatch({type: LOADING});
            const response = await fetch(url);
            const products = await response.json();
            dispatch({type: DATA_FETCHED, payload: products});
        } catch (error) {
            dispatch({type: FETCHING_ERROR, payload: error});
        }
    }


    useEffect(()=>{
        fetchProducts();
    }, [])

    return (
        <AppContext.Provider value={ {...state, toggleSidebar} }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}
export default AppProvider;