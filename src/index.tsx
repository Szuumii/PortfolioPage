import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { AppProvider } from "./Components/hooks/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

