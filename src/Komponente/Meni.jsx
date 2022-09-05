import React from 'react'
import { Link } from "react-router-dom";

export default function Meni() {
  return (
    <div>
        <nav id="topnav">
         <a id="logo" className="nav-link">Živite zdravo! </a>
         <Link className="nav-link" to="/">Početna</Link>
         <Link className="nav-link" to="/postovi">Blog</Link>
         <Link className="nav-link" to="/kontakt">Kontakt</Link>
      </nav>
    </div>
  )
}
