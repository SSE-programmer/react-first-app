import logo from './logo.svg';
import './App.scss';
import './components/sse-button/sse-button.component';
import SseButton from "./components/sse-button/sse-button.component";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SseButton />
      </header>
    </div>
  );
}

export default App;
