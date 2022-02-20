import './App.css';
import { Parent } from './Parent';

function App() {
  const h1EventHandler = <h1>Define an Event Handler</h1>
  return (
    <div className="App">
      <header className="App-header">
        {h1EventHandler}
        <Parent />
      </header>
    </div>
  );
}

export default App;
