import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './components/css/normalize.css'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"

let root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider><BrowserRouter> <App /></BrowserRouter></ChakraProvider>
  </React.StrictMode>,
  root
);

