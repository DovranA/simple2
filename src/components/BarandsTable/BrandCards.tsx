import styles from './styles.module.scss'
type Props = {
  children: React.ReactNode
}
const BrandsCards = ({ children }: Props) => {
  return <div className={styles.brandCards}>{children}</div>
}

export default BrandsCards
