import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
const Player = () => {
  const isOpen = false
  const [currentid, setCurrentId] = useState<number>(0)
  const container = useRef<HTMLDivElement>(null)
  const myVideoData = [
    {
      id: 300,
      video: '/videos/vid1.mp4',
    },
    {
      id: 2,
      video: '/videos/vid2.mp4',
    },
    {
      id: 3,
      video: '/videos/vid3.mp4',
    },
    {
      id: 4,
      video: '/videos/vid4.mp4',
    },
    {
      id: 5,
      video: '/videos/vid5.mp4',
    },
    {
      id: 1,
      video: '/videos/vid1.mp4',
    },
    {
      id: 2,
      video: '/videos/vid2.mp4',
    },
    {
      id: 3,
      video: '/videos/vid3.mp4',
    },
    {
      id: 4,
      video: '/videos/vid4.mp4',
    },
    {
      id: 5,
      video: '/videos/vid5.mp4',
    },
  ]
  isOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto')
  const handleScroll = () => {
    if (container.current) {
      const viewHeight = container.current.clientHeight
      const scrollTop = container.current.scrollTop
      setCurrentId(Math.round(scrollTop / viewHeight))
    }
  }
  useEffect(() => {
    container.current?.addEventListener('scrollend', handleScroll, false)
    return () => {
      container.current?.removeEventListener('scrollend', handleScroll)
    }
  }, [])
  useEffect(() => {
    console.log(currentid)
    console.log(myVideoData[currentid].id)
  }, [currentid])
  return (
    <div className='modalContainer'>
      <div className={styles.vidContain}>
        <div className={styles.vidWrapper} ref={container}>
          {myVideoData.map((item, idx) => (
            <div
              // onClick={(e) => console.log(e.clientX)}
              key={idx}
              className={styles.videoDiv}
            >
              <video loop className={styles.video} src={item.video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Player
