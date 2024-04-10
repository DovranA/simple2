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
  const [by, setBy] = useState('')
  const [startfrom, setStart] = useState(0)
  // useEffect(() => {
  //   setBy('az')
  //   setStart(0)
  //   dispatch(
  //     trendsPageFetch({
  //       by,
  //       startfrom,
  //       limit: 12,
  //     })
  //   )
  // }, [])
  useEffect(() => {
    console.log('test')
    dispatch(
      trendsPageFetch({
        by,
        startfrom,
        limit: 12,
      })
    )
  }, [by])
  console.log(trends)
  return (
    <div className='container'>
      <TopLink location='Trendlar' />
      <FilterNav count={trends.totalTrends} sort={by} sortby={setBy} />
      <Slider image={trends.banner.images} />
      <BrandsCards>
        {trends.videos.map((video: video, idx: number) => {
          return <Card info={video} key={idx} style={{ height: `$ 30vh` }} />
        })}
      </BrandsCards>
      <button onClick={() => setStart(startfrom + 12)}>more</button>
    </div>
  )
}

export default Trends
