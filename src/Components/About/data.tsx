export interface IAboutIcon {
  src: string,
  alt: string,
  height: string
}

export interface IAboutInfo {
  id: number,
  img: IAboutIcon, 
  description: string
}

export const aboutTable: IAboutInfo[] = [
  {
    id: 1,
    img: {
      src: "../../static/images/computer.png",
      alt: "Computer Icon",
      height: "100%"
    },
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, itaque facere? Dicta alias qui iste omnis ea eligendi blanditiis similique perferendis voluptate perspiciatis reprehenderit sapiente quas voluptatem, labore, distinctio ipsum!"
  },
  {
    id: 2,
    img: {
      src: "../../static/images/hat.png",
      alt: "Hat Icon",
      height: "70%"
    },
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, itaque facere? Dicta alias qui iste omnis ea eligendi blanditiis similique perferendis voluptate perspiciatis reprehenderit sapiente quas voluptatem, labore, distinctio ipsum!"
  },
  {
    id: 3,
    img: {
      src: "../../static/images/snb.png",
      alt: "Snowboard Icon",
      height: "100%"
    },
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, itaque facere? Dicta alias qui iste omnis ea eligendi blanditiis similique perferendis voluptate perspiciatis reprehenderit sapiente quas voluptatem, labore, distinctio ipsum!"
  }
]