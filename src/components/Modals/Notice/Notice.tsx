import { MdClose } from 'react-icons/md'
import styles from './style.module.scss'
type Props = {
  close: () => void
}
const Notice = ({ close }: Props) => {
  return (
    <div className={styles.container}>
      <MdClose size={30} className={styles.close} onClick={close} />
    </div>
  )
}

export default Notice
