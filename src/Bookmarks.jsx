
import { useParams } from "react-router-dom"
import { forumData } from "./assets/formdata"


export const Bookmarks = () => {
   
   
     const bookmarkpost = forumData.posts.filter((post)=>post.isBookmarked==true)
    return (
        <>
        {
            <div>
                {bookmarkpost.map((post)=>{
                     
                     return(
                            <>
                            <li>{post.name}</li>
                            <li>{post.post}</li>
                            <li>{post.postDescription}</li>
                            <button>{post.upvotes}</button>
                            <button>{post.downvotes}</button>
                            <li>{post.tags.map((tag)=>{
                                return(
                                    <>
                                    <li>{tag}</li>
                                    </>
                                )
                                }

                            )}</li>
                            </> 
                        )

                }
                )
                }



                
            </div>
        }
        </>
    )
}
