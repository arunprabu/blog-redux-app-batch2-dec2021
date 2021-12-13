import React, { Component } from 'react'

class PostForm extends Component {
  render() {
    return (
      <div>
        <h3>Create Post!</h3>
        <form className='text-left'>
          <input required type="text"
            placeholder="Enter Post Title"
            className='form-control' /><br />

          <textarea required rows="5" cols="28"
            placeholder="Enter Post"
            className='form-control' /><br />
          <button className='btn btn-primary' type='submit'>Add Post</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
