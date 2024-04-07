import { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
type Props = {
  videocontent: any
  setPlay: (prev: any) => void
  options?:
    | { playing: boolean; volume: number; muted: boolean; currentId: number }
    | undefined
}
const Video = ({ videocontent, options, setPlay }: Props) => {
  const [progress, setProgress] = useState<number>(0)
  const [videoTime, setVideoTime] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    setVideoTime(Number(videoRef.current?.duration))
  }, [])
  useEffect(() => {
    setProgress((currentTime / videoTime) * 100)
  }, [currentTime])
  const handleProgress = (e: any) => {
    const newTime = Math.min(
      Math.max((videoTime / 100) * e.target.value, 0),
      videoTime
    )
    setProgress(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = newTime
    }
  }
  useEffect(() => {
    if (videoRef.current && options) {
      videoRef.current.volume = Math.min(Math.max(options.volume, 0), 1)
      if (options.currentId === videocontent.id && options?.playing) {
        videoRef.current?.play()
      } else {
        videoRef.current?.pause()
      }
    }
  }, [options])
  return (
    <div className={styles.video}>
      <video
        onClick={setPlay}
        className={
          // videocontent?.is_vertical
          // ?
          `${styles.video__player} ${styles.fitWidth}`
          // : `${styles.video__player} ${styles.fullWidth}`
        }
        loop
        ref={videoRef}
        muted={options?.muted}
      >
        <source src={String(videocontent?.videofile)} type='video/mp4'></source>
      </video>
      <span
        className={
          // videocontent?.is_vertical
          //   ?
          `${styles.videoDurSlice} ${styles.fitWidth}`
          // : `${styles.videoDurSlice} ${styles.fullWidth}`
        }
      >
        <span className={styles.duration}>
          {Math.floor(currentTime / 60) +
            ':' +
            ('0' + Math.floor(currentTime % 60)).slice(-2)}
        </span>
        <input
          type='range'
          max={100}
          value={progress}
          className={styles.slice}
          onChange={handleProgress}
        />
      </span>
    </div>
  )
}

export default Video
