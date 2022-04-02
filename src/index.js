import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './components/css/normalize.css'
import { ChakraProvider } from '@chakra-ui/react'

let root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider> <App /></ChakraProvider>
  </React.StrictMode>,
  root
);

