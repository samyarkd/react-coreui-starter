import { useReducer } from "react";
import Routes from "./routes";
import RoutesContext from "./RoutesContext";
import RoutesReducer from "./RoutesReducer";

const RoutesState = ({ children }) => {
  const initialState = {
    routes: [],
  };

  const [dispatch, state] = useReducer(RoutesReducer, initialState);

  // Set Routes for the current user based on the user's role
  const setRoutes = (role) => {
    switch (role) {
      case "admin":
        dispatch({ type: "SET_ROUTES", payload: Routes.role1 });

      case "user":
        dispatch({ type: "SET_ROUTES", payload: Routes.role2 });
    }
  };

  return (
    <RoutesContext.Provider
      value={{
        // State data
        ...state,
        // Foundations
        setRoutes,
      }}
    >
      {children}
    </RoutesContext.Provider>
  );
};

export default RoutesState;
