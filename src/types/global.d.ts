export type video = {
  id: number
  videofile: string
  image_path: string
  tags: {
    id: number
    name: string
  }[]
  subcategory: string
  username: string
  user_avatar: string
  download_link: string
  title: string
  description: string
  view_count: number
  share_count: number
  like_count: number
  share_token: string
  download_count: number
  created_at: string
  updated_at: string
  is_active: boolean
  is_vertical: boolean
  user: number
  category: number
}
export type videos = {
  data: video[]
  playerModal: boolean
  lockation: string
}
