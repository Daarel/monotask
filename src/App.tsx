import { type FC } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
