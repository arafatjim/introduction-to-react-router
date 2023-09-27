import { Link } from "react-router-dom";

const Post = ({post}) => {
          const {id,title,body}=post;
          const postStyle={
                    border:'2px solid green' ,
                    borderRadius:'10px',
                    padding:'10px',
                    

          }
         

          return (
                    <div style={postStyle} >
                           <div>
                           <h2>Id No:{id}</h2>  
                           <h3>Title:{title}</h3> 
                           {/* <p>Body of the post:{body}</p> */}
                           <Link to={`/post/${id}`}><button>Post Details</button></Link>
                           
                           </div>
                    
                    </div>
          );
};

export default Post;