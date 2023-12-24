import { useContext, createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import {
    LOADING, 
    DATA_FETCHED, 
    FETCHING_ERROR, 
    TOGGLE_SIDEBAR,
    ADD_TO_CART,
    DELETE_FROM_CART,
    CHANGE_AMOUNT,
    CLEAR_CART,
    UPDATE_CART
} from "./constants"

const AppContext = createContext();
const url = 'https://fakestoreapi.com/products';
const initialState = {
    cart: {
        items: [],
        amount: 0,
        subTotal: 0,
        shipFees: 5.3,
        total: 0
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
    function addToCart(item){
        dispatch({type: ADD_TO_CART, payload: item});
    }
    function changeAmount(id, effect){
        dispatch({type: CHANGE_AMOUNT, payload:{id, effect}});
    }
    function deleteFromCart(id){
        dispatch({type: DELETE_FROM_CART, payload: id});
    }
    function clearCart(){
        dispatch({type: CLEAR_CART});
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
        dispatch({type: UPDATE_CART});
    }, [state.cart.items]);

    useEffect(()=>{
        fetchProducts();
    }, []);

    

    return (
        <AppContext.Provider value={ {...state, toggleSidebar, addToCart, changeAmount, deleteFromCart, clearCart} }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}
export default AppProvider;