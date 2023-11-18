import './App.css';
import Header from './core/Header/Header';
import Home from './features/Home/Home';
import Footer from './core/Footer/Footer';
import AllEvents from './features/Events/All-Events/AllEvents';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="container">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<AllEvents />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
