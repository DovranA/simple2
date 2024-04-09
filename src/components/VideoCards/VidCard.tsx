import { BsPlayFill } from 'react-icons/bs'
import styles from './styles.module.scss'
import { LuEye } from 'react-icons/lu'
import { FiDownload } from 'react-icons/fi'
import LikeBtn from '../Like/LikeBtn'
import { TopVideo } from '../../types/topUsers'
import moment from 'moment'
import { motion } from 'framer-motion'
import { useAppDispatch } from '../../app/hooks'
import { setPlayerModal } from '../../features/videoSlice'

type Props = {
  style: any
  info: TopVideo
}
const Card = ({ style, info }: Props) => {
  const dispatch = useAppDispatch()
  console.log(info)

  return (
    <div
      onClick={() => dispatch(setPlayerModal())}
      className={`${styles.cardContain}`}
      style={style}
    >
      <div className={styles.btn}>
        <BsPlayFill className={styles.icon} />
        <span className={styles.blur}></span>
      </div>
      <img src={info.image_path} alt='' />
      <motion.div
        initial={{ y: 38 }}
        whileHover={{ y: 0 }}
        className={styles.info}
      >
        {/* <div className={styles.bg}></div> */}
        <p>{info.title}</p>
        <div className={style.about}>
          <span className={styles.date}>
            {moment(info.created_at).format('DD.MM.YYYY')}
          </span>
          <span className={styles.counts}>
            <span>
              <LuEye size={23} />
              {info.view_count}
            </span>
            <span>
              <LikeBtn /> {info.like_count}
            </span>
            <span>
              <FiDownload size={23} /> {info.download_count}
            </span>
          </span>
        </div>
        <span className={styles.bg}></span>
      </motion.div>
    </div>
  )
}

export default Card
