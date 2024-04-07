import { MdClose } from 'react-icons/md'
import styles from './style.module.scss'
import { img1 } from '../../../assets'
type Props = {
  close: () => void
}
const AddVideo = ({ close }: Props) => {
  return (
    <div className={styles.container}>
      <MdClose size={30} className={styles.close} onClick={close} />
      <h1>Wideo goshmak</h1>
      <div className={styles.preview}>
        <span className={styles.dropDown}>
          <span> Wideo gosh</span>
        </span>
        <img src={img1} alt='img' />
      </div>
    </div>
  )
}

export default AddVideo
