// Step 3: Setup Reducer for the store

import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS, GET_POST_BY_ID } from "../actions/types";

/*
  What's a Reducer?
    It is a function that takes the current state and 
    an action that was dispatched as it’s parameters and returns the new state.

*/

// Setting up postReducer so that
// we can combine this reducer with other reducers later 
// and make a big object for the store 
// reducer should mandatorily return a state.

const initialState = {
  loading: false,
  error: undefined,
  status: undefined,
  postList: [],
  post: {}
}

const postReducer = (state = initialState, action ) => {
  // Step 8.1 
  //now it is time to understand the concept called 'Actions'
  //What are Actions? 
    //Actions are plain Javascript objects with a type property and a payload (optional)
    //This type property describes the event that is taking place 
    //in the application.
  
  switch(action.type) {
    case ADD_POST:
      //Step 8.2 - clarification - of the following code, 
      //action.type = Event and action.payload = Form Data from ADD_POST
      let addedPostState = {
        ...state,
        postList: [
          ...state.postList,
          action.payload
        ]
      }
      return addedPostState;

    case GET_POSTS: 
      let allPostsState = {
        ...state,
        postList: action.payload
      }
      return allPostsState;  // here is an array of 100 obj's pushed into the store

    case GET_POST_BY_ID:
      let postState = {
        ...state,
        post: action.payload
      }
      
      return postState;  

    case DELETE_POST: 
      let deletedPostState = {
        ...state,
        post: action.payload
      }
      return deletedPostState;

    case EDIT_POST:
      let updatedPostState = {
        ...state,
        post: action.payload
      }
      return updatedPostState;
    
    default:
      return state;
  }
}

export default postReducer;