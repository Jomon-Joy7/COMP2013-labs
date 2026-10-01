import './App.css'
import CardContainer from "./Components/CardContainer";
import data from "./data/data";

function App() {
  return (
    <>
    <h1>Resorts Lite</h1>
    <CardContainer data={data} />
    </>
  );
}

export default App;
