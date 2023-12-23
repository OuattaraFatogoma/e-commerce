import {LOADING, DATA_FETCHED, FETCHING_ERROR, TOGGLE_SIDEBAR} from "./constants"

export const reducer =(state, action)=>{
    switch(action.type){
        case LOADING: return {...state, isLoading: true};
        case DATA_FETCHED: 
            const products= action.payload.map(product => {
                product.amout=0;
                return product;
            }) 
            return {...state,isLoading: false, products: products};
        case FETCHING_ERROR:
            console.error(action.payload);
            return {...state,isLoading: false};
        case TOGGLE_SIDEBAR : 
            console.log('Toggle sidebar')
            return {...state, isSidebarOpen: !state.isSidebarOpen};
    default:  return state;
    }
}