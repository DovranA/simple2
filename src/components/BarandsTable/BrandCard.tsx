import { BsFileEarmarkPlay } from 'react-icons/bs'
import styles from './styles.module.scss'
const BrandCard = () => {
  return (
    <div className={styles.brandCard}>
      <img src='/card1.png' alt='' />
      <div className={styles.aboluteDiv}>
        <span>
          <BsFileEarmarkPlay size={18} />
          933
        </span>
        <div>
          <h3>TM BIZ</h3>
        </div>
      </div>
    </div>
  )
}

export default BrandCard
