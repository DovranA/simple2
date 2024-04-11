import { video } from '../../types/global'
import Card from './VidCard'
import styles from './styles.module.scss'

type Props = {
  children: any
  density: number
  data: video[]
  likeFunc: any
}

const VideoCards = ({ children, density, data, likeFunc }: Props) => {
  return (
    <div className={styles.content}>
      {children}
      <div
        className={styles.cards}
        style={{
          gridTemplateColumns: `repeat(${density}, minmax(0, 1fr))`,
        }}
      >
        {data.map((item) => (
          <Card
            info={item}
            key={item.id}
            style={{ height: `${density === 4 ? 200 : 400}px` }}
            data={data}
            likeFunc={likeFunc}
          />
        ))}
      </div>
    </div>
  )
}

export default VideoCards
