export const chooseTZ = (state, {target:{value}}) => ({
    ...state,
    chosenTZ: [...state.chosenTZ, value]
})
export const preventPropagation = action => (state, event) => [
    state,
    [(dispatch) => (event.stopPropagation(), dispatch(action))]
]
export const logInput = (state, {target: {value}}) => ({
    ...state,
    currentCG: value
})
export const toggleCreator = (state) => ({...state, isCreating: !state.isCreating})
export const addSwap = (state) => ({...state, guardSwaps: [...state.guardSwaps, {}]})
export const addCG = (state) => ({
    ...state,
    isCreating: !state.isCreating,
    guardSwaps: [...state.guardSwaps, state.currentCG]
})