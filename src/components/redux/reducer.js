const initialState = {
    app: [],
    error:null,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_APP":
        return {
          ...state,
          app: action.payload,
        };
      case "GET_ERROR":
        return {
          ...state,

          error: action.payload,
        };
      case "ADD_APP":
        return {
          ...state,
          app: [...state.app, action.payload],
          error: null,
        };
      case "ADD_ERROR":
        return {
          ...state,

          error: action.payload,
        };
      case "DELETE_APP":
        return {
          ...state,
          app: state.app.filter((app) => app._id !== action.payload),
        };
      case "DELETE_ERROR":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
}

export default appReducer