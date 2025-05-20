import React from 'react';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import './style/style1.css';
import './style/style2.css';

function App() {
  return (
    <div>
      <Header />
      <div className="main-layout">
        <Sidebar />
        <div className="content-area">
          {/* Main content can go here */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;