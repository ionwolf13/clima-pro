import './App.css';
import {MainComponent} from './components/MainComponent.js';
import {NavComponent} from './components/NavComponent.js';

function App() {
  return (
    <div className="App">
      
        <h1>clima</h1>
      
      <NavComponent />
      <MainComponent />
    </div>
  );
}

export default App;
