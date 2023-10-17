import Image from 'next/image'
import React from 'react'

type ButtonProps = {
  type: 'button' | 'submit',
  title : string,
  icon?: string,
  variant: 'btn_dark_green',
}

// edit this early morning

const button = ({type,title,icon,variant}:ButtonProps) => {
  return (
    <button type={type} >

      {icon &&<Image src={icon} alt={title} width={24} height={24} height={24}}
       Login 
    </button>
  )
}

export default button
