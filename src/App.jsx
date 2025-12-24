import {
  BrowserRouter,
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

function App() {
  const loggedIn = false; {/* Kullanıcı logged in olup olmadığının kontrol gerekiyor */} 

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
         {loggedIn ? <Redirect to="/dashboard" /> : <Login />} {/* Kullanıcı logged in ise direkt dashboard sayfasına yönlendirir. */} 
        </Route>
        <Route path="/login">
          <AuthLayout>
            <Login />
          </AuthLayout>
        </Route>
        <Route path="/dashboard">
          <AppLayout>
            <Dashboard />
          </AppLayout>
        </Route>
        <Route path="/reports">
          <AppLayout>
            <Reports />
          </AppLayout>
        </Route>
        <Route path="/workflows">
          <AppLayout>
            <Workflows />
          </AppLayout>
        </Route>
        <Route path="/settings">
          <AppLayout>
            <Settings />
          </AppLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
