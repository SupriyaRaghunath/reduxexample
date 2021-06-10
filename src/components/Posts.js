import { render } from '@testing-library/react'
import propTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Posts extends React.Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }
  render() {
    let postItems =
      Object.keys(this.props.posts).length &&
      this.props.posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )
      })

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: propTypes.func.isRequired,
  posts: propTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts)
