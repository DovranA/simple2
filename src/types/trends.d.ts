import { videos } from './global'

export type Banner = {
  images: any[]
}
type Data = {
  banner: Banner
  totalTrends: number
  videos: videos[]
}
export type InitialTrends = {
  loading: boolean
  error: any
  data: Data
}
