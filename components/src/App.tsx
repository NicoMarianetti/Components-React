import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SpinTransition } from "./components/SpinTransition/SpinTransition";

function App() {
    return (
        <div>
            <SpinTransition
                icon1={<SearchIcon />}
                icon2={<ArrowForwardIcon />}
            />
        </div>
    );
}

export default App;
