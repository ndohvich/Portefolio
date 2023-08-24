import React from 'react';
import "./App.css";
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/home';
import Propos from './components/propos/propos'
import Services from './services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <Propos />
        <Services />
        <Resume />
        <Portfolio/>
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>  
    </>
  )
}

export default App;