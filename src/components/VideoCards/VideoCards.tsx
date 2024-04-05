import Card from './VidCard'
import styles from './styles.module.scss'
import TopCards from './topCard'
import { useState } from 'react'

const VideoCards = () => {
  const [density, setDensity] = useState<boolean>(true)

  return (
    <div className={styles.content}>
      <TopCards density={density} setDensity={setDensity} />
      <div className={styles.cards}>
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
      </div>
    </div>
  )
}

export default VideoCards
