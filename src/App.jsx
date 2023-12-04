import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './core/Header/Header';
import Home from './features/Home/Home';
import Footer from './core/Footer/Footer';
import AllEvents from './features/Events/All-Events/AllEvents';
import Login from './features/User/Login/Login';
import Register from './features/User/Register/Register';
import Logout from './features/User/Logout/Logout';
import { AuthProvider } from './contexts/authContext';
import CreateEvent from './features/Events/Create-Event/CreateEvent';
import EventDetails from './features/Events/Event-Details/EventDetails';
import EditEvent from './features/Events/Edit-Event/EditEvent';
import AuthGuard from './shared/guards/AuthGuard';

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
                            path="/events/:eventId"
                            element={<EventDetails />}
                        />
                        <Route path="/user/register" element={<Register />} />
                        <Route path="/user/login" element={<Login />} />
                        <Route element={<AuthGuard />}>
                            <Route
                                path="/events/create"
                                element={<CreateEvent />}
                            />
                            <Route
                                path="/events/:eventId/edit"
                                element={<EditEvent />}
                            />
                            <Route path="/user/logout" element={<Logout />} />

                            {/* add profile page */}
                        </Route>
                    </Routes>
                </main>
                <Footer />
            </AuthProvider>
        </div>
    );
}

export default App;
