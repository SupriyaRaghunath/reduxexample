import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createPost } from '../actions/postActions'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    let post = { title: this.state.title, body: this.state.body }

    //call action

    this.props.createPost(post)
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Body: </label>
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm)
