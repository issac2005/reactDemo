export default function PersonReducer(state = [], action) {
    const {type, data} = action;
    switch(type) {
        case 'ADDPERSON':
            return [data, ...state]
        default:
            return state
    }
}