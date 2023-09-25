import { useState } from "react";
import Comment from "../Comment/Comment";
import { useLoaderData } from "react-router-dom";


const Comments = () => {
          const comments=useLoaderData();
          return (
                    <div>
                        <h1>Comments:{comments.length}</h1> 
                        <div>
                             {
                              comments.map(comment =><Comment key={comment.id} comment={comment}></Comment>)
                             } 
                              </div>     
                    </div>
          );
};

export default Comments;