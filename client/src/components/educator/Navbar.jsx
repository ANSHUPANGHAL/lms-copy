import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { UserButton, useUser } from '@clerk/clerk-react';
import { dummyEducatorData } from '../../assets/assets';
const Navbar = () => {
const educatorData = dummyEducatorData
const {user} = useUser()
return(
  <div className="flex items-center justify-between px-4 md:px-8 border-b
   border-gray-500 py-3 ">
   <Link to='/'>
   <img
         
           src={logo}
           alt="Logo"
           className="w-28 lg:w-32 "
         />
         </Link>
<div className="flex items-center gap-5 text-gray-500 relative">
   <p> Hi! {user ? user.fullName : 'Developers'}</p>
   {user ? <UserButton /> : <img className='max-w-8' 
   src={assets.profile.img} /> }
  </div>
  </div>
)
  
}

export default Navbar;