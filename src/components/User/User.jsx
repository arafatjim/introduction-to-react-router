import { Link } from "react-router-dom";


const User = ({user}) => {
          const{id, name, phone, email, website, username}=user;
          const userStyle={
                    border:'2px solid green' ,
                    borderRadius:'10px',
                    padding:'10px',
                    gap:'20px',

          }
          return (
                    <div style={userStyle}>
                             <h1>{name}</h1>
                             <h2>User Name:{username}</h2> 
                             <p>Phone:{phone}</p>
                             <p>Website:{website}</p>
                             <Link to={`/user/${id}`}><button>Show Details</button> </Link>
                             
                    </div>
          );
};

export default User;