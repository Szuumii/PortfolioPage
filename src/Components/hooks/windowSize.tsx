import * as React from "react"

export default function useWindowSize() {
  const [size, setSize] = React.useState([window.innerHeight, window.innerWidth]);

  React.useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])
  return size;
}