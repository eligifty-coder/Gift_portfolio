import React from 'react'

function Btn({children, path, className}) {
   return (
   <a href={path} className={className}>{children}</a>
   )
}

export default Btn
