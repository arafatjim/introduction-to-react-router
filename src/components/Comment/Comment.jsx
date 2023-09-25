
import './comment.css'
const Comment = ({comment}) => {
          const{name,email,body,postId}=comment;
          return (
                    <div className="comments">
                              <div>
                              <h3>Name:{name}</h3>
                              <p>Email:{email}</p>     
                              <p>Comments:{body}</p>        
                              </div>     
                    </div>
          );
};

export default Comment;