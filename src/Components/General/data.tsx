import { IconType } from "react-icons"
import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai/"

export interface socialLink {
  id: number,
  url: string,
  icon: any
}

export const social: socialLink[] = [
  {
    id: 1,
    url: "https://www.instagram.com/",
    icon: <AiOutlineInstagram/>
  },
  {
    id: 2,
    url: "https://www.linkedin.com/",
    icon: <AiOutlineLinkedin/>
  },
  {
    id: 3,
    url: "https://www.github.com/",
    icon: <AiOutlineGithub/>
  },
]