
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
          const post=useLoaderData();
          const {id,title,body}=post;
      const {postId} = useParams();
          const navigate =useNavigate();
          console.log(postId);
          const handleGoBack = () =>{
            navigate (-1);
          }
          return (
                    <div>
                          <h1>Details:</h1> 
                          <h2>Id:{id}</h2>  
                          <h2>Title:{title}</h2> 
                          <p>{body}</p> 
                          <button onClick={handleGoBack}>Go back</button>
                    </div>
          );
};

export default PostDetails;