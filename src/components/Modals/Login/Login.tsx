import { RiErrorWarningLine } from 'react-icons/ri'
import styles from './style.module.scss'
import { LuEye } from 'react-icons/lu'
import { FaUserCircle } from 'react-icons/fa'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi'
type Props = {
  close: () => void
}
const Login = ({ close }: Props) => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passVisible, setPassVisible] = useState(false)
  console.log(password)
  return (
    <div className={styles.container}>
      <MdClose size={30} className={styles.close} onClick={close} />
      <div className={styles.header}>
        <FaUserCircle size={70} />
        <h1>Programma dine agza bolan ulanyjylar girip bilyar</h1>
      </div>
      <div className={styles.inp}>
        <input
          type='text'
          placeholder='Ulanyjy ady ya-da telefon belgisi'
          onChange={(e: any) => setName(e.target.value)}
          value={name}
        />
        <LuEye size={25} style={{ visibility: 'hidden' }} />
      </div>
      <div className={styles.inp}>
        <input
          type={passVisible ? 'text' : 'password'}
          placeholder='Achar sozi'
          onChange={(e: any) => setPassword(e.target.value)}
        />
        {passVisible ? (
          <PiEyeBold
            size={25}
            className={styles.inpIcon}
            onClick={() => setPassVisible(!passVisible)}
          />
        ) : (
          <PiEyeClosedBold
            size={25}
            className={styles.inpIcon}
            onClick={() => setPassVisible(!passVisible)}
          />
        )}
      </div>
      <div className={styles.option}>
        <span className={styles.checkBox}>
          <input type='checkbox' name='' id='' />
          Yatda sakla
        </span>
        <span>Acar sozuni unutdum</span>
      </div>
      <button className={styles.submit}>Ulgama gir</button>
      <span className={styles.attention}>
        <RiErrorWarningLine size={25} />
        Agza bolmak uchin admina yuz tutun
      </span>

    </div>
  )
}

export default Login
