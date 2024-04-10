import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import {
  BsSortAlphaDown,
  BsSortAlphaUp,
  BsSortNumericDown,
  BsSortNumericUp,
} from 'react-icons/bs'
type Props = {
  count: number
  sortby: (by: string) => void
  sort: string
}
let icon = <BsSortAlphaDown size={24} />
const FilterNav = ({ count, sortby, sort }: Props) => {
  const [options, setOptions] = useState(false)

  useEffect(() => {
    switch (sort) {
      case 'az':
        icon = <BsSortAlphaDown size={24} />
        break
      case 'za':
        icon = <BsSortAlphaUp size={24} />
        break
      case 'desc':
        icon = <BsSortNumericDown size={24} />
        break
      case 'asc':
        icon = <BsSortNumericUp size={24} />
        break
    }
  }, [sort])
  return (
    <div className={styles.navbar}>
      <h3>Trendlar ({count})</h3>
      <span>
        <span onClick={() => setOptions((prev) => !prev)}>{icon}</span>
        {options && (
          <div className={styles.filterDiv}>
            <ul>
              <li
                onClick={() => {
                  sortby('az')
                  setOptions((prev) => !prev)
                }}
              >
                A-Z boyunca
              </li>
              <li
                onClick={() => {
                  sortby('za')
                  setOptions((prev) => !prev)
                }}
              >
                Z-A boyunca
              </li>
              <li
                onClick={() => {
                  sortby('asc')
                  setOptions((prev) => !prev)
                }}
              >
                Wideo sany ulydan kica
              </li>
              <li
                onClick={() => {
                  sortby('desc')
                  setOptions((prev) => !prev)
                }}
              >
                Wideo sany kiciden ula
              </li>
            </ul>
          </div>
        )}
      </span>
    </div>
  )
}

export default FilterNav
