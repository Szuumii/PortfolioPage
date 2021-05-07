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
    description: "Computers have always been a great passion of mine. Since I was a kid I've always wondered how do they operate. Even now as an adult they keep me fascinated with their potential and tremendous possibilities that they offer."
  },
  {
    id: 2,
    img: {
      src: hat,
      alt: "Hat Icon",
      height: "70%"
    },
    description: "My passion have pushed me to take up Computer Science as my major at Warsaw University of Technology. My studies provided me with skills and knowledge that allowed me to pursue carrer as a Web Developer."
  },
  {
    id: 3,
    img: {
      src: snowboard,
      alt: "Snowboard Icon",
      height: "100%"
    },
    description: "Snowboarding is a hobby that I've been enjoying for more than 12 years now. I'm a certified instructor and a HUUUGE freestyle competition's fan. I hope to one day watch X-games Aspen live on site."
  }
]