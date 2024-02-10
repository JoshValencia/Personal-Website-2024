import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import CustomThemeProvider from "./CustomThemeProvider.tsx";
import { store } from "../store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <CustomThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CustomThemeProvider>
  </Provider>
);
