import { fecthApi } from "../utils";

const init = {
    load: true,
    data: [],
    error: null,
    message: ''
}

const getProduct = () => {
    return async (dispatch) => {
        await dispatch({
            type: "PRODUCT_INIT"
        })
        await fecthApi().get('/product').then((Response) => {
            dispatch({
                type: "PRODUCT_FETCH_SUCCESS",
                payload:{
                data: response?.data?.data,
                message: response?.data?.message,
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: "PRODUCT_FETCH_FAIL",
                payload: {
                error: error.Response
                }
            })
        })
    }
}

const productReducer = (state = init, action) => {
    switch (action.type) {
        case "PRODUCT_INIT":
            return state 
        case "PRODUCT_FETCH_SUCCESS":
            return {
                ...state,
                data: action?.payload?.data,
                message: action?.payload?.message
            }
        case "PRODUCT_FETCH_FAIL":
            return {
                ...state,
                load: false,
                data: [],
                error: action?.payload?.error
            } 
            default:
                return init
    }
}


export {
    productReducer,
    getProduct
}