import { BsPlayFill } from 'react-icons/bs'
import styles from './style.module.scss'
const PlayBtn = () => {
  return (
    <div className={styles.btn}>
      <BsPlayFill className={styles.icon} />
      <div className={styles.blur}></div>
    </div>
  )
}

export default PlayBtn
