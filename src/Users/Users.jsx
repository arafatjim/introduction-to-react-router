import { useLoaderData } from "react-router-dom";
import User from "../components/User/User";
import './Users.css';

const Users = () => {
          const users=useLoaderData();
          return (
                    <div>
                        <h2>Our Users: {users.length}</h2> 
                        <p>Welcome to our website.</p> 
                        <div className="users">
                              {
                                        users.map(user =><User key={user.id} user={user}></User>)
                              }
                              </div>    
                    </div>
          );
};

export default Users;