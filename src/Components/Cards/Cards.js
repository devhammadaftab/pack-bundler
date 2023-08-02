import './Cards.css'
import {  } from '../../App'

import * as Icons from 'react-icons/gi'

import React, { useState } from 'react'

function Cards({name, IconName, myIcons, setMyIcons, index}) {
    const [value, setValue] = useState(0)

    function handleClick(event, IconComponent){
        if(event.target.id === 'minus'){
            if(value === 0){
                return;
            }
            else{
                setValue(value - 1);
                const newIcons = myIcons.filter((icons, index) =>{
                    if(icons === IconComponent && myIcons.indexOf(icons) === index){
                        return false;
                    }
                    return true;
                })
                setMyIcons(newIcons)
            }
        }
        else if(event.target.id === 'plus' && myIcons.length < 3){
            setValue(value + 1)
            setMyIcons([...myIcons, IconComponent])
        }
    }

    const IconComponent = Icons[IconName];

  return (
    <div className="allCards">
        <h4>{name}</h4>
        {IconComponent && < IconComponent key={index} size={30} color="blue" className="iconStyling" />}
        <div className="allHandlers">
            <button className = "minus" onClick={event => handleClick(event, IconComponent)} id='minus'>-</button>
            <h5>{value}</h5>
            <button className = "plus" onClick={event => handleClick(event, IconComponent)} id='plus'>+</button>
        </div>
    </div>
  )
}

export default Cards
