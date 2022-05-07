import { SET_ROUTES } from "../types";

function RoutesReducer(state, action) {
  switch (action.type) {
    case SET_ROUTES:
      return {
        ...state,
        routes: action.payload,
      };

    default:
      break;
  }
}

export default RoutesReducer;
