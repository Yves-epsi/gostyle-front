const initialState = { scanedCodes: [] }

export default scanedCodesList = (state = initialState, action) => {
  let nextState
  switch (action.type) {
    case 'ADD_CODE':
      const scanedCodesIndex = state.scanedCodes.findIndex(item => item.id === action.value.id)
      if (scanedCodesIndex == -1) {
        nextState = {
          ...state,
          scanedCodes: [...state.scanedCodes, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}