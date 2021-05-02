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
    to: "home-section",
    spy: true,
    smooth: true
  },
  {
    id: 2,
    name: "About Me",
    to: "about-section",
    spy: true,
    smooth: true
  },
  {
    id: 3,
    name: "Tech Stack",
    to: "tech-section",
    spy: true,
    smooth: true
  },
  {
    id: 4,
    name: "Projects",
    to: "projects-section",
    spy: true,
    smooth: true
  },
  {
    id: 5,
    name: "Contact",
    to: "contact-section",
    spy: true,
    smooth: true
  },

];