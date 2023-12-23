import React from 'react'
import {Hero, Feature, Products, Newsletter} from '../components'
function Home() {
  return (
    <main>
      <Hero/>
      <Feature/>
      <Products simplified/>
      <Newsletter/>
    </main>
  )
}

export default Home