import './App.css';
import {MainComponent} from './components/MainComponent.js';
import {NavComponent} from './components/NavComponent.js';

function App() {
  return (
    <div className="app-comp">
      <h1>Proj Clima</h1>
      <NavComponent />
      <MainComponent />
    </div>
  );
}

export default App;
