import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
          const {id,title,body}=post;
          const navigate = useNavigate();
          const postStyle={
                    border:'2px solid green' ,
                    borderRadius:'10px',
                    padding:'10px',
                    

          }
         const handleShowDetails  = () =>{
              navigate(`/post/${id}`);
         }

          return (
                    <div style={postStyle} >
                           <div>
                           <h2>Id No:{id}</h2>  
                           <h3>Title:{title}</h3> 
                           {/* <p>Body of the post:{body}</p> */}
                           <Link to={`/post/${id}`}><button>Post Details</button></Link>
                           <button onClick={handleShowDetails}>Click to show details</button>
                           </div>
                    
                    </div>
          );
};

export default Post;