import EntryList from "./EntryList";
import './App.css';
const fruits = ["carrot"];
function App() {
  return (
    <>
    <div className="App">
      <EntryList fruits={fruits} />
    </div>
    </>
  )
}
export default App;

