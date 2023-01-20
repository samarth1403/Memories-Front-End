import * as api from '../api/index'
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from '../constants/actionTypes'

//We are now creating action creators which are functions that returns action

//Action is an object that has type and payload as properties

//payload is a data where we can store our posts

//As we are working with async data we have to use redux thunk
export const getPosts = () => async (dispatch) => {
   
    try {
        console.log("Hiii...")
        const {data} = await api.fetchPosts()
        console.log(data)
        dispatch({
            type:FETCH_ALL,
            payload: data,
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async(dispatch) =>{
       try {
        console.log("Hiii..")
        const {data} = await api.createPost(post);
        console.log(data)
        dispatch({type : CREATE , payload : data})
       } catch (error) {
        console.log(error.message)
       }
}

export const updatePost = (id , post) => async (dispatch) => {
     try {
        const {data} = await api.updatePost(id , post) //This api call will receive updated post
        dispatch({type : UPDATE , payload : data})
     } catch (error) {
        console.log(error)
     }
}

export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
