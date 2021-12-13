import React from 'react'
import PostForm from '../containers/PostForm';
import PostList from '../containers/PostList';

const Posts = () => {
  return (
    <div>
      <h1>Welcome to Blog App!</h1>
      <div className='row'>
        <div className='col-md-4'>
          <PostForm />
        </div>

        <div className='col-md-8'>
          <PostList />
        </div>

      </div>

    </div>
  )
}

export default Posts;