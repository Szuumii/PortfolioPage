export type link = {
  id: number,
  name: string,
  to: string,
  spy: boolean,
  smooth:boolean
}

export const links: link[] = [
  {
    id: 1,
    name: "Home",
    to: "home",
    spy: true,
    smooth: true
  },
  {
    id: 2,
    name: "About Me",
    to: "about",
    spy: true,
    smooth: true
  },
  {
    id: 3,
    name: "Tech Stack",
    to: "tech",
    spy: true,
    smooth: true
  },
  {
    id: 4,
    name: "Projects",
    to: "projects",
    spy: true,
    smooth: true
  },
  {
    id: 5,
    name: "Contact",
    to: "contact",
    spy: true,
    smooth: true
  },

];