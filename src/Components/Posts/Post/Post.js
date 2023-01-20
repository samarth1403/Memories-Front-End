import React from "react";
import {Card , CardActions , CardContent , CardMedia , Button , Typography} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import {CardS , CardMediaS , CardActionsS , Box1S , Box2S , Box3S} from './PostStyles'
import moment from 'moment' 
import {useDispatch} from 'react-redux'
import { deletePost , likePost} from "../../../actions/posts";

//Clicking on <MoreHorizIcon/> we will pass the _id of respective post to the Form component using setcurrentId method
const Post = ({post , currentId , setcurrentId}) =>{
    const dispatch = useDispatch()
    return (
        <CardS>
            <CardMediaS image={post.selectedFile} title={post.title}/>
            <Box1S>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </Box1S>
            <Box2S>
                <Button style={{color:'white'}} size="small" onClick={() => { setcurrentId(post._id)}}>
                    <MoreHorizIcon size="4rem"/>
                </Button>
            </Box2S>
            <Box3S>
            <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                        </Box3S>
            <Typography style={{padding: '0 16px'}} variant="h5" gutterBottom>{post.title}</Typography>

            <CardContent>
            
                <Typography variant="body2" color="textSecondary" component='p'>{post.message}</Typography>
            </CardContent>
            <CardActionsS>
                <Button size="small" color="primary" onClick={()=>{dispatch(likePost(post._id))}}>
                    <ThumbUpAlt fontSize="small"/>
                    {/*   &nbsp;  ----> It is used for single space */}
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=>{dispatch(deletePost(post._id))}}>
                    <DeleteRoundedIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActionsS>
        </CardS>
    )
}

export default Post