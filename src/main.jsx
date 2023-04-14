import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./configs/reactQuery";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import persistStore from "redux-persist/es/persistStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </>
);
