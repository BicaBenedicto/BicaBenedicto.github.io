import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import PortfolioPage from '@/pages/PortfolioPage';
import DoceriaPage from '@/pages/DoceriaPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/doceria" element={<DoceriaPage />} />
        <Route path="*" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;