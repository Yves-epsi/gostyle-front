const initialState = { scannedCodes: [] }

export default scanedCodesList = (state = initialState, action) => {
  let nextState
  console.log(action)
  switch (action.type) {
    case 'ADD_CODE':
      const scannedCodesIndex = state.scannedCodes.findIndex(item => item.id === action.value.id)
      if (scannedCodesIndex == -1) {
        nextState = {
          ...state,
          scannedCodes: [...state.scannedCodes, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}