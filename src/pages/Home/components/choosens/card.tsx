import PlayBtn from '../../../../components/PlayBtn/PlayBtn'
import styles from './style.module.scss'
const Card = () => {
  return (
    <div className={styles.card}>
      <span>
        <i className='bi bi-file-earmark-play'></i>
        <p>10</p>
      </span>
      <img src='/card1.png' alt='' />
      <PlayBtn />
    </div>
  )
}

export default Card
