import styles from './navbar.module.scss'
type Props = {
  count?: number
  onClick?: () => void
}
const NotificationBtn = ({ count = 0, onClick }: Props) => {
  return (
    <span className={styles.notificDiv} onClick={onClick}>
      <span className={styles.count}>{count > 99 ? 99 : count}</span>
      <i className='bi bi-bell'></i>
    </span>
  )
}
export default NotificationBtn
