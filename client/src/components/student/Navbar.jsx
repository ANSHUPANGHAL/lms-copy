import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { assets } from '../../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  const { navigate, isEducator } = useContext(AppContext);
  const location = useLocation(); // Get the current route
  const isDarkNavbar = location.pathname === '/course-list' || location.pathname === '/'; // Check for Home or Course List pages
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 
      ${isDarkNavbar ? 'bg-gray-900 text-white' : 'bg-cyan-100/70 text-gray-800'}`}
    >
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        src={logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* Navigation links and buttons */}
      <div className="hidden md:flex items-center gap-5">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button onClick={() => navigate('/educator')}>
                {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>
              <Link to="/my-enrollments" className="hover:underline">
                My Enrollments
              </Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button onClick={() => navigate('/educator')}>
                {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>
              <Link to="/my-enrollments" className="hover:underline">
                My Enrollments
              </Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="User Icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
