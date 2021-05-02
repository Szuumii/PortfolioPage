import React from "react"



export default function ContactInput(props: {type: string, value:string, onChange: (value: React.SetStateAction<string>) => void}) {

  const {type, value} = props;

  return(
    <input
      className={`contact__form__${type}`}
      type={type}
      id={type}
      name={type}
      value={value}
      placeholder={type}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};