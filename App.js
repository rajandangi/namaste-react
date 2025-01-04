/**
 * <div id="parent">
 *  <div id="child">
 *   <h1>Hello from React</h1>
 *   <h2> This is h2 title</h2>
 *  </div>
 * </div>
 */

const heading = React.createElement('div', { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "Hello from React"),
            React.createElement("h2", {}, "This is h2 title")
        ]
    )
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);