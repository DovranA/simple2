import { useState } from 'react'
import TopLink from '../../components/TopLink/TopLink'
import VideoCards from '../../components/VideoCards/VideoCards'
import TopCards from '../../components/VideoCards/topCard'
import Categories from './components/Categories'
const Videos = () => {
  const [density, setDensity] = useState<number>(4)
  const [current, setCurrent] = useState(0)
  const changeCurrent = (idx: number) => {
    if (current >= 0 && current < 10) {
      setCurrent(idx)
    }
  }

  return (
    <div className='container'>
      <TopLink location='Wideolar' />
      <Categories current={current} setCurrent={changeCurrent} />
      <VideoCards density={density}>
        <TopCards
          title='Ahlisi(123456)'
          density={density}
          setDensity={setDensity}
        />
      </VideoCards>
    </div>
  )
}

export default Videos
