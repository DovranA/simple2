import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/about";
import Videos from "./pages/Videos";
import TopUsers from "./pages/TopUsers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<h1>Home</h1>} />
          {/* <Route index element={<Home />} /> */}
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
          <Route path="/topusers" element={<TopUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
