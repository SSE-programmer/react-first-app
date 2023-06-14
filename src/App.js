import './App.scss';
import './components/sse-button/sse-button.component';
import SseHeader from "./components/sse-header/sse-header.component";
import SseFooter from "./components/sse-footer/sse-footer.component";
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import MyPage from "./pages/myPage/myPage.page";
import Community from "./pages/community/community.page";
import NotFound from "./pages/notFound/notFound.page";
import RandomJoke from "./pages/randomJoke/randomJoke.page";
import AboutProject from "./pages/aboutProject/aboutProject.page";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <SseHeader/>
                <main className="App-main page-center-block">
                    <Routes>
                        <Route exact path="/" element={ <Navigate to="/my-page" />}/>
                        <Route exact path="/my-page" element={<MyPage/>}/>
                        <Route exact path="/community" element={<Community/>}/>
                        <Route exact path="/random-joke" element={<RandomJoke/>}/>
                        <Route exact path="/about-project" element={<AboutProject/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </main>
                <SseFooter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
