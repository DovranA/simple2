import { Link } from 'react-router-dom'
type Props = {
  location: string
}
const TopLink = ({ location }: Props) => {
  return (
    <p>
      <Link to='/'>Bas Sahypa / </Link>
      <strong>{location}</strong>
    </p>
  )
}

export default TopLink
