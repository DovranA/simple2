import { useState } from 'react'
import VideoCards from '../../../../components/VideoCards/VideoCards'
import TopCards from '../../../../components/VideoCards/topCard'
import styles from './style.module.scss'
import { PinnedVideos } from '../../../../types/home'
type Props = {
  data: PinnedVideos
  likeFunc: any
}
const Pinned = ({ data, likeFunc }: Props) => {
  const [density, setDensity] = useState<number>(4)

  return (
    <div className={styles.pinned}>
      <VideoCards density={density} likeFunc={likeFunc} data={data.detail}>
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
