import {
    LOADING, 
    DATA_FETCHED, 
    FETCHING_ERROR, 
    TOGGLE_SIDEBAR,
    ADD_TO_CART,
    DELETE_FROM_CART,
    CHANGE_AMOUNT,
    CLEAR_CART,
    UPDATE_CART,
} from "./constants"

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
            return {...state, isSidebarOpen: !state.isSidebarOpen};
        case ADD_TO_CART:
            const newCart = { ...state.cart ,items : state.cart.items.concat(action.payload)};
            return {...state, cart: newCart}

        case CHANGE_AMOUNT:
            const newItem = state.cart.items.find(item => item.id === action.payload.id);
            
            if(newItem){
                if(action.payload.effect === "inc"){
                    newItem.amount += 1;
                }
                else if(action.payload.effect === "dec"){
                    newItem.amount -= 1; 
                }
                const newCart = { ...state.cart ,items : state.cart.items.map(item => item.id === action.payload.id ? item = newItem : item)};
                return {...state, cart: newCart}
            }
            return state;

        case DELETE_FROM_CART:
            return { ...state, cart: {...state.cart, items : state.cart.items.filter(item => item.id !== action.payload)}}
        
        case CLEAR_CART:
            return { ...state, cart: {...state.cart, items : []}}
        
        case UPDATE_CART:
            let { amount, subTotal} = state.cart.items.reduce((cartUpdate, item) =>{
                const itemAmount = item.amount;
                const itemSubTotal = itemAmount * item.price;
                cartUpdate.amount += itemAmount;
                cartUpdate.subTotal += itemSubTotal;
                return cartUpdate;
            }, { amount: 0, subTotal: 0});


            subTotal = parseFloat(subTotal.toFixed(2));
            let total = subTotal+state.cart.shipFees;
            total = parseFloat(total.toFixed(2));
            const cartUpdate = {...state.cart, amount: amount, subTotal: subTotal, total: total};
            return {...state, cart: cartUpdate}
        
    default:  return state;
    }
}