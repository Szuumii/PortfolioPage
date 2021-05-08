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
    description: "Computers have always been a great passion of mine. Since I was a kid I've always wondered how they operate. As I grew older and kept learning I've discovered potential and capabilities that they offer."
  },
  {
    id: 2,
    img: {
      src: hat,
      alt: "Hat Icon",
      height: "70%"
    },
    description: "My passion have pushed me towards studies with Computer Science as my major at Warsaw University of Technology. They provided me with skills and knowledge that allowed me to pursue a carrer as a Web Developer."
  },
  {
    id: 3,
    img: {
      src: snowboard,
      alt: "Snowboard Icon",
      height: "100%"
    },
    description: "I'm also an active person. Snowboarding is a hobby that I've been enjoying for more than 12 years now. I'm a certified instructor and a huge freestyle competition's fan. My dream is to watch X Games Aspen live on site."
  }
]