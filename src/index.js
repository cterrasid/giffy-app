import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/core";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Global
      styles={css`
        :root {
          --white: #ffffff;
          --black: #000000;
          --black-transparency: #0000004d;
          --black-transparency-dark: #00000070;
          --color_1: #50f1f1;
          --color_2: #f8bbc5;
          --color_3: #db8fdb;
          --color_4: #68f5ae;
          --color_1-light: #9cfafa;
          --color_2-light: #fad0d7;
          --color_3-light: #d8b0d8;
          --color_4-light: #81fdbf;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
          font-size: 1rem;
          margin: 0;
          padding: 0;
        }

        body {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-family: "Manrope", sans-serif;
          text-align: center;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
        }

        a {
          text-decoration: none;
          color: var(--black-pure);
        }

        li {
          list-style: none;
        }
      `}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
