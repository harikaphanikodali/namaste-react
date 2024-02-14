import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("p1", {}, "test");

//jsx

const jsxHeading = (
  <h1 id="test" className="testing1">
    heading in jsc
  </h1>
);

const Title = () => {
  return <h1>title comp</h1>;
};

const number = 1000;
const HeadingComp = () => {
  return (
    <div>
      {number}
      <Title /> <h1>react functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComp />);
