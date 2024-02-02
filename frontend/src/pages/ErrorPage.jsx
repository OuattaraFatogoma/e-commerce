import React from 'react'
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <main className='error-page'>
      <div className='title'>
        <h2>Page Not Found</h2>
        <div className='underline'></div>
        <Link to="/"><button className='btn'>Return Home</button></Link>
      </div>
    </main>
  )
}

export default ErrorPage