// import { Navigate, Outlet } from "react-router-dom";
// import AdminPanel from "./components/AdminPanel";
// import Applications from "./components/Applications";
// import Login from "./components/Login";

// const routes = (user) => [
//   {
//     path: "/app",
//     element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
//     children: [
//       { path: "/dashboard", element: <Dashboard /> },
//       { path: "/account", element: <Account /> },
//       { path: "/", element: <Navigate to="/app/dashboard" /> },
//       {
//         path: "member",
//         element: <Outlet />,
//         children: [
//           { path: "/", element: <MemberGrid /> },
//           { path: "/add", element: <AddMember /> },
//         ],
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: user ? (
//       user.userRole === "admin" ? (
//         <Navigate to="/adminpanel" />
//       ) : (
//         <Navigate to="/applications" />
//       )
//     ) : (
//       <Navigate to="/login" />
//     ),
//     children: [
//       { path: "login", element: <Login /> },
//       { path: "adminpanel", element: <AdminPanel /> },
//       { path: "applications", element: <Applications /> },
//     ],
//   },
// ];

// export default routes;
