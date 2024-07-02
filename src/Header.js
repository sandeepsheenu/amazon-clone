import React from 'react';
import amazonLogo from './static/amlogo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import  UseStatevalue  from './StateProvider';
import { auth } from "./Firebase";


function Header() {
  const[{basket,user}]=UseStatevalue();
  console.log(user);
  const login = () =>{
    if(user){
      auth.signOut();
    }
  }
  
  return (
    
    <div>
     
  <nav className='header'>
      <Link to="/login">
        <img  className='header_logo'
        src={amazonLogo }
        alt=''
        /> 
      </Link>

      {/* search box */}
      <div className='header_search'>
      <input type='text' className='header_searchInput' />
      <SearchIcon className='header_searchIcon'/>

      </div>

      {/* thre links  */}
     <div className='headerNav'>
      {/* 1 link */}
      <Link to={!user && "/login"} className='header_link' >
      <div onClick={login}className='header_option'>
       <span className='header_optionlineone'>Hello {user?.email}</span>
       <span className='header_optionlinetwo'>{user ? 'Sign Out': "Sign in"}</span>
       </div>
      </Link>
      {/* 2 link */}
      <Link to="/" className='header_link' >
      <div className='header_option'>
       <span className='header_optionlineone'>Returns</span>
       <span className='header_optionlinetwo'>& orders</span>
       </div>
      </Link>
      {/* 3 link */}
      <Link to="/" className='header_link' >
      <div className='header_option'>
       <span className='header_optionlineone'> Your</span>
       <span className='header_optionlinetwo'>Prime</span>
       </div>
      </Link>  
      {/* 4 link */}
      <Link to="/checkout">
      <div className='header_option'>
      <div className='header_optionbasket'>
        <ShoppingBasketIcon/>
        <span className="header_line_tw0header header_basketcount">{basket?.length}</span>
        </div>

      </div>
      </Link>

     </div>

    </nav>
    

</div>
  )
}

export default Header
