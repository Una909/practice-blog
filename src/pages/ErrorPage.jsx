import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='errorPage'>
      <div className='center'>
        <Link to="/" className='btn primary'>Go back to the homepage</Link>
        <h2>Page Not Found</h2>
      </div>
    </section>
  )
}

export default ErrorPage
