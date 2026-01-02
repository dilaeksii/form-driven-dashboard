import { Redirect, Route } from "react-router-dom/cjs/react-router-dom";

export function PrivateRoute ({isAuth, children, ...rest}) {

    return (
    <Route
      {...rest}
      render={() => (isAuth ? children : <Redirect to="/login" />)}
    />
  );
}