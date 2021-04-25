type signStyle = {
  fontSize: string,
  color: string,
  margin: string
}

const signStyles: signStyle[] = [
  {
    fontSize: "2.5vmax",
    color: "#FF6D70",
    margin: "0",
  },
  {
    fontSize: "4vmax",
    color: "#ECECEE",
    margin: "0",
  },
  {
    fontSize: "1.5vmax",
    color: "#ECECEE",
    margin: "0",
  }
]

const sign: string[] = [
  "Hello, I'm",
  "Jakub Szumski",
  "I am Web Developer and Computer Science",
  "Student at Warsaw Univeristy of Technology"
]

export default function Sign() {
  return(
    <div className="sign">
      {sign.map((text: string) => {
        const styleIdx = sign.indexOf(text) === 3 ? 2 : sign.indexOf(text);
        const id = sign.indexOf(text);
        const style = signStyles[styleIdx];
        return (
          <p key={id} style={style}>{text}</p>
        );
      })}
    </div>
  );
};