
const updateProductListAction = (products) => {
    return {
        type: "UPDATE_PRODUCT_LIST",
        data : products
    }
};

const searchAction = (searchString) => {
    return {
        type: "SEARCH",
        data : searchString
    }
};

const sortAction = (sortBy) => {
    return {
        type: "SORT",
        data : sortBy
    }
};

const PLPActions = {
    loadProductsData : () => {
        return (dispatch) => {
            fetch("products.json")
                .then( resp => {
                    resp.json().then( data => {
                        dispatch(updateProductListAction(data));
                    })
                })
                .catch((e)=>{
                    console.log("ERROR LOADING FILE", e);
                })
        }
    },

    search : (string)=> {
        return (dispatch) => {
            dispatch(searchAction(string));
        }
    },

    sort : (string)=> {
        return (dispatch) => {
            dispatch(sortAction(string));
        }
    }

};

export default PLPActions;