import { useState } from 'react';
import './App.css';
import Header from './core/Header/Header';

function App() {
    const [count, setCount] = useState(0);
    // todo: add padding: 0 5%; to the main container
    return (
        <>
            <Header />
        </>
    );
}

export default App;
