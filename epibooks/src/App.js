import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import MyNav from "./components/MyNav";
import AllTheBooks from "./components/AllTheBooks";
import NotFound from "./components/NotFound";
import BookDetails from "./components/BookDetails";
import { ThemeProvider } from "./components/ThemeContext";
import MyFooter from "./components/MyFooter";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ThemeProvider>
      
      <Router>
        <MyNav setQuery={setSearchTerm} />
        <Welcome />
        <Routes>
          <Route path="/" element={<AllTheBooks searchTerm={searchTerm} />} />

          <Route path="/book/:asin" element={<BookDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <MyFooter/>
    </ThemeProvider>
  );
}

export default App;
