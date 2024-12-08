import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
}

const InputBox = ({ labelText, error, ...props }: Props) => {
  return (
    <div className={props.className}>
      <label
        className={`block text-slate-200 font-extralight mb-2 text-base lg:text-lg xl:text-xl `}
      >
        {labelText}
      </label>
      <input
        className={`border-b  focus:border focus:rounded-md disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-transparent focus:shadow focus:text-black focus:bg-white
              ${
                error ? " border-red-500   animate-shake" : "border-slate-400"
              }`}
        {...props}
      ></input>
    </div>
  );
};

export default InputBox;