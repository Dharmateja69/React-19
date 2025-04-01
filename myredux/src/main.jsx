import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { Store } from "./Service/store/Store.js";
createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
//now our entire application will have access to the store data present in .
