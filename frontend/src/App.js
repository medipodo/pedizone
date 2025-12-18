import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';

import Contact from './pages/Contact';


function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/ayak-bakim-kilavuzu';

  return (
    <>
      <ScrollToTop />
      {!isLandingPage && <Header />}
        <Routes>

          
          {/* Regular Pages with Header/Footer */}
          <Route path="/" element={<Home />} />
          <Route path="/urunler" element={<Products />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/hakkimizda" element={<About />} />

          <Route path="/iletisim" element={<Contact />} />
          <Route path="/urunler/:slug" element={<ProductDetail />} />
        </Routes>
        {!isLandingPage && <Footer />}
        {!isLandingPage && <WhatsAppButton />}
        <CookieBanner />
    </>
  );
}

function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0, border: 'none' }}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
