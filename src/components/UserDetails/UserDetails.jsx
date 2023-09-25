import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
          const user=useLoaderData();
          const {name,website}=user;
          return (
                    <div>
                      <h4>Details about Users: {name}</h4> 
                      <p>Website:{website}</p>       
                    </div>
          );
};

export default UserDetails;