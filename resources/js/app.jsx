import './bootstrap';
import '../css/app.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Home';
import Contact from './Contact';
import PastePage from './PastePage';

export default function App() {
    return (
    <>
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="/paste/:id" element={<PastePage />} />
                        <Route path="/about" element={<Contact />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/signup" element={<Contact />} />
                    </Route>
                </Routes>
            <Footer/>
        </BrowserRouter>
    </>    
    );
  }
  

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);