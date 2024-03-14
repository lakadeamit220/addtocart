export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}


//remove items
export const RMV = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}


//remove one items
export const REMOVE = (item) => {
    return {
        type: "REMOVE_ONE",
        payload: item
    }
}