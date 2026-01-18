import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Reports } from "./pages/Reports";
import { Workflows } from "./pages/Workflows";
import { Settings } from "./pages/Settings";
import { AppLayout } from "./layouts/AppLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { useState } from "react";
import { PrivateRoute } from "./routes/PrivateRoute";
import "flowbite";

function App() {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("auth") === "true";
  });
  {
    /* Kullanıcı logged in olup olmadığının kontrol gerekiyor */
  }
  console.log("flowbite loaded");

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {<Redirect to={isAuth ? "/dashboard" : "/login"} />}{" "}
          {/* Kullanıcı logged in ise direkt dashboard sayfasına yönlendirir. */}
        </Route>
        <Route path="/login">
          <AuthLayout>
            <Login isAuth={isAuth} setIsAuth={setIsAuth} />
          </AuthLayout>
        </Route>
        <PrivateRoute path="/dashboard" isAuth={isAuth}>
          <AppLayout setIsAuth={setIsAuth}>
            <Dashboard />
          </AppLayout>
        </PrivateRoute>
        <PrivateRoute path="/reports" isAuth={isAuth}>
          <AppLayout setIsAuth={setIsAuth}>
            <Reports />
          </AppLayout>
        </PrivateRoute>
        <PrivateRoute path="/workflows" isAuth={isAuth}>
          <AppLayout setIsAuth={setIsAuth}>
            <Workflows />
          </AppLayout>
        </PrivateRoute>
        <PrivateRoute path="/settings" isAuth={isAuth}>
          <AppLayout setIsAuth={setIsAuth}>
            <Settings />
          </AppLayout>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
