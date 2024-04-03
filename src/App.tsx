import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
