import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import About from './pages/about'
import Videos from './pages/Videos'
import TopUsers from './pages/TopUsers'
import TopVideos from './pages/TopVideos'
import Brands from './pages/Brands'
import SearchResult from './pages/SearchResult'
import Notifications from './pages/Notifications'
import Trends from './pages/Trands'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          {/* <Route index element={<h2>Home</h2>} /> */}
          <Route index element={<Home />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/about' element={<About />} />
          <Route path='/topusers' element={<TopUsers />} />
          <Route path='/topvideos' element={<TopVideos />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/trends' element={<Trends />} />
          <Route path='/search' element={<SearchResult />} />
          <Route path='/notification' element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
