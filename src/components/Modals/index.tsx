import { useEffect } from 'react'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
import Login from './Login/Login'
import AddVideo from './AddVideo/AddVideo'

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
  const modal = () => {
    switch (type) {
      case 'login':
        return (
          <Login
            close={() => {
              setModal((prev: any) => !prev)
            }}
          />
        )
      case 'addVideo':
        return (
          <AddVideo
            close={() => {
              setModal((prev: any) => !prev)
            }}
          />
        )
      default:
        return null // Handle cases where unsupported type is provided
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className={styles.container}
      // onClick={() => {
      //   setModal((prev: any) => !prev)
      // }}
    >
      {modal()}

    </motion.div>
  )
}

export default Modal
