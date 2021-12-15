import axios from 'axios';
import React, { Component } from 'react';

// Step 10: to get dispatch method, which is part of the store as property, 
// you need to use connect() from react-redux
import { connect } from 'react-redux';
import { ADD_POST } from '../actions/types';
import { createPost } from '../services/postService';

// Step 9. Let's work on reading form data on submit
class PostForm extends Component {

  // Step 9.1 we are going to read form data using ref in class comp.
  handleAddPost = (event) => {
    event.preventDefault(); // stopping the page refresh

    console.log(this.getTitle.value);
    console.log(this.getContent.value);
    const formData = {
      title: this.getTitle.value,
      body: this.getContent.value
    }

    console.log(formData); // Form data is ready -- we can work on dispatch
    console.log(this.props);

    // Step 11: Let's dispatch an action with type and payload
    // if we do the following we can't save the data in REST API 
    // and  this will also reach reducer instantly. 
    //  this.props.dispatch({
    //     type: ADD_POST,
    //     payload: formData 
    // })

    // Step 13: Let's dispatch with fn.
    this.props.dispatch(createPost(formData)); 

    this.getTitle.value = '';
    this.getContent.value = '';
  }

  render() {
    return (
      <div>
        <h3>Create Post!</h3>
        <form className='text-left' onSubmit={this.handleAddPost}>
          <input required type="text"
            placeholder="Enter Post Title"
            className='form-control' ref={(inputEl) => this.getTitle = inputEl} /><br />

          <textarea required rows="5" cols="28"
            placeholder="Enter Post"
            className='form-control' ref={(textAreaEl) => this.getContent = textAreaEl} /><br />
          <button className='btn btn-primary' type='submit'>Add Post</button>
        </form>
      </div>
    )
  }
}

// Step 10 continues... 
// last line of the component should be the following. 
// after connecting props will be available in this component.
// the props will have dispatch fn.
// this is not enough to subscribe to the store data. we don't need it here. But, we will do it PostList
export default connect()(PostForm);
