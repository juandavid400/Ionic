export interface NoticesI {
    header: {
      title: string
    }
    body: {
      img: string
      content: string
      imgSize?: number
      contentSize?: number
    }
  }