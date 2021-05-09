import computer from "../../static/images/computer.png";
import hat from "../../static/images/hat.png";
import snowboard from "../../static/images/snb.png";

export interface IAboutIcon {
  src: string,
  alt: string,
  height: string
}

export interface IAboutInfo {
  id: number,
  img: IAboutIcon, 
  description: string
}

export const aboutTable: IAboutInfo[] = [
  {
    id: 1,
    img: {
      src: computer,
      alt: "Computer Icon",
      height: "100%"
    },
    description: "Computers have always been a great passion of mine. Since I was a kid I've always wondered how they operate. As I grew older and kept learning I've discovered their potential and the capabilities that they offer"
  },
  {
    id: 2,
    img: {
      src: hat,
      alt: "Hat Icon",
      height: "70%"
    },
    description: "My passion has pushed me towards studies in Computer Science as my major at Warsaw University of Technology. It has provided me with the skills and knowledge that has allowed me to pursue a carrer as a Web Developer"
  },
  {
    id: 3,
    img: {
      src: snowboard,
      alt: "Snowboard Icon",
      height: "100%"
    },
    description: "I'm an active person. Snowboarding is a hobby that I have enjoyed for more than 12 years. I'm a certified instructor and a huge freestyle competition fan. My dream is to attend the X Games Aspen and watch it live"
  }
]