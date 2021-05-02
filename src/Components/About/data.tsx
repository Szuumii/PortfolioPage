import ComputerIcon from "./ComputerIcon"
import HatIcon from "./HatIcon"
import SnbIcon from "./SnbIcon"

export interface IAboutInfo {
  id: number,
  icon: any, 
  description: string
}

export const aboutTable: IAboutInfo[] = [
  {
    id: 1,
    icon: <ComputerIcon/>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, itaque facere? Dicta alias qui iste omnis ea eligendi blanditiis similique perferendis voluptate perspiciatis reprehenderit sapiente quas voluptatem, labore, distinctio ipsum!"
  },
  {
    id: 2,
    icon: <HatIcon/>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, itaque facere? Dicta alias qui iste omnis ea eligendi blanditiis similique perferendis voluptate perspiciatis reprehenderit sapiente quas voluptatem, labore, distinctio ipsum!"
  },
  {
    id: 3,
    icon: <SnbIcon/>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, itaque facere? Dicta alias qui iste omnis ea eligendi blanditiis similique perferendis voluptate perspiciatis reprehenderit sapiente quas voluptatem, labore, distinctio ipsum!"
  }
]