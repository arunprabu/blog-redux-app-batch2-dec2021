// Step 12: 

import axios from "axios";
import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS, GET_POST_BY_ID } from "../actions/types";

export const createPost = (formData) => {
  // Step 12.1 Send the above data to REST API Endpoint - https://jsonplaceholder.typicode.com/posts
  // Step 12.2 What's Http Method? POST Method 
  // Step 12.3 What's the REST API Client? Axios   -- npm i axios
  console.log(formData);
  // After getting successful/failure confirmation from the rest api
  // we need to dispatch the action ADD_POST with type and payload 

  return (dispatch) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', formData)
      .then((res) => { // success
        console.log(res);
        
        dispatch({
          type: ADD_POST,
          payload: res.data
        });
        alert("Post Created Successfully!")
      })
      .catch((err) => { // error
        console.log(err);
      })
      .finally(() => {
        console.log('It is over');
      });
  }
}

export const getAllPosts = () => {
  return (dispatch) => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => { // success
        console.log(res);
        
        dispatch({
          type: GET_POSTS,
          payload: res.data
        });
      })
      .catch((err) => { // error
        console.log(err);
      })
      .finally(() => {
        console.log('It is over');
      });
  }
}

export const getPostById = (postId) => {
  console.log(postId);
  return (dispatch) => {
    return axios.get('https://jsonplaceholder.typicode.com/posts/'+postId)
      .then((res) => { // success
        console.log(res);
        
        dispatch({
          type: GET_POST_BY_ID,
          payload: res.data // one post details object
        });
      })
      .catch((err) => { // error
        console.log(err);
      })
      .finally(() => {
        console.log('It is over');
      });
  }
}

export const deletePost = (postId ) => {
  console.log(postId);
  return (dispatch) => {
    return axios.delete('https://jsonplaceholder.typicode.com/posts/'+postId)
      .then((res) => { // success
        console.log(res);
        
        dispatch({
          type: DELETE_POST,
          payload: res.data // one post details object
        });
      })
      .catch((err) => { // error
        console.log(err);
      })
      .finally(() => {
        console.log('It is over');
      });
  }
}

export const updatePost = (formData) => {

  console.log(formData);

  return (dispatch) => {
    return axios.put('https://jsonplaceholder.typicode.com/posts/'+formData.id, formData)
      .then((res) => { // success
        console.log(res);
        
        dispatch({
          type: EDIT_POST,
          payload: res.data // one post details object
        });
      })
      .catch((err) => { // error
        console.log(err);
      })
      .finally(() => {
        console.log('It is over');
      });
  }
}