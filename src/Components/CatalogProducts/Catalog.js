import './Catalog.css';

import Cards from '../Cards/Cards';
import React from 'react'

function Catalog({sectionCatalog, myIcons, setMyIcons}) {
    var names = sectionCatalog.name
  return (
    <div className="mainCatalog">
       {
        names.map((name, index)=>{
            return (
                <div key={index}>
                    <Cards key={index} name={name.name} IconName = {name.IconName} myIcons={myIcons} setMyIcons={setMyIcons} index={index} />

                </div>
            )
        })
       }
    </div>
  )
}

export default Catalog
