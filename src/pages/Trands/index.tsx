import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import BrandsCards from '../../components/BarandsTable/BrandCards'
import TopLink from '../../components/TopLink/TopLink'
import { SelectTrendsData, trendsPageFetch } from '../../features/trendsSlice'
import Slider from '../Home/components/slider/Slider'
import FilterNav from '../../components/FilterNav/FilterNav'
import { video } from '../../types/global'
import Card from '../../components/VideoCards/VidCard'

const Trends = () => {
  const dispatch = useAppDispatch()
  const trends = useAppSelector(SelectTrendsData)
  const [by, setBy] = useState('az')
  useEffect(() => {
    dispatch(
      trendsPageFetch({
        by,
        startfrom: 0,
        limit: 10,
      })
    )
  }, [])
  useEffect(() => {
    dispatch(
      trendsPageFetch({
        by,
        startfrom: 0,
        limit: 10,
      })
    )
  }, [by])
  return (
    <div className='container'>
      <TopLink location='Trendlar' />
      <FilterNav count={trends.totalTrends} sort={by} sortby={setBy} />
      <Slider image={trends.banner.images} />
      <BrandsCards>
        {trends.videos.map((video: video) => {
          return (
            <Card info={video} key={video.id} style={{ height: `$ 30vh` }} />
          )
        })}
      </BrandsCards>
    </div>
  )
}

export default Trends
