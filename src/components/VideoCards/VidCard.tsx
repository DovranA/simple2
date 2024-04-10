import { BsPlayFill } from 'react-icons/bs'
import styles from './styles.module.scss'
import { LuEye } from 'react-icons/lu'
import { FiDownload } from 'react-icons/fi'
import LikeBtn from '../Like/LikeBtn'
import moment from 'moment'
import { motion } from 'framer-motion'
import { video } from '../../types/global'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useAppDispatch } from '../../app/hooks'
import {
  openPlayerLock,
  setPlayerModal,
  setPlayerVideos,
} from '../../features/videoSlice'
import axios from 'axios'
// const apiUrl = import.meta.env.VITE_API_PATH

type Props = {
  style: any
  info: video
  data?: video[]
  likeFunc?: any
}
const Card = ({ style, info, data, likeFunc }: Props) => {
const apiUrl = import.meta.env.VITE_API_PATH

  const dispatch = useAppDispatch()
  const handleLike = async (id: number) => {
    try {
      const res = await axios.put(apiUrl+ `/api/videos/${id}/like`, {
        withCredentials: true,
      })
      dispatch(likeFunc({ id: id, like: res.data.likeNum }))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={`${styles.cardContain}`} style={style}>
      <div className={styles.btn}>
        <BsPlayFill className={styles.icon} />
        <span className={styles.blur}></span>
      </div>
      <LazyLoadImage
        src={info?.image_path}
        effect='blur'
        onClick={() => {
          dispatch(setPlayerModal())
          dispatch(setPlayerVideos({ data, id: info.id }))
          dispatch(openPlayerLock('pinned'))
        }}
      />
      <motion.div
        initial={{ y: 38 }}
        whileHover={{ y: 0 }}
        className={styles.info}
      >
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
              <LikeBtn onClick={() => handleLike(info.id)} /> {info.like_count}
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
