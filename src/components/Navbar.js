import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <h1>Navbar</h1>
        <div className="links"> 
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/projects/test" >protofile projects</Link>
        </div>
    </nav>
  )
}
