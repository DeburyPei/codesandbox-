import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function App() {
  return (
    <div className="App">
      爸爸
      <Son />
    </div>
  );
}

class Son extends React.Component {
  constructor() {
    super();
    this.state = {
      n: 0,
    };
  }
  add() {
    this.setState({ n: this.state.n + 1 });
  }
  render() {
    return (
      <div className="Son">
        儿子 n:{this.state.n}
        <button onClick={() => this.add()}>+1</button>
        <GrandSon />
      </div>
    );
  }
}
const GrandSon = () => {
  const [n, setN] = React.useState(0);
  return (
    <div className="GrandSon">
      孙子 n:{n}
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
