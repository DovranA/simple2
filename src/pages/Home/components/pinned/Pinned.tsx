import { useState } from 'react'
import VideoCards from '../../../../components/VideoCards/VideoCards'
import TopCards from '../../../../components/VideoCards/topCard'
import styles from './style.module.scss'
const Pinned = () => {
  const [density, setDensity] = useState<boolean>(true)

  return (
    <div className={styles.pinned}>
      <VideoCards density={density}>
        <TopCards
          title='Ahlisi(123456)'
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
