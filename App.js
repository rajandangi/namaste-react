import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>React App</h1>;

const HeadingComponent = () => {
    return (
        <div id="container">
            <Title />
            <p>Hi there! this is first functional component</p>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);