"use client"

import { InputProps } from "@/interfaces/interfaces";

export default function Input({ ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={props.id} className="text-[16px] text-[#666666]">
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="w-full py-4 pl-5 text-[16px] text-[#666666] rounded-[12px] border border-[rgba(102,102,102,0.5)] focus:border-[rgba(102,102,102,1)] focus:outline-none placeholder:text-[#666666] transition-border duration-300 ease-in-out"
      />
    </div>
  );
}
