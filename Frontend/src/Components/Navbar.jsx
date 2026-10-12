import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#09090b]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img
            src={logo}
            alt="Moment logo"
            className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(192,132,252,0.35)]"
          />

          <span className="text-2xl font-extrabold tracking-tight text-white">
            Moment<span className="text-fuchsia-400">.</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-3 sm:gap-6">
          <NavLink
            to="/feed"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-fuchsia-400"
                  : "text-zinc-300 hover:text-fuchsia-300"
              }`
            }
          >
            Explore Feed
          </NavLink>

          <NavLink
            to="/create-post"
            className={({ isActive }) =>
              `rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:scale-105 sm:px-5 ${
                isActive ? "ring-2 ring-purple-300/40" : ""
              }`
            }
          >
            Create Post
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
