import PlayBtn from '../../../../components/PlayBtn/PlayBtn'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
const Card = () => {
  return (
    <div className={styles.card}>
      <div>
        <span>
          <i className='bi bi-file-earmark-play'></i>
          <p>10</p>
        </span>
        <PlayBtn />
      </div>
      <motion.img
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5, type: 'tween' }}
        src='/card1.png'
        alt=''
      />
    </div>
  )
}

export default Card
