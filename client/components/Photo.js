import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends Component {
  render() {
    const post = this.props.val
    const { i, comments, language } = this.props;
    return (


        <figure className="grid-figure">
            <div className="grid-photo-wrap">
              <Link>
                  <span>{post.photoOne.name}</span> //the real one
                  <img src={require(`../images/${post.photoOne.display_src}.jpg`)} alt={post.caption} className="grid-photo"/>
              </Link>
              <CSSTransitionGroup transitionName="like"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                <span key={post.likes} className="likes-heart">{post.likes}</span>
                </CSSTransitionGroup>
            </div>

            <figcaption>
              <p>{post.caption}</p>
              <div className="control-buttons">
                <button
                  // onClick={this.props.increment.bind(null, i)}
                  className="likes">&hearts; {post.likes}</button>
                <Link className="button" to={`/view/${post.code}`}>
                  <span className="comment-count">
                    <span className="speech-bubble"></span>
                    {/* {comments[post.code] ? comments[post.code].length : 0} */}
                  </span>
                </Link>
              </div>
            </figcaption>
          </figure>
    )
  }
}
//


export default Photo
