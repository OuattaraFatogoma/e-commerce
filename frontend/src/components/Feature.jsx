import React from 'react'
import featureArrray from '../images/features/featureArrray'
function Feature() {
  return (
    <section className='features'>
      <div className='container'>
      {
        featureArrray.map(feature =>{
          const {id, title, url, bgColor} = feature;
          return(
            <div className='feature' key={id}>
              <img src={url} alt={title} width="300"/>
              <h5 style={{backgroundColor: bgColor}}>{title}</h5>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Feature