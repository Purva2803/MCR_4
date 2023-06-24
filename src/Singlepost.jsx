
import { useParams } from "react-router-dom"
import { forumData } from "./assets/formdata"
export const Singlepost = () => {

    const {id} = useParams()

    const post = forumData.posts.find((post)=>post.id==id)

    return (
        <>
        {
            <div
            style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
            }}
            >
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
            </div>
        }
        </>
    )
}
