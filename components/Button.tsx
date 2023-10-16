import React from 'react'

type ButtonProps = {
  type: 'button' | 'submit',
  title : string,
  icon?: string,
  variant?: string
}

const button = ({type,title,icon,variant}:ButtonProps) => {
  return (
    <button type="button">
       Login 
    </button>
  )
}

export default button
