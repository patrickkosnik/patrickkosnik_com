function selectedItems(state = ['passwordstring'], action) {
  switch (action.type) {
  case 'SET_VISIBILITY_FILTER':
    return Object.assign({}, state, {
      visibilityFilter: action.filter
    })
  default:
    return state
  }
}

export default selectedItems
