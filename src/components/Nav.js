import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <a href="/contact">Menu</a>
        </li>
        <li>
          <a href="/blog">Reservations</a>
        </li>
        <li>
          <a href="/blog">Order Online</a>
        </li>
        <li>
          <a href="/blog">Login</a>
        </li>
      </ul>
    </nav>
  );
}
