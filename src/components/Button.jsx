import React from 'react'

const Button = ({changeQuote,randomColorIndex,colors}) => {
  return (
    <div >
     <button style={{ background: colors[randomColorIndex] }} onClick={changeQuote}><i class="fa-solid fa-arrow-right"></i>  </button> 
    </div>
  )
}

export default Button