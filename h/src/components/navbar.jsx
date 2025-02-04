import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav >
      <Link to="/" className="hover:underline">Home</Link><br />
      <Link to="/about" className="hover:underline">About</Link><br />
      <Link to="/contact" className="hover:underline">Contact</Link><br />
      <Link to="/profile" className="hover:underline">Profile</Link>
    </nav>
  );
};

export default Navbar;
