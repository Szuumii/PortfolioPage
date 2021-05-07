import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai/"

export const mobileBreakpoint = 800;


export interface socialLink {
  id: number,
  url: string,
  icon: any
}

export const social: socialLink[] = [
  {
    id: 1,
    url: "https://www.instagram.com/szumi__/",
    icon: <AiOutlineInstagram/>
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/jakub-szumski-9405691b8/",
    icon: <AiOutlineLinkedin/>
  },
  {
    id: 3,
    url: "https://github.com/Szuumii",
    icon: <AiOutlineGithub/>
  },
]