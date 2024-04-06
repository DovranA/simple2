import { useEffect, useState } from 'react'
import { LuHeart } from 'react-icons/lu'
import { motion } from 'framer-motion'
type Props = {
  size?: number
  liked?: boolean
}
const LikeBtn = ({ size = 23, liked = false }: Props) => {
  const [fill, setFill] = useState<boolean>(false)
  useEffect(() => {
    if (liked) {
      setFill(true)
    } else {
      setFill(false)
    }
  }, [liked])
  return (
    <motion.span
      onClick={() => {
        setFill(!fill)
      }}
      whileTap={{
        scale: 1.2,
      }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      <LuHeart fill={fill ? 'red' : 'transparent'} color='red' size={size} />
    </motion.span>
  )
}

export default LikeBtn
