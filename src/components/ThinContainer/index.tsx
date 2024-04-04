import styles from './style.module.scss'

type Props = {
  title: string
  btnTitle: string
}
const ThinContainer = ({ title, btnTitle }: Props) => {
  return (
    <div className={styles.container}>
      <nav>
        <h2>{title}</h2>
        <button>{btnTitle}</button>
      </nav>
      <div className={styles.imgContainer}></div>
    </div>
  )
}

export default ThinContainer
