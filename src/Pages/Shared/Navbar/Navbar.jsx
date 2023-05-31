import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../LogIn/providers/AuthProvider';


const Navbar = () => {
    const{user,logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
          
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li>
        {
            user?.email?
            <>
            <Link to="/bookings">My Bookings</Link>
            <Link><button onClick={handleLogOut}>log out</button></Link>
            </> :
            <li><Link to="/login">LogIn</Link></li>

        }
        </li>
        
    </>
    return (
        <div className="navbar bg-base-100 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {navItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl w-20 h-16">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navItem}
                </ul>
            </div>
            <div className="navbar-end">
               <button className='btn btn-outline btn-warning'>Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;