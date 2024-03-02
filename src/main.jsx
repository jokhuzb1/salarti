import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
const App = lazy(() => import("./App.jsx"));
import "./index.css";
import "./animations/styles.css";
import Spinner from "./components/helpers/spinnerImg/Spinner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
