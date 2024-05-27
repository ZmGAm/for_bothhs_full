import {React, useEffect,useState,useContext}from 'react';
import { BrowserRouter, NavLink, Route , useNavigate } from 'react-router-dom';
// import { TokenContext } from "./Context/TokenContext";
import {TokenContext } from "./Context/TokenContext";
import { TypeContext } from './Context/TypeContext.js';

// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import New from './New';
// import Pool from './Pool';
// import upload from './upload';
// import MyCustomForm from './MyCustomForm';
// import dynamicDivs from './dynamicDivs';
import './design/nav.css';
import './Rigister.jsx';
{/* <link rel="stylesheet" href="nav.css"></link> */}
function Navbar() {
  const { token,updateToken}=useContext(TokenContext);
  const { type,updateType}=useContext(TypeContext);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Check for existing login token in localStorage on component mount
    // const storedToken = localStorage.getItem('token');
    // setIsLoggedIn(!!storedToken); 
    console.log("coin in nav bar",token);
    if(!token){
      setIsLoggedIn(false);
    }
    else{
      setIsLoggedIn(true);
    }
    console.log(isLoggedIn);
    // Set isLoggedIn based on token presence
  }, [token]);  // Empty dependency array to run only once on mount

  const handleLogout = () => {
    updateToken(null);
    setIsLoggedIn(false);
    navigate('/login');
  };
  const handleLogin = () => {
    
    updateToken(token);
    setIsLoggedIn(true);
    navigate('/login');
  };
  return (  
    <header>
          
          <div class="real">
           
              <div class="logo">
                <li>
                  <a>Share Your Ride</a>

                </li>
                </div>
                <ul class="menu">
                    <li className='items'>
                      <NavLink className='linkitems' to="/">Home</NavLink>
                    </li>
                    {/* <li className='items'>
                    {
 
                      localStorage.getItem('token') ?
                      <button 
                      onClick={() => {
                        localStorage.clear()
                        navigate('/login')
                    }}
                    > LOGOUT </button> :
                      <NavLink className='linkitems' to="/Login">Login</NavLink>
                    //   <button onClick={() => {
                    //     navigate('/login')
                    // }}
                    // > LOGIN </button>
                      // <NavLink className='linkitems' to="/Login">Login</NavLink>
                    }
                    </li> */}
                    <li>

                              {!isLoggedIn &&(
                        <NavLink className="linkitems" to="/login">
                          Login
                        </NavLink>
                       
                      )}
                      
                      
                    </li>
                    <li>
                          {isLoggedIn&&(


                                        <NavLink className="linkitems"  onClick={handleLogout}>
                                        LOGOUT
                                        </NavLink>

                              // <button onClick={handleLogout}>LOGOUT</button>
                              )
}
                    </li>
                    <li>
                          {isLoggedIn&& (type=="Driver" || type=="Owner")  &&(
                                     <NavLink className="linkitems" to="/login">
                                     creat pool 
                                   </NavLink>
                                              
                              // <button >creat pool </button>
                              )
                            
}
                    </li>

                 
                    <li className='items'>
                      <NavLink className='linkitems' to="/about">About</NavLink>
                    </li>
                    {/* <li className='items'>
                      <NavLink className='linkitems' to="/Tasveer">Tasveer</NavLink>
                    </li> */}
                    <li className='items'>
                      <NavLink className='linkitems'to="/contact">Contact</NavLink>
                    </li>
                    {/* <li className='items'>
                      <NavLink className='linkitems'to="/New">New</NavLink>
                    </li> */}
                    <li className='items'>
                      <NavLink className='linkitems'to="/Signup">Rigister</NavLink>
                    </li>
                    {/* <li className='items'>
                      <NavLink className='linkitems'to="/Rigister">Rigister</NavLink>
                    </li> */}
                    <li className='items'>
                      <NavLink className='linkitems'to="/Pool">view profile</NavLink>
                    </li>
                  </ul>
              </div>
          {/* <div class="real">
            <div class="logo">
                <li>ZM Rent A Car</li>
            </div>

            <ul>
                <li><a href="nav.html">Home</a></li>
                <li><a href="">ervices</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>

         </div> */}

       
</header>

             
      
  // <BrowserRouter>
  //     <div className="navbar">
  //       <NavLink to="/">Home</NavLink>
  //       <NavLink to="/about">About</NavLink>
  //       <NavLink to="/contact">Contact</NavLink>
  //       <h1>gamer</h1>;
  //     </div>
  //     <div className="content">
  //       <Route exact path="/" component={Home} />
  //       <Route path="/about" component={About} />
  //       <Route path="/contact" component={Contact} />
  //     </div>
  //   </BrowserRouter>
  );
}

export default Navbar;
