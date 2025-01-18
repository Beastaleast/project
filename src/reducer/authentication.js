const initialState = {
    value: false,
  };
  
  const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'AUTHENTICATION':
        return { ...state, value: action.value };
      default:
        return state;
    }
  };
  
  export default authenticationReducer;
  