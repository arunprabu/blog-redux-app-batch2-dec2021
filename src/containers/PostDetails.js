import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { deletePost, getPostById, updatePost } from '../services/postService';

const withRouter = (WrapperComponent) => { // HOC
  return (props) => {
    const location = useLocation();
    const navigation = useNavigate();
    const params = useParams();

    return(
      <WrapperComponent 
        {...props}
        navigation={navigation}
        location={location}
        params={params}
      />
    )
  }
}

class PostDetails extends Component {

  componentDidMount(){
    // reading URL Param - postId
    // console.log(this.props.match.params.postId); // deprecated in v6
    console.log(this.props.postId);

    this.props.onGetPostById(this.props.postId); 
  }

  handleDeletePost = () => {
    //this.props.dispatch(deletePost(this.props.postId));
    this.props.onDeletePost(this.props.postId);
  }

  handleUpdate = (e) => {
    e.preventDefault();
    console.log(this.getTitle.value);
    console.log(this.getContent.value);
    const formData = { // updatable data
      id: this.props.postId,
      title: this.getTitle.value,
      body: this.getContent.value
    }
    this.props.onEditPost(formData);
  }

  render() {
    console.log(this.props.post);
    return (
      <div className='container'>
        <h1>Post Details</h1>

        { Object.keys(this.props.post).length > 0? 
          <div className='text-start'>
          <div className="list-group">
            <div className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{this.props.post.title}</h5>
                <small>Post Id: {this.props.post.id}</small>
              </div>
              <p className="mb-1">
                {this.props.post.body}
              </p>
              <br />
              <button className='btn btn-primary'
                data-bs-toggle="modal" data-bs-target="#editModal">Edit</button> &nbsp;
              <button className='btn btn-danger' 
              onClick={this.handleDeletePost}>Delete</button>
            </div>
          </div>

          <div className="modal fade" id="editModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Update Post
                  </h5>
                  <button type="button" className="btn-close"
                    data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={this.handleUpdate}>
                    <input required type="text"
                      placeholder="Enter Post Title"
                      className='form-control' defaultValue={this.props.post.title}
                      ref={(inputEl) => this.getTitle = inputEl}
                    /><br />
                    <textarea required rows="5" cols="28"
                      placeholder="Enter Post"
                      className='form-control' defaultValue={this.props.post.body}
                      ref={(textAreaEl) => this.getContent = textAreaEl}
                    /><br />
                    <button className='btn btn-primary' type='submit'>Save Changes</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
        :   
        <div className='alert alert-success'>
          Deleted Successfully! <br />
          You can go to <Link to='/posts'>Posts</Link> page!!
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => { // subscribing to the store data
  return {
    post: state.posts.post, // prop name is post and store prop is also post
    postId: props.params.postId // postId is the URL Param
  }
}

// Working with action creators
// we can create custom event handlers -- they will be available in props
const mapDispatchToProps = dispatch => { // dispatch is coming from store 
  return {
    onGetPostById: (id) => dispatch(getPostById(id)),
    onEditPost: (formData) => dispatch(updatePost(formData)),
    onDeletePost: (id) => dispatch(deletePost(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));