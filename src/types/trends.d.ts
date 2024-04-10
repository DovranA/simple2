import { video } from './global'

export type Banner = {
  images: any[]
}
type Data = {
  banner: Banner
  totalTrends: number
  videos: video[]
}
export type InitialTrends = {
  loading: boolean
  error: any
  data: Data
  // options: {
  //   by: string
  //   startfrom: number
  //   limit: number
  // }
}
