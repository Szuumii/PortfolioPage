import project_1_image from "../../static/checkers.svg"
import project_2_image from "../../static/antena.svg"
import project_3_image from "../../static/battleship.svg"


export interface IProject {
  id: number,
  title: string,
  img: string,
  description: string,
  link: string
}

export const projectInfo: IProject[] = [
  {
    id: 1,
    title: "Checkers",
    img: project_1_image,
    description: "Browser based classic game of checkers with implemented AI as an opponent using min-max algorithm.",
    link: "https://github.com/Szuumii/Checkers"
  },
  {
    id: 2,
    title: "IoT Transmitter",
    img: project_2_image,
    description: "IoT transmitter utilizing LoRa communication protocol transfering data from remote soil humidity sensor.",
    link: "https://github.com/Szuumii/LoraWAN"
  },
  {
    id: 3,
    title: "Battleships",
    img: project_3_image,
    description: "Popular multiplayer game of battleships created for browser", 
    link: "https://github.com/Turowska/Battleships"
  }
]