import logo from './logo.svg';
import './App.scss';
import './components/sse-button/sse-button.component';
import SseButton from "./components/sse-button/sse-button.component";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    <li>My page</li>
                    <li>Community</li>
                    <li>Random joke</li>
                    <li>About project</li>
                </ul>
            </header>
            <main className="App-main">
                Main
                <SseButton/>
            </main>
            <footer className="App-footer">
                Footer
            </footer>
        </div>
    );
}

export default App;
