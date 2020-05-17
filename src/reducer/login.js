const initialState = {
data:{},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "LOGIN":
    console.log(payload);
    
    return { ...state, data:payload}

  default:
    return state
  }
}
