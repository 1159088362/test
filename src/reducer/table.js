const initialState = {
  data:[],
  }
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
  
    case "SEARCH":
      return { ...state,data:payload.users}
    default:
      return state
    }
  }
  