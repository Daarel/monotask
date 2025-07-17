import { type FC } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
