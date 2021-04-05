import React from "react";

function Food() {
  return <h1>I like potato</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Food name="kimchi" />
    </div>
  );
}

export default App;
