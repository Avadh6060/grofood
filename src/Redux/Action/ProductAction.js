export const Action = {
    FatchAllProduct: "FatchAllProduct",
    SET_CART_ITEMS: "SET_CART_ITEMS",
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    SET_PRODUCT_DETAILS: "SET_PRODUCT_DETAILS",
    REMOVE_CARD_ITEM: "REMOVE_CARD_ITEM"
}

export const addAllProduct = (product) => {
    console.log(product);
    return {
        type: Action.FatchAllProduct,
        payload: product
    }
}

export const addToCart = (product) => {
    return {
        type: Action.SET_CART_ITEMS,
        payload: product
    }
}

export const itemIncrement = (product_id) => {
    return {
        type: Action.INCREMENT,
        payload: product_id
    }
}

export const setProductDetails = (product) => {
    console.log(product);
    return {
        type: Action.SET_PRODUCT_DETAILS,
        payload: product
    }
}

export const removeCardItem = (item_id) => {
    console.log(item_id);
    return {
        type: Action.REMOVE_CARD_ITEM,
        payload: item_id
    }
}
