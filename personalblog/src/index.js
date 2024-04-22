import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Assuming App is your root component

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
