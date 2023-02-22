import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './components/css/normalize.css'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"

let root = document.getElementById("root");
const render = <ChakraProvider><BrowserRouter> <App /></BrowserRouter></ChakraProvider>
const  createRoot = ReactDOM.createRoot(root);
createRoot.render(render)