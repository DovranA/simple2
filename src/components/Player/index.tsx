import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { IoClose } from 'react-icons/io5'
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosInformationCircleOutline,
} from 'react-icons/io'
import { MdScreenRotation, MdVolumeUp } from 'react-icons/md'
import { CiDark, CiSearch } from 'react-icons/ci'
import { TiArrowUpOutline } from 'react-icons/ti'
import LikeBtn from '../Like/LikeBtn'
import { PiShareFat } from 'react-icons/pi'
import { LiaDownloadSolid } from 'react-icons/lia'
import { img1 } from '../../assets'
import { GoScreenFull } from 'react-icons/go'
import Video from './Video/Video'
const Player = () => {
  const [current, setCurrent] = useState(0)
  const [rand, setRand] = useState(0)
  const [fullScreen, setFullScreen] = useState(false)
  const [playing, setPalying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const playerRef = useRef<HTMLDivElement>(null)
  const setCurrChild = (dir: number) => {
    if (current > 0 && current < myVideoData.length - 1) {
      console.log(dir)
      setCurrent(current + dir)
    }
  }
  const myVideoData = [
    {
      id: 300,
      videofile: '/videos/vid1.mp4',
    },
    {
      id: 2,
      videofile: '/videos/vid2.mp4',
    },
    {
      id: 3,
      videofile: '/videos/vid3.mp4',
    },
    {
      id: 4,
      videofile: '/videos/vid4.mp4',
    },
  ]
  const handleScroll = () => {
    if (playerRef.current) {
      const viewHeight = playerRef.current.clientHeight
      const scrollTop = playerRef.current.scrollTop
      setCurrent(Math.round(scrollTop / viewHeight))
    }
  }
  const handleKey = (e: any) => {
    e.preventDefault()
    switch (e.code) {
      case 'Space':
        setPalying((prev) => !prev)
        break
      case 'ArrowUp':
        setCurrChild(-1)
        break
      case 'ArrowDown':
        setCurrChild(1)
        break
    }
  }
  console.log(current)
  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    setCurrent(0)
    setFullScreen(true)
    playerRef.current?.focus()
    playerRef.current?.addEventListener('scrollend', handleScroll, false)
    playerRef.current?.addEventListener('keydown', handleKey, false)
    setCurrent(myVideoData[0].id)
    return () => {
      document.body.style.overflowY = 'auto'
      playerRef.current?.removeEventListener('scrollend', handleScroll)
      playerRef.current?.removeEventListener('keydown', handleKey)
    }
  }, [])
  return (
    <div className={styles.containerPlayer}>
      <span className={styles.videoSpace}>
        <span className={styles.search}>
          <input type='text' placeholder='Gozleg' />
          <CiSearch />
        </span>
        <div className={styles.app__videos} tabIndex={-1} ref={playerRef}>
          {myVideoData.map((item, idx: number) => {
            return (
              <Video
                setPlay={() => setPalying(!playing)}
                key={idx}
                videocontent={item}
                options={{
                  currentId: myVideoData[current].id,
                  muted,
                  playing,
                  volume,
                }}
              />
            )
          })}
        </div>
        <div className={`${styles.contrs} ${styles.left}`}>
          <span className={`${styles.icon} ${styles.colse}`}>
            <IoClose size={40} />
          </span>
          <div className={styles.arrows}>
            <span className={styles.icon}>
              <IoIosArrowUp size={40} />
            </span>
            <span className={styles.icon}>
              <IoIosArrowDown size={40} />
            </span>
          </div>
          <div className={styles.someContrs}>
            <div className={styles.volume}>
              <span className={styles.icon}>
                <MdVolumeUp size={40} />
              </span>
            </div>
            <span className={styles.icon}>
              <TiArrowUpOutline size={40} />
            </span>
            <span className={styles.icon}>
              <CiDark size={40} />
            </span>
          </div>
        </div>
        <span className={`${styles.contrs} ${styles.right}`}>
          <span className={styles.icon}>
            <IoIosInformationCircleOutline size={40} />
          </span>
          <div className={styles.actions}>
            <span className={styles.icon}>
              <LikeBtn size={30} />
            </span>
            <p>100k</p>
            <span className={styles.icon}>
              <PiShareFat size={30} />
            </span>
            <p>100k</p>
            <span className={styles.icon}>
              <LiaDownloadSolid size={30} />
            </span>
            <p>100k</p>
          </div>
          <div className={styles.someContrs}>
            <span
              className={styles.icon}
              onClick={() => {
                console.log('first')
              }}
              style={{ visibility: 'hidden' }}
            >
              <MdScreenRotation size={40} />
            </span>
            <span
              className={styles.icon}
              onClick={() => {
                setFullScreen(!fullScreen)
              }}
            >
              <GoScreenFull size={40} />
            </span>
          </div>
        </span>
      </span>
      {fullScreen && (
        <span className={styles.infoSpace}>
          <div className={styles.title}>
            <img src={img1} alt='' />
            <h3>title</h3>
          </div>
          <div className={styles.message}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa
            dolores ad delectus tenetur, aut deserunt quia doloribus sapiente
            ipsum perferendis numquam earum assumenda nesciunt expedita ducimus?
            Accusamus, assumenda neque.
          </div>
          <div className={styles.message}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa
            dolores ad delectus tenetur, aut deserunt quia doloribus sapiente
            ipsum perferendis numquam earum assumenda nesciunt expedita ducimus?
            Accusamus, assumenda neque.
          </div>
        </span>
      )}
    </div>
  )
}

export default Player
