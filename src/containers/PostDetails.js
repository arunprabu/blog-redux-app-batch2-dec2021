import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PostDetails extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Post Details</h1>

        <div className='text-start'>
          <div className="list-group">
            <div className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">My post title 1</h5>
                <small>Post Id: 1</small>
              </div>
              <p className="mb-1">
                my content 1
              </p>
              <br />
              <button className='btn btn-primary'
                data-bs-toggle="modal" data-bs-target="#editModal">Edit</button> &nbsp;
              <button className='btn btn-danger'>Delete</button>
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
                  <form >
                    <input required type="text"
                      placeholder="Enter Post Title"
                      className='form-control'
                    /><br />
                    <textarea required rows="5" cols="28"
                      placeholder="Enter Post"
                      className='form-control'
                    /><br />
                    <button className='btn btn-primary' type='submit'>Save Changes</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='alert alert-success'>
          Deleted Successfully! <br />
          You can go to <Link to='/posts'>Posts</Link> page!!
        </div>

      </div>
    )
  }
}

export default PostDetails;