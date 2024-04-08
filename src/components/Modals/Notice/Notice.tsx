import { MdClose } from 'react-icons/md'
import styles from './style.module.scss'
import { img1 } from '../../../assets'
type Props = {
  close: () => void
}
const Notice = ({ close }: Props) => {
  return (
    <div className={styles.container}>
      <MdClose size={30} className={styles.close} onClick={close} />
      <h1>Bildirishler</h1>
      <ul>
        <li>
          <img src={img1} alt='img1' />
          <span className={styles.content}>
            <span className={styles.active}></span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ratione iste quos minima culpa fugiat placeat aspernatur est cum
              explicabo quas, voluptate sequi cupiditate doloremque deleniti
              consectetur nostrum, odio numquam!
            </p>
            <span>01.02.2003</span>
          </span>
        </li>
        <li>
          <img src={img1} alt='img1' />
          <span className={styles.content}>
            <span className={styles.active}></span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ratione iste quos minima culpa fugiat placeat aspernatur est cum
              explicabo quas, voluptate sequi cupiditate doloremque deleniti
              consectetur nostrum, odio numquam!
            </p>
            <span>01.02.2003</span>
          </span>
        </li>
        <li>
          <img src={img1} alt='img1' />
          <span className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ratione iste quos minima culpa fugiat placeat aspernatur est cum
              explicabo quas, voluptate sequi cupiditate doloremque deleniti
              consectetur nostrum, odio numquam!
            </p>
            <span>01.02.2003</span>
          </span>
        </li>
        <li>
          <img src={img1} alt='img1' />
          <span className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ratione iste quos minima culpa fugiat placeat aspernatur est cum
              explicabo quas, voluptate sequi cupiditate doloremque deleniti
              consectetur nostrum, odio numquam!
            </p>
            <span>01.02.2003</span>
          </span>
        </li>
        <li>
          <img src={img1} alt='img1' />
          <span className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ratione iste quos minima culpa fugiat placeat aspernatur est cum
              explicabo quas, voluptate sequi cupiditate doloremque deleniti
              consectetur nostrum, odio numquam!
            </p>
            <span>01.02.2003</span>
          </span>
        </li>
        <li>
          <img src={img1} alt='img1' />
          <span className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ratione iste quos minima culpa fugiat placeat aspernatur est cum
              explicabo quas, voluptate sequi cupiditate doloremque deleniti
              consectetur nostrum, odio numquam!
            </p>
            <span>01.02.2003</span>
          </span>
        </li>
        <li>
          <img src={img1} alt='img1' />
          <span className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ratione iste quos minima culpa fugiat placeat aspernatur est cum
              explicabo quas, voluptate sequi cupiditate doloremque deleniti
              consectetur nostrum, odio numquam!
            </p>
            <span>01.02.2003</span>
          </span>
        </li>
        <li>
          <img src={img1} alt='img1' />
          <span className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ratione iste quos minima culpa fugiat placeat aspernatur est cum
              explicabo quas, voluptate sequi cupiditate doloremque deleniti
              consectetur nostrum, odio numquam!
            </p>
            <span>01.02.2003</span>
          </span>
        </li>
      </ul>
      <button>Hemmesini okady hasap et</button>
    </div>
  )
}

export default Notice
