import { useEffect } from 'react'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
import Login from './Login/Login'
type Props = {
  setModal: (prev: any) => void
  type: string
}
const Modal = ({ setModal, type }: Props) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className={styles.container}
      onClick={() => {
        setModal((prev: any) => !prev)
      }}
    >
      <Login />
    </motion.div>
  )
}

export default Modal
