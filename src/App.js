import "./App.css";
import Spinner from "./components/Spinner";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title text="The Best Christmas Game EVER!" />
      <Spinner />
    </div>
  );
}

export default App;
