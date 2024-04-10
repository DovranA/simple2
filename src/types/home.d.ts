export type Banner = {
  images: any[]
}

type Brands = {
  image: string
  total: number
}

type Topvideos = {
  image: string
  total: number
}
type Topusers = {
  image: string
  total: number
}
type Trends = {
  image: string
  total: number
}

type TotalVideos = {
  image: string
  total: number
}

export type Saylanan = {
  created_at: string
  id: number
  image: string
  name: string
  total_views: number
  video_count: number
}
export type Saylananlar = {
  details: Saylanan[]
  total: number
}
export type PinnedVideos = {
  detail: any[]
  total: number
}
type Data = {
  banner: Banner
  brands: Brands
  topvideos: Topvideos
  topusers: Topusers
  trends: Trends
  totalvideos: TotalVideos
  saylananlar: Saylananlar
  pinnedVideos: PinnedVideos
}
export type InitialHome = {
  playerModal: boolean
  loading: boolean
  error: any
  data: Data
}
