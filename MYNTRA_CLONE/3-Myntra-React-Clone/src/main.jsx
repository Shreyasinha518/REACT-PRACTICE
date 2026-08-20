import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./Routes/Bag.jsx";
import Home from "./Routes/home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./Store/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> /* ,action:createPostAction*/ },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
