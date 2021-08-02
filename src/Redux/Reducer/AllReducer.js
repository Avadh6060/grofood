import { Action } from "../Action/ProductAction";

export const InitialState = {
    Products: [],
    CartItem: [],
    OneProduct: []

}


export const defaultReducer = (state = InitialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case Action.FatchAllProduct:
            return { ...state, Products: action.payload };
        case Action.SET_CART_ITEMS:
            return { ...state, CartItem: [action.payload, ...state.CartItem] }
        case Action.SET_PRODUCT_DETAILS:
            return { ...state, OneProduct: [action.payload] }
        case Action.REMOVE_CARD_ITEM:
            console.log(action.payload);
            const filter_item = state.CartItem.filter((cure_id) => {
                return cure_id.food.foodId !== action.payload
            })
            console.log(filter_item);
            return { ...state, CartItem: filter_item };

        default:
            return state;
    }


}