import Card from './VidCard'
import styles from './styles.module.scss'

const VideoCards = ({
  children,
  density,
}: {
  children: any
  density: number
}) => {
  return (
    <div className={styles.content}>
      {children}
      <div
        className={styles.cards}
        style={{
          gridTemplateColumns: `repeat(${density}, minmax(0, 1fr))`,
        }}
      >
        <Card style={{ height: `${density === 4 ? 30 : 60}vh` }} />
        <Card style={{ height: `${density === 4 ? 30 : 60}vh` }} />
        <Card style={{ height: `${density === 4 ? 30 : 60}vh` }} />
        <Card style={{ height: `${density === 4 ? 30 : 60}vh` }} />
        <Card style={{ height: `${density === 4 ? 30 : 60}vh` }} />
      </div>
    </div>
  )
}

export default VideoCards
