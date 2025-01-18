
import React from 'react';
import Navbar from '../components/Navbar';  
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className="home">
     
      <Navbar />
      <div className="home-content">
        <h1>Bienvenido a mi sitio web</h1>
        <p>Este es el lugar donde comparto mis proyectos y experiencia como ingeniero en computación.</p>
      </div>

    <Footer/>
    </div>
    
  );
};

export default Home;
