import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import Footer from "./components/Footer"
import './App.css';
import Home from "./Pages/Home";

function App() {

    /*const getPage = () => {
        const href = window.location.pathname;
        if (href == "/") {
            return (<Home />);
        }
        return (<Home />);
    }

    var page = getPage;*/

    return (
        <BrowserRouter>
        <Navbar />
        <SearchBar />
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
  );
}

export default App;
