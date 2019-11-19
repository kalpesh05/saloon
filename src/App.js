import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Route, Link } from 'react-router-dom'
import Header from "./component/Header"
import Home from "./component/Home"
// import Footer from "./component/Footer"
import About from "./component/About-us"


const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </main>
    </div>
  );
}

export default App;
