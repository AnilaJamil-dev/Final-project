export const reducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART": {
            return { ...state, cart: [...state.cart, action.payload] }
        }
        case "CLEAR_CART":
            return { ...state, cart: [] }
        case "DELETE_ITEM": {
            const updatedCart = state.cart.filter((item) => item._id !== action.payload);
            return { ...state, cart: updatedCart };
        }
        // case "INCREASE_QUANTITY":
        //     return {
        //         ...state, cart: state.cart.map(item => {
        //             if (item._id === action.payload._id) {
        //                 return {
        //                     ...item,
        //                     productQuantity: item.Quantity + 1
        //                 }
        //             }
        //             return item
        //         })
        //     }

        // case "DECREASE_QUANTITY":
        //     return {
        //         ...state, cart: state.cart.map(item => {
        //             if (item._id === action.payload._id) {
        //                 return {
        //                     ...item,
        //                     productQuantity: item.Quantity - 1
        //                 }
        //             }
        //             return item
        //         })
        //     }

            default:
                return state;
        }
    
    }