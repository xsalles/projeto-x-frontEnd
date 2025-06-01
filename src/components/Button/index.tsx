"use client";

import { ButtonProps } from '@/interfaces/interfaces'
import React from 'react'

export default function Button({...props}: ButtonProps) {
  return (
    <button className={`w-full py-5 rounded-[12px] ${props.bgColor} ${props.textColor} font-semibold`} onClick={props.onClick}>
        {props.text}
    </button>
  )
}
