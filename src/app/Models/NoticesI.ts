export interface NoticesI {
    header: {
      icon:string
      title: string
    }
    body: {
      iconChip: string
      infoCate: string
      img: string
      description: string
      content: string
      imgSize?: number
      contentSize?: number
    }
  }