import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import TopLink from '../../components/TopLink/TopLink'
import { SelectTrendsData, trendsPageFetch } from '../../features/trendsSlice'
import Slider from '../Home/components/slider/Slider'
import FilterNav from '../../components/FilterNav/FilterNav'
import { video } from '../../types/global'
import Card from '../../components/VideoCards/VidCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import styles from './style.module.scss'
const Trends = () => {
  const dispatch = useAppDispatch()
  const trends = useAppSelector(SelectTrendsData)
  const [by, setBy] = useState('az')
  const [startfrom, setStart] = useState(0)
  const [data, setData] = useState<video[]>([])
  const fetchData = () => {
    dispatch(
      trendsPageFetch({
        by,
        startfrom,
        limit: 20,
      })
    )
  }
  useEffect(() => {
    fetchData()
    setData(trends.videos)
  }, [])
  useEffect(() => {
    fetchData()
    setData(trends.videos)
  }, [by])
  useEffect(() => {
    fetchData()
    setData([...data, ...trends.videos])
    console.log(trends.videos)
  }, [startfrom])
  return (
    <div className='container'>
      <TopLink location='Trendlar' />
      <FilterNav count={trends.totalTrends} sort={by} sortby={setBy} />
      <Slider image={trends.banner.images} />
      <InfiniteScroll
        dataLength={data.length}
        next={() => setStart(startfrom + 20)}
        hasMore={true}
        loader={<div> loading...</div>}
        className={styles.infiniteScroll}
      >
        {data.map((video: video, idx: number) => {
          return (
            <Card
              // data={data}
              info={video}
              key={idx}
              style={{ height: `$ 30vh` }}
            />
          )
        })}
      </InfiniteScroll>
    </div>
  )
}

export default Trends
