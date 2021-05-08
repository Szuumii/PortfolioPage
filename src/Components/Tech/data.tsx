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
  html: "Basic building block for the entire web. Good knowledge of this language is the most crucial skill for every web developer to possess.", 
  opengl: "During my internship I had a pleasure of creating a micro version of graphic engine with the usage of OpenGL. I've familiarized myself with most recent versions of this amazing API. I'm also familiar with ES version dedicated for embedded devices like consoles or phones.",
  typescript: "Typescript is my latest discovery. In combination with the React library it gives me a way to create error-proof frontend applications easily.",
  fastapi: "This awesome python restAPI library is a lightweight masterpiece. Using it I can set up a backend site for my applications almost instantly.",
  cplusplus: "C++ is the first language that I've ever learned. It has given me an opportunities to create amazing projects and grow up as a coder. This experience eventually led me to land my first internship. With C++ as a baseline I can work with any other strongly typed language without any problems.",
  react: "React is my go to front end library. It provides me with tools to create virtually any design that I want.",
  git: "Git is by far the most reliable and popular version control system there is. Knowledge of workflows for platforms like Github or Gerrit allows me to work in teams and collaborate with other programmes. It also provides me a way to share my code with the rest of the world.",
  python: "Python is my favourite language to use for every task. It's flexibility and simplicy makes it extremely powerfull tool to have in my tech stack.",
  assembly: "While studying I've had some experience with both RISC and CISC architectures. I've learned how to code using MIPS, x86 and x64 assembly languages. This experience allows me to work with lower abstraction levels where knowledge of assemby is neccessary to analyze the code.",
  javascript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  security: "Cybersecurity is the area of computer science that I'm very passionate about. In my spare time I solve CTF challenges and crack different VM's in order to deepen my knowledge in this area.",
  microcontrollers: "Although short, my experience with microcontrollers and embedded devices has taught me that if you have patience and devotion you can create anything you want. Thanks to the familiarity with STM32 platform I'm not scared of taking up any hardware challenge or project if necessary.",
  postgresql: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  linux: "Linux is my go to operating system for development. Combined with i3 tiling window manager it increases my productivity and control over every aspect of my evniornment. It also gives me powerfull automation command language bash that helps me deal with dull and repetetive tasks.",
  algo: "As a Computer Science major I think that the knowledge of data structures, algorithms and design patterns is the most universal and essential skill to have. During many classes and courses I had the opportunity to analyze different structures and apply them to solve many different tasks and assignments."
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