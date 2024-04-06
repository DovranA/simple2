import styles from './navbar.module.scss'
import { logo } from '../../assets'
import NotificationBtn from './NotificationBtn'
import { BiUser } from 'react-icons/bi'
import { GoVideo } from 'react-icons/go'
import { MdOutlineLogout } from 'react-icons/md'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '../Modals'
const Navbar = () => {
  const [options, setOptions] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [modalType, setModalType] = useState<string>('')
  return (
    <nav className={styles.navbar}>
      {modal && <Modal setModal={setModal} type={modalType} />}
      <span>
        <img src={logo} alt='logo' />
      </span>
      <div className={styles.searchDiv}>
        <input type='text' placeholder='Gozle' />
        <i className='bi bi-search'></i>
      </div>
      <div className={styles.right}>
        <NotificationBtn count={100} />
        <div
          className={styles.avatar}
          onClick={() => {
            setOptions((prev) => !prev)
          }}
        >
          <img src='/card1.png' alt='' />
        </div>
        {options && (
          <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <li
              onClick={() => {
                setModal(!modal)
                setModalType('user')
                setOptions(!options)
              }}
            >
              <BiUser size={23} />
              Profile
            </li>
            <li
              onClick={() => {
                setModal(!modal)
                setModalType('addVideo')
                setOptions(!options)
              }}
            >
              <GoVideo size={23} /> Wideo goshmak
            </li>
            <li>
              <MdOutlineLogout size={23} />
              Ulgamdan chykmak
            </li>
          </motion.ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
