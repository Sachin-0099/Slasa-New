import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageLayout from "./Components/PageLayout";
import { ProductProvider } from "./Context/ProductContext"; // Import the ProductProvider

function App() {
  return (
<ProductProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PageLayout>
                <Home />
              </PageLayout>
            }
          />
        </Routes>
      </Router>
      </ProductProvider>
  );
}

export default App;
