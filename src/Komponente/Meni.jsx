import React from 'react'
import { Link } from "react-router-dom";

export default function Meni() {
  return (
    <div>
        <nav id="topnav">
         <a id="logo" class="nav-link">Živite zdravo! </a>
         <Link className="nav-link" to="\">Početna</Link>
         <Link className="nav-link" to="#">Blog</Link>
         <Link className="nav-link" to="#">Kontakt</Link>
         <a id="about" class="nav-link" href="#">O nama</a>
      </nav>
    </div>
  )
}
