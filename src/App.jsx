import { useState } from 'react';
import './App.css';
import Header from './core/Header/Header';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
        </>
    );
}

export default App;
