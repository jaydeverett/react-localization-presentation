export default function createReducer (INITIAL_STATE, reducers) {
  return (state, action) => {
    if (state == null) return INITIAL_STATE
    const leaveStateUnchanged = (state) => state
    let reducer = reducers[action.type] || leaveStateUnchanged
    return reducer(state, action)
  }
}
