"use client";

import { ButtonProps } from '@/interfaces/interfaces'
import React from 'react'

export default function Button({...props}: ButtonProps) {
  return (
    <button className={`w-full py-5 rounded-[12px] transition-disabled duration-300 ease-in-out ${props.disabled ? "bg-gray-300 text-gray-400 cursor-not-allowed" : `${props.bgColor} ${props.textColor}`}  font-semibold`} onClick={props.onClick} disabled={props.disabled}>
        {props.text}
    </button>
  )
}
