import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav>
    <section>
      <Link to="/dogs">Dogs</Link>
      <Link to="/cats">Cats</Link>
    </section>
  </nav>
);
