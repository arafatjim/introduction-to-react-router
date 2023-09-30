import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
          return (
                    <div>
                        <h1>Nav Bar</h1>
                        <nav>
                          {/* <Link to="/">Home</Link> */}
                          <NavLink to="/"> Home</NavLink>
                          {/* <Link to="/users">Users</Link> */}
                          <NavLink to="/users">Users</NavLink>
                          {/* <Link to="/about">About</Link> */}
                          <NavLink to="/about">About</NavLink>
                          {/* <Link to="/contact">Contact us</Link> */}
                          <NavLink to="/contact">Contact</NavLink>
                          {/* <Link to="/comments">Comments</Link> */}
                          <NavLink to="/comments">Comments</NavLink>
                          <NavLink to="/posts">Posts</NavLink>
                          
                              
                          </nav>      
                    </div>
          );
};

export default Header;