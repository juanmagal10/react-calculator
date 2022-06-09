import React from 'react'
import '../hojas-de-estilo/Head.css'
import { Link } from 'react-router-dom'
import logo from '../imagenes/JMG-logo.png'


const Head = () => {
  return (
      <>
      <header className='header'>
        <img src={logo} alt="logo" />
        <nav className='nav'>
                <ul>
                    <li><Link to='/calculadora' className='link'>IR A LA CALCULADORA</Link></li>
                    <li><Link to='/' className='link'>HOME</Link></li>
                </ul>
              </nav>
            </header>
          <body className='body'>
          </body>
          <footer>

          </footer>
      </>
  )
}

export default Head
