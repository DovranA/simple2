import styles from './navbar.module.scss'
type Props = {
  count?: number
}
const NotificationBtn = ({ count = 0 }: Props) => {
  return (
    <span className={styles.notificDiv}>
      <span className={styles.count}>{count > 99 ? 99 : count}</span>
      <i className='bi bi-bell'></i>
    </span>
  )
}
export default NotificationBtn
