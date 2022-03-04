import { useEffect } from "react";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./components/ForgotPassword";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import NewApplication from "./components/NewApplication";
import Applications from "./components/Applications";
import { KEYS, ROLES } from "./constants";
import AdminPanel from "./components/AdminPanel";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem(KEYS.AVAILABLE_USERS));

    const admin = {
      id: uuidv4(),
      email: "admin@admin.com",
      name: "Admin",
      password: "password",
      userRole: ROLES.ADMIN,
    };

    if (!users)
      return localStorage.setItem(
        KEYS.AVAILABLE_USERS,
        JSON.stringify([admin])
      );

    const doesAdminExists = users.some((user) => user.userRole === ROLES.ADMIN);

    if (!doesAdminExists) {
      localStorage.setItem(
        KEYS.AVAILABLE_USERS,
        JSON.stringify([...users, admin])
      );
    }
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/newapplication" element={<NewApplication />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/" element={<Applications />} />
        </Route>

        <Route element={<AdminRoutes />}>
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

const ProtectedRoutes = () => {
  const currentUser = JSON.parse(localStorage.getItem(KEYS.CURRENT_USER));

  const role = currentUser ? currentUser.userRole : "";

  return currentUser && role === ROLES.STUDENT ? (
    <Outlet />
  ) : currentUser && role === ROLES.ADMIN ? (
    <Navigate to="/adminpanel" />
  ) : (
    <Navigate to="/login" />
  );
};

const AdminRoutes = () => {
  const currentUser = JSON.parse(localStorage.getItem(KEYS.CURRENT_USER));

  const role = currentUser ? currentUser.userRole : "";

  return currentUser && role === ROLES.ADMIN ? (
    <Outlet />
  ) : currentUser && role === ROLES.STUDENT ? (
    <Navigate to="/" />
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
