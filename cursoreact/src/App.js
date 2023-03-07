import "./App.css";
import AnotherComponent from "./components/AnotherComponent";
import FirstComponent from "./components/firstComponent";
import Images from "./components/images";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <FirstComponent />
      <AnotherComponent />
      <Images />
    </div>
  );
}

export default App;
