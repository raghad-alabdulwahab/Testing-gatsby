import React from 'react'
import Navbar from "./Navbar"


export default function Tast( {children}) {
  return (
    <div className="layout">
        <Navbar/>
        <div className="layout">
        {/* contact of tha page  */}
        {children}
        </div>
        <footer>
            copyright 2011 Malaa
        </footer>
    </div>
  )
}
