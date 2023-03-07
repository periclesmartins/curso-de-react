import "./App.css";
import AnotherComponent from "./components/AnotherComponent";
import FirstComponent from "./components/firstComponent";
import Images from "./components/images";
import Hooks from "./components/Hooks";
import List from "./components/List";
import RenderCond from "./components/RenderCond";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={8} y={10}/>
    </div>
  );
}

export default App;
