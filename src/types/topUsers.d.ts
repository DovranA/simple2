export type InitialRank = {
    usersActiveBtn: number,
    dataUsers: DataUser,
    dataVideos: VideosData
    videosActiveBtn:number,
    loadUser: boolean,
    errorUser: any,
    loadVideo: boolean,
    errorVideo: any
}

export type DataUser = {
    banner: {
        images: any[]
    },
    userprofle: UserProfile[],
}

export type VideosData = {
    banner: {
        images: any[]
    },
    videos: TopVideo[]
}


export type UserProfile = {
    avatar: string,
    birth_date: string,
    description: string,
    editors_choice: boolean
    gender: string
    id : number
    point:number
    region: string
    total_canceld_videos: number
    total_on_checking_videos: number
    total_video_downloaded: number
    total_video_likes: number
    total_video_shares: number
    total_video_views: number
    total_videos: number
    user_id: number 
    username: string
    video_upload_limit: number
}

export type TopVideo = {
        id: number,
        videofile: string,
        image_path: string,
        tags: [
            {
                id: number,
                name: string
            },
            {
                id: number,
                name: string
            }
        ],
        subcategory: string,
        username: string,
        saylananlar: string,
        user_avatar: string,
        download_link:string,
        title: string,
        description: string,
        location: string,
        chekedStatus: boolean,
        cancel: boolean,
        pinned:boolean,
        view_count:number,
        share_count: number,
        like_count: number,
        share_token: string,
        download_count: number,
        posted_at: string,
        created_at: string,
        updated_at: string,
        is_active: boolean,
        trend: boolean,
        is_vertical: boolean,
        user: number,
        category: number,
        brands: any
}