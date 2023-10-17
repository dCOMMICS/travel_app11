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
    <button type="button">
       Login 
    </button>
  )
}

export default button
