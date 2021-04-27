import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import GreatPlayer from "./components/GreatPlayer/GreatPlayer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <GreatPlayer></GreatPlayer>
    </div>
  );
}

export default App;
