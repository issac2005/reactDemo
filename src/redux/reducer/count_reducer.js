export default function CountReducer(state = {value: 0}, action) {
    const {type, data} = action;
    switch(type) {
        case 'ADD':
            return {value: state.value + data.value}
        
        case 'REDUCE':
            return {value: state.value - data.value}
        
        default:
            return state
    }
}