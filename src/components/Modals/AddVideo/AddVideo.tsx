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
        <img src={img1} alt='img' />
        <img src={img1} alt='img' />
      </div>
      <div className={styles.categires}>
        <select className={styles.item}></select>
        <span className={styles.item}>Sub-kategoriyalary sayla</span>
      </div>
    </div>
  )
}

export default AddVideo
