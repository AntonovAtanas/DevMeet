import { useState } from 'react';
import './App.css';
import Header from './core/Header/Header';
import Home from './features/Home/Home';
import Footer from './core/Footer/Footer';

function App() {
    return (
        <div className="container">
            <Header />
            <main>
                <Home />
            </main>
            <Footer />
        </div>
    );
}

export default App;
