import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { RestaurantsProvider } from "./contexts/RestaurantsContext";
import { CuisinesProvider } from "./contexts/CuisinesContext";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <RestaurantsProvider>
                <CuisinesProvider>
                    <App />
                </CuisinesProvider>
            </RestaurantsProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
