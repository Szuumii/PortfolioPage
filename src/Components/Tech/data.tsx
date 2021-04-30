import {FaReact, FaPython, FaMicrochip} from "react-icons/fa"
import {DiCss3, DiGit, DiLinux} from "react-icons/di"
import {AiFillHtml5} from "react-icons/ai"
import {SiOpengl, SiTypescript, SiCplusplus, SiJavascript, SiPostgresql} from "react-icons/si"
import {BiBoltCircle} from "react-icons/bi"
import {GiProcessor, GiCheckedShield, GiFamilyTree} from "react-icons/gi"

export interface ITechnology {
  id: number,
  icon: any,
  title: string,
  description: string,
}

export const techDiamond: Array<ITechnology[]> = [
  [
    {
      id: 0,
      icon: <DiCss3/>,
      title: "CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ],
  [
    {
      id: 1,
      icon: <AiFillHtml5/>,
      title: "HTML",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      icon: <SiOpengl/>,
      title: "OpenGL",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ],
  [
    {
      id: 3,
      icon: <SiTypescript/>,
      title: "TypeScript",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 4,
      icon: <BiBoltCircle/>,
      title: "FastAPI",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 5,
      icon: <SiCplusplus/>,
      title: "C++",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ],
  [
    {
      id: 6,
      icon: <FaReact/>,
      title: "React",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 7,
      icon: <DiGit/>,
      title: "Git",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 8,
      icon: <FaPython/>,
      title: "Python",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 9,
      icon: <GiProcessor/>,
      title: "x86 and MIPS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ],
  [
    {
      id: 10,
      icon: <SiJavascript/>,
      title: "JavaScript",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 11,
      icon: <GiCheckedShield/>,
      title: "CyberSecurity",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 12,
      icon: <FaMicrochip/>,
      title: "Microcontrollers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ],
  [
    {
      id: 13,
      icon: <SiPostgresql/>,
      title: "PostgreSQL",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 14,
      icon: <DiLinux/>,
      title: "Linux",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ],
  [
    {
      id: 15,
      icon: <GiFamilyTree/>,
      title: "Data structures and",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
]

export const techGrid: Array<ITechnology[]> = [
  [
    {
      id: 0,
      icon: <AiFillHtml5/>,
      title: "HTML",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 1,
      icon: <DiCss3/>,
      title: "CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      icon: <BiBoltCircle/>,
      title: "FastAPI",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      icon: <SiOpengl/>,
      title: "OpenGL",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ],
  [
    {
      id: 4,
      icon: <SiTypescript/>,
      title: "TypeScript",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 5,
      icon: <DiGit/>,
      title: "Git",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 6,
      icon: <FaPython/>,
      title: "Python",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 7,
      icon: <SiCplusplus/>,
      title: "C++",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ],
  [
    {
      id: 8,
      icon: <FaReact/>,
      title: "React",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 9,
      icon: <SiPostgresql/>,
      title: "PostgreSQL",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 10,
      icon: <GiCheckedShield/>,
      title: "CyberSecurity",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 11,
      icon: <GiProcessor/>,
      title: "x86 and MIPS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ],
  [
    {
      id: 12,
      icon: <SiJavascript/>,
      title: "JavaScript",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },    
    {
      id: 13,
      icon: <GiFamilyTree/>,
      title: "Data structures and",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    
    {
      id: 14,
      icon: <DiLinux/>,
      title: "Linux",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 15,
      icon: <FaMicrochip/>,
      title: "Microcontrollers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
]