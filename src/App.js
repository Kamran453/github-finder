import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Alert from "./components/Layouts/Alert";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Layouts/Navbar"
import Footer from "./components/Layouts/Footer";
import {GithubProvider} from "./context/github/GithubContext"
import {AlertProvider} from "./context/Alert/AlertContext"
import User from "./pages/User";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>

  )
}

export default App;
