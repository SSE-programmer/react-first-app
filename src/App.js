import logo from './logo.svg';
import './App.scss';
import './components/sse-button/sse-button.component';
import SseButton from "./components/sse-button/sse-button.component";
import SseHeader from "./components/sse-header/sse-header.component";
import SseFooter from "./components/sse-footer/sse-footer.component";


function App() {
    return (
        <div className="App">
            <SseHeader />
            <main className="App-main page-center-block">
                <SseButton/>
            </main>
            <SseFooter />
        </div>
    );
}

export default App;
