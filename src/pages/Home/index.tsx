import Choosens from './components/choosens/Choosens'
import Player from './components/modals/Player'
import Pinned from './components/pinned/Pinned'
import Slider from './components/slider/Slider'
import styles from './home.module.scss'
import ThinContainer from '../../components/ThinContainer'
import { img1, img2 } from '../../assets'
const Home = () => {
  const image = [{ src: img1 }, { src: img2 }, { src: img1 }, { src: img2 }]
  return (
    <div className='container'>
      <Slider image={image} />
      <ThinContainer title='Top Ulanjylar' btnTitle='Hemmesi' />
      <Choosens />
      <ThinContainer title='Top Wideolar' btnTitle='Hemmesi' />
      <div className={styles.flexDiv}>
        <ThinContainer title='Trendlar' btnTitle='+90' />
        <ThinContainer title='Brendlar' btnTitle='Hemmesi' />
      </div>
      <Pinned />

      {false ? <Player /> : null}
    </div>
  )
}

export default Home
