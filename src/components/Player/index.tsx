import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { IoClose } from 'react-icons/io5'
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosInformationCircleOutline,
} from 'react-icons/io'
import { MdScreenRotation } from 'react-icons/md'
import { CiDark, CiSearch } from 'react-icons/ci'
import { TiArrowUpOutline } from 'react-icons/ti'
import LikeBtn from '../Like/LikeBtn'
import { PiShareFat } from 'react-icons/pi'
import { LiaDownloadSolid } from 'react-icons/lia'
import { img1 } from '../../assets'
import { GoScreenFull } from 'react-icons/go'
import Video from './Video/Video'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  SlctPlayerOpenLock,
  VideoData,
  setLikeVideo,
  setPlayerModal,
  setPlayerVideos,
} from '../../features/videoSlice'
import axios from 'axios'
import { setPinnedLike } from '../../features/homeSlice'
import { ImVolumeLow, ImVolumeMedium, ImVolumeMute2 } from 'react-icons/im'
const Player = () => {
  const [current, setCurrent] = useState(0)
  const [rand, setRand] = useState(0)
  const [fullScreen, setFullScreen] = useState(false)
  const [playing, setPalying] = useState(true)
  const [muted, setMuted] = useState(false)
  const [spin, setSpin] = useState<number>(0)
  const [volume, setVolume] = useState(0.6)
  const playerRef = useRef<HTMLDivElement>(null)
  const videospace = useRef<HTMLDivElement>(null)
  const videosArr = useAppSelector(VideoData)
  const dispatch = useAppDispatch()
  const openPlayerLock = useAppSelector(SlctPlayerOpenLock)
  const handleScroll = () => {
    if (playerRef.current) {
      const viewHeight = playerRef.current.clientHeight
      const scrollTop = playerRef.current.scrollTop
      setCurrent(Math.round(scrollTop / viewHeight))
    }
  }
  const handleKey = (e: any) => {
    switch (e.code) {
      case 'Space':
        e.preventDefault()
        setPalying((prev) => !prev)
        break
      case 'ArrowLeft':
        e.preventDefault()
        setSpin(-1)
        break
      case 'ArrowRight':
        e.preventDefault()
        setSpin(1)
        break
      case 'ArrowUp':
        e.preventDefault()
        setCurrent((prev) => (prev > 0 ? --prev : prev))
        setRand(Math.random())
        break
      case 'ArrowDown':
        e.preventDefault()
        setCurrent((prev) => (prev < videosArr.length - 1 ? ++prev : prev))
        setRand(Math.random())
        break
      case 'KeyM':
        e.preventDefault()
        setMuted((prev) => !prev)
        break
      case 'KeyL':
        e.preventDefault()
        handleLike(videosArr[current].id)
        break
    }
  }
  useEffect(() => {
    setCurrent(0)
    setFullScreen(true)
    videospace.current?.focus()
    document.body.style.overflow = 'hidden'
    playerRef.current?.addEventListener('scrollend', handleScroll, false)

    return () => {
      document.body.style.overflow = 'auto'
      playerRef.current?.removeEventListener('scrollend', handleScroll)
    }
  }, [])
  useEffect(() => {
    playerRef.current?.children[current].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    })
  }, [rand])
  // const apiUrl = import.meta.env.VITE_API_PATH

  const handleLike = async (id: number) => {
    try {
      const res = await axios.put(`/api/videos/${id}/like`, {
        withCredentials: true,
      })
      if (openPlayerLock === 'pinned') {
        dispatch(setPinnedLike({ id: id, like: res.data.likeNum }))
      }
      dispatch(setLikeVideo({ id: id, like: res.data.likeNum }))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div
      className={styles.containerPlayer}
      tabIndex={-1}
      onKeyDown={handleKey}
      ref={videospace}
    >
      <span className={styles.videoSpace}>
        <span className={styles.search}>
          <input type='text' placeholder='Gozleg' />
          <CiSearch />
        </span>
        <div className={styles.app__videos} ref={playerRef}>
          {videosArr.map((item: any, idx: number) => {
            return (
              <Video
                setPlay={() => setPalying(!playing)}
                key={idx}
                videocontent={item}
                options={{
                  currentId: videosArr[current].id,
                  muted,
                  playing,
                  volume,
                  spin,
                  setSpin: (value: number) => setSpin(value),
                }}
              />
            )
          })}
        </div>
        <div className={`${styles.contrs} ${styles.left}`}>
          <span
            onClick={() => {
              dispatch(setPlayerModal())
              dispatch(setPlayerVideos({ data: [], id: null }))
            }}
            className={`${styles.icon} ${styles.colse}`}
          >
            <IoClose size={40} />
          </span>
          <div className={styles.arrows}>
            <span
              className={styles.icon}
              onClick={() => {
                setCurrent((prev) => (prev > 0 ? --prev : prev))
                setRand(Math.random())
              }}
            >
              <IoIosArrowUp size={40} />
            </span>
            <span
              className={styles.icon}
              onClick={() => {
                console.log('first')
                setCurrent((prev) =>
                  prev < videosArr.length - 1 ? ++prev : prev
                )
                setRand(Math.random())
              }}
            >
              <IoIosArrowDown size={40} />
            </span>
          </div>
          <div className={styles.someContrs}>
            <div className={styles.volume}>
              <div className={styles.range}>
                <input
                  type='range'
                  id='range2'
                  className={styles.rangeInput}
                  style={{
                    background: `linear-gradient(to right, #000 ${
                      volume * 100
                    }%, #fff ${volume * 100}%)`,
                  }}
                  max={1}
                  value={volume}
                  min={0}
                  step={0.1}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setVolume(Number(e.target.value))
                  }}
                />
              </div>
              {/* <input
                type='range'
                max={1}
                value={volume}
                min={0}
                step={0.1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setVolume(Number(e.target.value))
                }}
              /> */}
              <span
                className={styles.icon}
                onClick={() => {
                  setMuted((prev) => !prev)
                }}
              >
                {volume > 0.5 && !muted ? (
                  <ImVolumeMedium size={30} />
                ) : volume === 0 || muted ? (
                  <ImVolumeMute2 size={30} />
                ) : (
                  <ImVolumeLow size={30} />
                )}
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
              <LikeBtn
                onClick={() => handleLike(videosArr[current].id)}
                size={30}
              />
            </span>
            <p>{videosArr[current].like_count}</p>
            <span
              className={styles.icon}
              onClick={() => {
                navigator.clipboard
                  .writeText(
                    `http://localhost:5173/videos/${videosArr[current].id}?share=${videosArr[current].share_token}`
                  )
                  .then(() => {
                    console.log('copyed')
                  })
                  .catch((err) => {
                    console.log(err)
                  })
              }}
            >
              <PiShareFat size={30} />
            </span>
            <p>{videosArr[current].share_count}</p>
            <span className={styles.icon}>
              <LiaDownloadSolid size={30} />
            </span>
            <p>{videosArr[current].download_count}</p>
          </div>
          <div className={styles.someContrs}>
            <span
              className={styles.icon}
              onClick={() => {
                console.log('first')
              }}
              style={{
                visibility: videosArr[current].is_vertical
                  ? 'hidden'
                  : 'visible',
              }}
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
