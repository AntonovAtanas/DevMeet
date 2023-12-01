import './App.css';

import Header from './core/Header/Header';
import Home from './features/Home/Home';
import Footer from './core/Footer/Footer';
import AllEvents from './features/Events/All-Events/AllEvents';
import { Route, Routes } from 'react-router-dom';
import Login from './features/User/Login/Login';
import Register from './features/User/Register/Register';
import Logout from './features/User/Logout/Logout';
import { AuthProvider } from './contexts/authContext';
import CreateEvent from './features/Events/Create-Event/CreateEvent';
import EventDetails from './features/Events/Event-Details/EventDetails';

function App() {
    return (
        <div className="container">
            <AuthProvider>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/events" element={<AllEvents />} />
                        <Route
                            path="/events/create"
                            element={<CreateEvent />}
                        />
                        <Route path="/events/:id" element={<EventDetails />} />
                        <Route path="/user/register" element={<Register />} />
                        <Route path="/user/login" element={<Login />} />
                        <Route path="/user/logout" element={<Logout />} />
                    </Routes>
                </main>
                <Footer />
            </AuthProvider>
        </div>
    );
}

export default App;
