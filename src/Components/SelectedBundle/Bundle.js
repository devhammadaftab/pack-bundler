import './Bundle.css'

import React from 'react'
import Selections from './Selections/Selections'

function Bundle({myIcons}) {
  return (
    <div className='mainBundle'>
      <h3>Build Your Pack</h3>
      <h4>$33.99</h4>
      <Selections myIcons={myIcons} />
    </div>
  )
}

export default Bundle
