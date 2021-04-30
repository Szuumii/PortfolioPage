import ComputerIcon from "./computerIcon"
import HatIcon from "./hatIcon"
import SnbIcon from "./SnbIcon"

export interface aboutInfo {
  id: number,
  icon: any, 
  description: string
}

export const aboutTable: aboutInfo[] = [
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