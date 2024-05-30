import React from 'react';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Analytics/>
      <Footer />
    </div>
  );
}

export default App;
