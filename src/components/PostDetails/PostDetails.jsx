
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
          const post=useLoaderData();
          const {id,title,body}=post;
          return (
                    <div>
                          <h1>Details:</h1> 
                          <h2>Id:{id}</h2>  
                          <h2>Title:{title}</h2> 
                          <p>{body}</p> 
                    </div>
          );
};

export default PostDetails;