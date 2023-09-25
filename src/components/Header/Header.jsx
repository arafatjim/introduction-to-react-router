import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
          return (
                    <div>
                        <h1>Nav Bar</h1>
                        <nav>
                          <Link to="/">Home</Link>
                          <Link to="/users">Users</Link>
                          <Link to="/about">About</Link>
                          <Link to="/contact">Contact us</Link>
                          <Link to="/comments">Comments</Link>
                              
                          </nav>      
                    </div>
          );
};

export default Header;