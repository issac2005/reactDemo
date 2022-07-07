
export const addAction = (data) => ({type: 'ADD', data});

export const reduceAction = (data) => ({type: 'REDUCE', data});

export const addAsyncAction = (data) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addAction(data))
        }, 500)
    }
};
