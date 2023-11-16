import { useState } from 'react';
import './App.css';
import Header from './core/Header/Header';
import Home from './features/Home/Home';

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="container">
            <Header />
            <main>
                <Home />
            </main>
        </div>
    );
}

export default App;
