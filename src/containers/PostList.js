import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// Step 16. let's get the state data from the store and convert them into read-only props. 
// Step 16.1
import { connect } from 'react-redux';
import { getAllPosts } from '../services/postService';

class PostList extends Component {
  
  componentDidMount(){
    console.log("Inside componentDidMount");

    // Step 18: send ajax call to load all posts.. from there dispatch an action
    this.props.dispatch(getAllPosts());
  }
  
  render() {
    console.log("Inside Render");

    console.log(this.props);

    // Step 17: Let's loop thru the posts list
    let posts = null;
    if(this.props.posts && this.props.posts.length > 0){
      posts = this.props.posts.map( (post, index) => {
        return(
          <div className="list-group-item list-group-item-action text-start" key={index}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </h5>
              <small>Post Id: {post.id}</small>
            </div>
            <p className="mb-1 text-left">{post.body}</p>
          </div>
        )
      })
    }

    return (
      <div>
        <h3>Post List</h3>
        <div className="list-group text-left">
          { this.props.posts && this.props.posts.length > 0? 
              posts
            :
            <div className='alert alert-warning'>
              Post Not Found! You can add one.
            </div>
          }
        
        </div>
      </div>
    )
  }
}

// mapStateToProps() fn should be defined in the same file before the export
const mapStateToProps = (state) => { // state will have the entire store data
  console.log(state);
  return {
    // posts is the prop and state.posts is the store data
    posts: state.posts 
  }
}
// The above function will convert state to props for the PostList compoent.
// By doing the above this comp should no longer have state. instead it should use only the read-only props

// Step 16.2
// to get the state and to convert that to props 
// in the PostList.js file, make the following change in the export.
export default connect(mapStateToProps)(PostList);