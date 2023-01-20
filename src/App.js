import React,{useEffect , useState} from "react";
import {Container , AppBar , Typography , Grow , Grid } from '@mui/material'
import memories from './images/samarth.png'
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import { Appbar, GridContainerS, Heading } from "./styles";
import { useDispatch } from "react-redux";
import  {getPosts} from './actions/posts'

const App = () =>{
    const dispatch = useDispatch();

    //Getting ID 
    const [currentId, setcurrentId] = useState(null);

     useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);


    return (
        <Container maxWidth="lg">
            <Appbar position="static" color="inherit">
                <Heading variant="h2" align="center">memories</Heading>
                <img style={{marginLeft:'15px'}} src={memories} alt="Memories Picture" height={60}/>
            </Appbar>
            <Grow in>
                <Container>
                    <GridContainerS container direction={{xs: 'column-reverse' , sm:'row' , md:'row'}} justifyContent='space-between' alignItems='stretch' spacing={3} >
                        <Grid item xs={12} sm={7}>
                           <Posts currentId={currentId} setcurrentId={setcurrentId}/> 
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setcurrentId={setcurrentId}/>
                        </Grid>
                    </GridContainerS>
                </Container>
            </Grow>
        </Container>
    )
}
 export default App;