import React from 'react'
import { Filters, Products } from '../components'

function Shop() {
  return (
    <main className='shop'>
      <Filters/>
      <Products/>
    </main>
  )
}

export default Shop