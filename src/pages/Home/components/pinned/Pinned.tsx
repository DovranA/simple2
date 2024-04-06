import { useState } from 'react'
import VideoCards from '../../../../components/VideoCards/VideoCards'
import TopCards from '../../../../components/VideoCards/topCard'
import styles from './style.module.scss'
const Pinned = () => {
  const [density, setDensity] = useState<number>(4)

  return (
    <div className={styles.pinned}>
      <VideoCards density={density}>
        <TopCards
          title='Berkidilenler'
          density={density}
          setDensity={setDensity}
          button='Hemmesi'
          buttonClick={() => {}}
        />
      </VideoCards>
    </div>
  )
}

export default Pinned
