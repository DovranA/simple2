import { useAppSelector } from '../../app/hooks'
import BrandsCards from '../../components/BarandsTable/BrandCards'
import TopLink from '../../components/TopLink/TopLink'
import { SelectTrendsData } from '../../features/trendsSlice'
import Slider from '../Home/components/slider/Slider'
import FilterNav from './components/FilterNav'

const Trends = () => {
  const data = useAppSelector(SelectTrendsData)
  const image = [{ src: './card1.png' }, { src: './card1.png' }]
  console.log(data)
  return (
    <div className='container'>
      <TopLink location='Trendlar' />
      <FilterNav />
      <Slider image={image} />
      <BrandsCards />
    </div>
  )
}

export default Trends
