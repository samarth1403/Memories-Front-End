import React  from "react";
import Post from "./Post/Post";
import { Grid , CircularProgress} from '@mui/material'
import { useSelector } from "react-redux";
import { GridContainerS } from "./PostsStyles";

const Posts = ({currentId , setcurrentId}) =>{
    const posts = useSelector((state) => state.posts) //Fetching data from redux store
    console.log(posts)
    return(
        !posts.length ? <CircularProgress/> : 
             (<GridContainerS container alignItems='stretch' spacing={3}>
                {posts.map((post) =>(<Grid item key={post._id} xs={12} sm={6}>
                    <Post post={post}  currentId={currentId} setcurrentId={setcurrentId}/>
                 </Grid>)
                )}
            </GridContainerS>))
}

export default Posts