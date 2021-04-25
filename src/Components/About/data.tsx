import { RiComputerLine } from "react-icons/ri"
import { FaGraduationCap, FaSnowboarding } from "react-icons/fa"

export interface aboutInfo {
  id: number,
  icon: any, 
  description: string
}

export const aboutTable: aboutInfo[] = [
  {
    id: 1,
    icon: <RiComputerLine/>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, itaque facere? Dicta alias qui iste omnis ea eligendi blanditiis similique perferendis voluptate perspiciatis reprehenderit sapiente quas voluptatem, labore, distinctio ipsum!"
  },
  {
    id: 2,
    icon: <FaGraduationCap/>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, itaque facere? Dicta alias qui iste omnis ea eligendi blanditiis similique perferendis voluptate perspiciatis reprehenderit sapiente quas voluptatem, labore, distinctio ipsum!"
  },
  {
    id: 3,
    icon: <FaSnowboarding/>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, itaque facere? Dicta alias qui iste omnis ea eligendi blanditiis similique perferendis voluptate perspiciatis reprehenderit sapiente quas voluptatem, labore, distinctio ipsum!"
  }
]