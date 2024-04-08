import { useEffect } from 'react'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
import Login from './Login/Login'
import AddVideo from './AddVideo/AddVideo'
import Notice from './Notice/Notice'

type Props = {
  setModal: (prev: any) => void
  type: string
  onOff: boolean
}
const Modal = ({ setModal, type, onOff }: Props) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [])

  const variants = {
    visable: { opacity: 1 },
    hidden: { opacity: 0 },
  }
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
      case 'notice':
        return (
          <Notice
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
      variants={variants}
      animate={onOff ? 'visable' : 'hidden'}
      transition={{ duration: 1 }}
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
