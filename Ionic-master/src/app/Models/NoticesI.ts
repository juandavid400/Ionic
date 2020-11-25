export interface NoticesI {
    header: {
      id:number
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