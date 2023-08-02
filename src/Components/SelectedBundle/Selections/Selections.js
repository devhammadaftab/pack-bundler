import './selections.css'

import React from 'react'

function Selections({myIcons}) {
  return (
    <div className='mainSelection'>
        {
            myIcons.length === 3? 
            myIcons.map((Icon, index) => {
                return(
                    <React.Fragment key={index}>
                        <Icon size={30} color="blue" />
                        {index === 2?<div key={index}> <button className='selectionButton'>Add to Cart</button> </div>: null }
                        
                    </React.Fragment>
                )
            })
            :
            myIcons.map((Icon, index) => {
                return(
                    <Icon size={30} color="blue" key={index} />
                )
            })
        }
    </div>
  )
}

export default Selections
