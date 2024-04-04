import styles from './navbar.module.scss'
import { logo } from '../../assets'
import NotificationBtn from './NotificationBtn'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <span>
        <img src={logo} alt='logo' />
      </span>
      <div className={styles.searchDiv}>
        <input type='text' placeholder='Gozle' />
        <i className='bi bi-search'></i>
      </div>
      <div className={styles.right}>
        <NotificationBtn count={100} />
        <div className={styles.avatar}>
          <img src='/card1.png' alt='' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
