import React from 'react';
import Info from '../src/components/Info';
import About from '../src/components/About';
import Footer from '../src/components/Footer';
import '../src/index.css';

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      {/* <Footer /> */}
    </div>
  );
}


