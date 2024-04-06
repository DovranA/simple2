import { BsPlayFill } from 'react-icons/bs'
import { img1 } from '../../assets'
import styles from './styles.module.scss'
import { LuEye, LuHeart } from 'react-icons/lu'
import { FiDownload } from 'react-icons/fi'
import LikeBtn from '../Like/LikeBtn'
import { motion } from 'framer-motion'

type Props = {
  style: any
}
const Card = ({ style }: Props) => {
  return (
    <div className={`${styles.cardContain}`} style={style}>
      <div className={styles.btn}>
        <BsPlayFill className={styles.icon} />
        <div className={styles.blur}></div>
      </div>
      <img src={img1} alt='' />
      <div className={styles.info}>
        <p>title</p>
        <div className={style.about}>
          <span className={styles.date}>19.03.2022</span>
          <span className={styles.counts}>
            <span>
              <LuEye size={23} />
              100
            </span>
            <span>
              <LikeBtn /> 200
            </span>
            <span>
              <FiDownload size={23} /> 300
            </span>
          </span>
        </div>
      </div>
      <span className={styles.bg}></span>
    </div>
  )
}

export default Card
