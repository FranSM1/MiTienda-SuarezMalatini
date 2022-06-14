import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Bienvenidos <code>a mi tienda</code> Personal.
        </p>
        <a
          className="App-link"
          href="https://panchoxfx.github.io/lolodeportes/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Entra a visitarla
        </a>
      </header>
    </div>
  );
}

export default App;
