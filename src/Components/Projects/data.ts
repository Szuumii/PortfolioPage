
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
    title: "Project Title",
    img: "Image Path",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque corrupti a velit hic aspernatur.",
    link: "https://www.github.com"
  },
  {
    id: 2,
    title: "Project Title",
    img: "Image Path",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque corrupti a velit hic aspernatur.",
    link: "https://www.github.com"
  },
  {
    id: 3,
    title: "Project Title",
    img: "Image Path",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque corrupti a velit hic aspernatur.", 
    link: "https://www.github.com"
  }
]