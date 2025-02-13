import Choosens from './components/choosens/Choosens'
import Pinned from './components/pinned/Pinned'
import Slider from './components/slider/Slider'
import styles from './home.module.scss'
import ThinContainer from '../../components/ThinContainer'
import { useEffect } from 'react'
import {
  SelectHomeData,
  SelectHomeLoading,
  mainPageFetch,
  setPinnedLike,
} from '../../features/homeSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
const Home = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(SelectHomeData)
  const loading = useAppSelector(SelectHomeLoading)
  useEffect(() => {
    dispatch(mainPageFetch())
  }, [])

  if (loading) {
    return <h1>Loading</h1>
  }
  return (
    <div className='container'>
      <Slider image={data.banner.images} />
      <ThinContainer
        img={data.topusers.image}
        title='Top Ulanjylar'
        btnTitle='Hemmesi'
        link='topusers'
      />
      <Choosens data={data.saylananlar} />
      <ThinContainer
        img={data.topvideos.image}
        title='Top Wideolar'
        btnTitle='Hemmesi'
        link='topvideos'
      />
      <div className={styles.flexDiv}>
        <ThinContainer
          img={data.trends.image}
          title='Trendlar'
          link='trends'
          btnTitle={data.trends.total}
        />
        <ThinContainer
          img={data.brands.image}
          title='Brendlar'
          link='brands'
          btnTitle={String(data.brands.total)}
        />
      </div>
      <ThinContainer
        img={data.totalvideos.image}
        title='Wideolar'
        btnTitle={String(data.totalvideos.total)}
        link='videos'
      />

      <Pinned likeFunc={setPinnedLike} data={data.pinnedVideos} />
    </div>
  )
}

export default Home
