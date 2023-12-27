import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Router/Router.jsx";
import AuthContext from "./Shere/Auth/AuthContext.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
    </DndProvider>
  </React.StrictMode>
);
