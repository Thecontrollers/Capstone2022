import React from 'react';
import './index.css';
import App from './App';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

export function render(url) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
