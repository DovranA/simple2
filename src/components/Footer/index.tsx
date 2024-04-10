import { Link } from 'react-router-dom'
import styles from './style.module.scss'
import { FaGooglePlay } from 'react-icons/fa6'
import { FaApple } from 'react-icons/fa'
import { IoIosArrowUp } from 'react-icons/io'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapp}>

      <div className={styles.upper}>
        <div className={styles.left}>
          <h1>TM BIZ</h1>
          <p>@TMBIZNES, Turkmenistan. All rights reserved.</p>
        </div>
        <div className={styles.right}>
          <Link to=''>Habarlasmak</Link>
          <Link to='about'>Biz barada</Link>
          <Link to='about'>Ulanys duzgunleri</Link>
        </div>
      </div>
      <div className={styles.toTopBtn}>
        <Link to='#top'>
          <IoIosArrowUp size={20} />
        </Link>
      </div>
      <div className={styles.under}>
        <h3>Mobil gosundyny yuklap alyn</h3>
        <div className={styles.links}>
          <Link to='http://google.com'>
            <FaGooglePlay size={26} />
            <span>
              <p>Get it on</p>
              <h4>Google Play </h4>
            </span>
          </Link>
          <Link to='http://google.com'>
            <FaApple size={26} />
            <span>
              <p>Download on the</p>
              <h4>App Store</h4>
            </span>
          </Link>
        </div>
      </div>
    </div>
    </div>

  )
}
export default Footer
