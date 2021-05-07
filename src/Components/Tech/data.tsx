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


export const descriptions = {
  css: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
  opengl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  typescript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  fastapi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cplusplus: "C++ is the first language that I've ever learned. It gave me opportunities to create amazing projects and grow as a coder. This experience eventually led me to land my first internship",
  react: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  git: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  python: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  assembly: "During my studies I've had some experience with both RISC and CISC architectures. I've learned how to code using MIPS, x86 and x64 assembly languages. This gives me possibilities to work with lower abstraction levels as well",
  javascript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  security: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  microcontrollers: "When I've signed up for ",
  postgresql: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  linux: "Linux is my go to operating system for development. Combined with i3 tiling window manager it increases my productivity and control over every aspect of my evniornment. It also gives me powerfull automation command language bash that helps me deal with dull and repetetive tasks.",
  algo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}

const icons = {
  css: <DiCss3/>,
  html: <AiFillHtml5/>,
  opengl: <SiOpengl/>,
  typescript: <SiTypescript/>,
  fastapi: <BiBoltCircle/>,
  cplusplus: <SiCplusplus/>,
  react: <FaReact/>,
  git: <DiGit/>,
  python: <FaPython/>,
  assembly: <GiProcessor/>,
  javascript: <SiJavascript/>,
  security: <GiCheckedShield/>,
  microcontrollers: <FaMicrochip/>,
  postgresql: <SiPostgresql/>,
  linux: <DiLinux/>,
  algo: <GiFamilyTree/>
}

export const techDiamond: Array<ITechnology[]> = [
  [
    {
      id: 0,
      icon: icons.css,
      title: "CSS",
      description: descriptions.css
    }
  ],
  [
    {
      id: 1,
      icon: icons.html,
      title: "HTML",
      description: descriptions.html
    },
    {
      id: 2,
      icon: icons.opengl,
      title: "OpenGL",
      description: descriptions.opengl
    },
  ],
  [
    {
      id: 3,
      icon: icons.typescript,
      title: "TypeScript",
      description: descriptions.typescript
    },
    {
      id: 4,
      icon: icons.fastapi,
      title: "FastAPI",
      description: descriptions.fastapi
    },
    {
      id: 5,
      icon: icons.cplusplus,
      title: "C++",
      description: descriptions.cplusplus
    }
  ],
  [
    {
      id: 6,
      icon: icons.react,
      title: "React",
      description: descriptions.react
    },
    {
      id: 7,
      icon: icons.git,
      title: "Git",
      description: descriptions.git
    },
    {
      id: 8,
      icon: icons.python,
      title: "Python",
      description: descriptions.python
    },
    {
      id: 9,
      icon: icons.assembly,
      title: "Assembly",
      description: descriptions.assembly
    },
  ],
  [
    {
      id: 10,
      icon: icons.javascript,
      title: "JavaScript",
      description: descriptions.javascript
    },
    {
      id: 11,
      icon: icons.security,
      title: "CyberSecurity",
      description: descriptions.security
    },
    {
      id: 12,
      icon: icons.microcontrollers,
      title: "Microcontrollers",
      description: descriptions.microcontrollers
    },
  ],
  [
    {
      id: 13,
      icon: icons.postgresql,
      title: "PostgreSQL",
      description: descriptions.postgresql
    },
    {
      id: 14,
      icon: icons.linux,
      title: "Linux",
      description: descriptions.linux
    },
  ],
  [
    {
      id: 15,
      icon: icons.algo,
      title: "Data structures and Algorithms",
      description: descriptions.algo
    }
  ]
]

export const techGrid: Array<ITechnology[]> = [
  [
    {
      id: 0,
      icon: icons.html,
      title: "HTML",
      description: descriptions.html
    },
    {
      id: 1,
      icon: icons.css,
      title: "CSS",
      description: descriptions.css
    },
    {
      id: 2,
      icon: icons.fastapi,
      title: "FastAPI",
      description: descriptions.fastapi
    },
    {
      id: 3,
      icon: icons.opengl,
      title: "OpenGL",
      description: descriptions.fastapi
    }
  ],
  [
    {
      id: 4,
      icon: icons.typescript,
      title: "TypeScript",
      description: descriptions.typescript
    },
    {
      id: 5,
      icon: icons.git,
      title: "Git",
      description: descriptions.git
    },
    {
      id: 6,
      icon: icons.python,
      title: "Python",
      description: descriptions.python
    },
    {
      id: 7,
      icon: icons.cplusplus,
      title: "C++",
      description: descriptions.cplusplus
    }
  ],
  [
    {
      id: 8,
      icon: icons.react,
      title: "React",
      description: descriptions.react
    },
    {
      id: 9,
      icon: icons.postgresql,
      title: "PostgreSQL",
      description: descriptions.postgresql
    },
    {
      id: 10,
      icon: icons.security,
      title: "CyberSecurity",
      description: descriptions.security
    },
    {
      id: 11,
      icon: icons.assembly,
      title: "Assembly",
      description: descriptions.assembly
    }
  ],
  [
    {
      id: 12,
      icon: icons.javascript,
      title: "JavaScript",
      description: descriptions.javascript
    },    
    {
      id: 13,
      icon: icons.algo,
      title: "Data structures and Algorithms",
      description: descriptions.algo
    },
    
    {
      id: 14,
      icon: icons.linux,
      title: "Linux",
      description: descriptions.linux
    },
    {
      id: 15,
      icon: icons.microcontrollers,
      title: "Microcontrollers",
      description: descriptions.microcontrollers
    }
  ]
]