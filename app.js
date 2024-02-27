/*
const heading = React.createElement("h1",{id: "heading"},"Hello World from React!");
const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);
*/
/*

<div id="parent"
    <div id="child1">
    <h1></h1>
    <h2></h2>
    </div>
    <div id="child2">
    <h1></h1>
    <h2></h2>
    </div>
</div>    

*/

const parent=React.createElement(
    "div",
    {id:"parent"},[
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I am H1 tag"),
    React.createElement("h2",{},"I am H2 tag")
]),

    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I am H1 tag"),
    React.createElement("h2",{},"I am H2 tag")
    
     ] )
    ]);

const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);