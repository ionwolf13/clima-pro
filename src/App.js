import './App.css';
import { MainComponent } from './components/MainComponent.js';
import { NavComponent } from './components/NavComponent.js';
import { LogoComponent } from './components/LogoComponent.js';

function App() {
  return (
    <div className="app-comp">
      <LogoComponent />
      <NavComponent />
      <MainComponent />
      <footer id='main-footer'>
        Copyright © 2021 Unravel | Designed & Built by Jesus Israel Garcia
      </footer>
    </div>
  );
}

export default App;
