import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('div', { id: "parent" }, "Hello from React");

const heading = React.createElement('div', { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", { key: 1 }, "Hello from React"),
            React.createElement("h2", { key: 2 }, "This is h2 title")
        ]
    )
);
// Javascript Object
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);