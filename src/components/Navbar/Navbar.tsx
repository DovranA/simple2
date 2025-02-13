import styles from './navbar.module.scss'
import { logo } from '../../assets'
import NotificationBtn from './NotificationBtn'
import { BiUser } from 'react-icons/bi'
import { GoVideo } from 'react-icons/go'
import { MdOutlineLogout } from 'react-icons/md'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '../Modals'
import { useNavigate } from 'react-router-dom'
import Player from '../Player'
import { useAppSelector } from '../../app/hooks'
import { SelectPlayerModal } from '../../features/videoSlice'
const Navbar = () => {
  const navigate = useNavigate()
  const [options, setOptions] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [modalType, setModalType] = useState<string>('')
  const [input, setInput] = useState('')
  const handleChange = (e: any) => {
    if (input.length < 1) {
      navigate('/search')
    }
    setInput(e.target.value)
  }

  const isPlayer = useAppSelector(SelectPlayerModal)
  console.log(isPlayer)
  return (
    <nav className={styles.navbar}>
      <div className={styles.navWrapp}>

      {modal && <Modal setModal={setModal} type={modalType} onOff={modal} />}
      {isPlayer ? <Player /> : null}

      <span onClick={() => navigate('/')}>
        <img src={logo} alt='logo' />
      </span>
      <div className={styles.searchDiv}>
        <input type='text' onChange={handleChange} placeholder='Gozle' />
        <i className='bi bi-search'></i>
      </div>
      <div className={styles.right}>
        <NotificationBtn
          count={100}
          onClick={() => {
            setModal(!modal)
            setModalType('notice')
          }}
        />
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
                setModalType('login')
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
      </div>
    </nav>
  )
}

export default Navbar
