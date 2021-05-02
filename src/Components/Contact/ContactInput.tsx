import React, { FC } from "react"

export const ContactInput:FC<{type: string, value:string, onChange: (value: React.SetStateAction<string>) => void}> = ({type, value, onChange}) => {

  return(
    <input
      className={`contact__form__${type}`}
      type={type}
      id={type}
      name={type}
      value={value}
      placeholder={type}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};