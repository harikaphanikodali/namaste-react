const heading = React.createElement("h1", {id :"heading"}, "hello wrold react");
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)


const parent = React.createElement("div",{id : "parent"},
 React.createElement("div",{id : "child"}, 
 [ React.createElement("h1",{},"iam in h1"), React.createElement("h2",{},"iam in h2")]
  ) );
root.render(parent)