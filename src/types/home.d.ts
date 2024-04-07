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
type Choosens = {
  details: any[]
  total: number
}
type Data = {
  banner: Banner
  brands: Brands
  topvideos: Topvideos
  topusers: Topusers
  trends: Trends
  totalvideos: TotalVideos
  saylananlar: Choosens
}
export type InitialHome = {
  playerModal: boolean
  loading: boolean
  error: any
  data: Data
}
