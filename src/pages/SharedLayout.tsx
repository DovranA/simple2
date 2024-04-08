import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import Player from '../components/Player'

const SharedLayout = () => {
  return (
    <div
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'space-between',
      }}
    >
      <Navbar />
      {false ? <Player /> : null}
      <Outlet />
      <Footer />
    </div>
  )
}

export default SharedLayout
