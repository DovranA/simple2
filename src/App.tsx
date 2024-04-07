import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

import "./App.css";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/about";
import Videos from "./pages/Videos";
import TopUsers from "./pages/TopUsers";
import TopVideos from "./pages/TopVideos";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
          <Route path="/topusers" element={<TopUsers />} />
          <Route path="/topvideos" element={<TopVideos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
