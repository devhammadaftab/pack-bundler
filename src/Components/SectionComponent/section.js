import './section.css';

import Catalog from '../CatalogProducts/Catalog';
import React from 'react';

function Section({dataWrapper, myIcons, setMyIcons}) {
  const sections = dataWrapper.sections;
  return (
    <div className='mainSection'>
      {
        sections.map((section, index) => {
          return(
            <div key={section.id}>
              <h2 className="h2">Pack Section {section.id}</h2>
              <Catalog key={index} sectionCatalog={section.catalog} myIcons={myIcons} setMyIcons={setMyIcons} />
            </div>
          )
        })

      }
      
    </div>
  )
}

export default Section
