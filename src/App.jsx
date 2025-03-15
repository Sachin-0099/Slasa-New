import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageLayout from "./Components/PageLayout";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PageLayout>
          <Home />
          </PageLayout>
          } />
    
      </Routes>
    </Router>
  );
}

export default App;
