import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import Logo from "../header/logo/logo.png"
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const {user, logOut} =useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user)

  const handleLogout = () =>{
    logOut()
    .then(result => {
      navigate('/')
    })
    .catch(err => console.error(err))
  }
   return (
      <div className="navbar bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to=''>Home</Link></li>
        <li><Link to=''>Services</Link></li>
        <li><Link to=''>About</Link></li>
        <li><Link to=''>Blogs</Link></li>
      </ul>
    </div>
    <Link to='/'><img className='w-20' src={Logo} alt=""></img></Link>
    <h2 className=" normal-case text-xl ml-5">Photo Hunter</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to=''>Home</Link></li>
      <li><Link to=''>Services</Link></li>
      <li><Link to=''>About Me</Link></li>
      <li><Link to='/blogs'>Blogs</Link></li>
      <li><Link to='/reviews'>My Reviews</Link></li>

      {
        user?.uid ? <>
        <li><Link to='/addServices'>Add Services</Link></li>
        <li><a href='/'><button onClick={handleLogout} className='btn btn-info'>Sign out</button></a></li>
        </> 
        :
        <li><Link to='/login'><button className='btn btn-info'>Login</button></Link></li>
      }
      
    </ul>
    <div>
    {
       user?.photoURL ? <img className='rounded-lg' src={user?.photoURL} style={{width:'30px'}} alt=''/>: <Link to='/blogs' className='text-decoration-none text-white'>  <UserCircleIcon className="h-6 w-6 mx-auto text-blue-500"/></Link>
   }
    </div>
  </div>
  <div className="navbar-end">
    <Link to='/' className="btn">Get started</Link>
  </div>
</div>
   );
};

export default Header;