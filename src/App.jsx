import './App.css';
import Header from './core/Header/Header';
import Home from './features/Home/Home';
import Footer from './core/Footer/Footer';
import AllEvents from './features/Events/All-Events/AllEvents';

function App() {
    return (
        <div className="container">
            <Header />
            <main>
                <Home />
                <AllEvents />
            </main>
            <Footer />
        </div>
    );
}

export default App;
