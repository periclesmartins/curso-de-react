import "./App.css";
import AnotherComponent from "./components/AnotherComponent";
import FirstComponent from "./components/firstComponent";
import Images from "./components/images";
import Hooks from "./components/Hooks";
import List from "./components/assets/List";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
    </div>
  );
}

export default App;
