import Choosens from './components/choosens/Choosens'
import Pinned from './components/pinned/Pinned'
import Slider from './components/slider/Slider'
import styles from './home.module.scss'
import ThinContainer from '../../components/ThinContainer'
import { img1, img2 } from '../../assets'
import { useEffect } from 'react'
import { SelectHomeData, mainPageFetch } from '../../features/homeSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
const Home = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(SelectHomeData)
  useEffect(() => {
    dispatch(mainPageFetch())
  }, [])

  return (
    <div className={styles.home}>
      <Slider />
      <ThinContainer
        img={data.topusers.image}
        title='Top Ulanjylar'
        btnTitle='Hemmesi'
      />
      <Choosens />
      <ThinContainer
        img={data.topvideos.image}
        title='Top Wideolar'
        btnTitle='Hemmesi'
      />
      <div className={styles.flexDiv}>
        <ThinContainer
          img={data.trends.image}
          title='Trendlar'
          btnTitle={data.trends.total}
        />
        <ThinContainer
          img={data.brands.image}
          title='Brendlar'
          btnTitle='Hemmesi'
        />
      </div>
      <ThinContainer
        img={data.totalvideos.image}
        title='Wideolar'
        btnTitle='+80'
      />
      <Pinned />
    </div>
  )
}

export default Home
