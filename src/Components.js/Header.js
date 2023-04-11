import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GiCargoShip,GiAnchor } from 'react-icons/gi';
import { MdOutlineEngineering,MdOutlineLogout } from 'react-icons/md';
import { BsGrid } from 'react-icons/bs';
import { BiNews } from 'react-icons/bi';
import Scripts from './Scripts';
export default function Header() {
  let navigate = useNavigate();
  useEffect(() => {
    Scripts()
  }, [])
  const logoutfn=()=>{
    window.localStorage.setItem("login-access","false")
    return navigate('/');
  }
  return (
    <div>
    {/* partial:partials/_sidebar.html */}
<nav className="sidebar">
<div className="sidebar-header ">
 <a href= "/vessel" className="sidebar-brand">
   {/* NNPA<span>UI</span> */}
   <img src="../assets/images/logo/vessco_logo.png" alt="light theme" width={110} height={70} style={{marginLeft: "-17px", marginTop: "-10px"}} />
 </a>
 <div className="sidebar-toggler not-active">
   <span />
   <span />
   <span />
 </div>
</div>
<div className="sidebar-body">
 <ul className="nav">
   <li className="nav-item nav-category">Main</li>
   {/* <li className="nav-item">
     <Link to="/text" className="nav-link">
       <i className="link-icon" data-feather="box" />
       <span className="link-title">Dashboard</span>
     </Link>
   </li>  */}
   <li className="nav-item not-active">
     <Link to="/vessel/task" className="nav-link">
       {/* <i className="link-icon" data-feather="grid" /> */}
       <BiNews  size={25}/>
       <span className="link-title ">Tasks</span>
     </Link>
   </li>
   <li className="nav-item not-active">
     <Link to="/vessel" className="nav-link">
       {/* <i className="link-icon" data-feather="grid" /> */}
       <GiCargoShip  size={25}/>
       <span className="link-title ">Vessel</span>
     </Link>
   </li>
   <li className="nav-item not-active">
     <Link to="/vessel/engineer" className="nav-link">
       {/* <i className="link-icon" data-feather="grid" /> */}
       <MdOutlineEngineering  size={25}/>
       <span className="link-title ">Engineers</span>
     </Link>
   </li>
   <li className="nav-item not-active">
     <Link to="/vessel/port" className="nav-link">
       {/* <i className="link-icon" data-feather="table" /> */}
       <GiAnchor size={22}/>
       <span className="link-title " style={{paddingLeft:"4px"}}>Port</span>
     </Link>
   </li>
   
   
   
 </ul>
</div>
</nav>

{/* partial:partials/_navbar.html */}
<div className="page-wrapper" >
<nav className="navbar">
 <a href= "/vessel" className="sidebar-toggler">
   <i data-feather="menu" />
 </a>
 <div className="navbar-content">
  
   <ul className="navbar-nav">
    
     <li className="nav-item">
     <a style={{cursor:"pointer"}} onClick={()=>logoutfn()} className="nav-link ms-0">
       {/* <i className="me-2 icon-md" data-feather="log-out" /> */}
       <MdOutlineLogout className='me-1 icon-md'/>
       <span style={{}}>Log Out</span>
     </a>
       
     </li>
   </ul>
 </div>
</nav>
</div>
</div>
  )
}
