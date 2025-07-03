import React from 'react'
import { Link } from 'react-router'

const Main_Menu = () => {
  return (
    <div>
        <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Gallary</Link></li>
        <li><Link to="/contact">BuyProducts</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Main_Menu