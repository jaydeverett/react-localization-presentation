import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends Component {
  render() {
    const post = this.props.val
    const { i, comments, language } = this.props;

    return (
      <div>
        <figure className="grid-figure">
          <div className="grid-photo-wrap">
            <Link>
              <img src={require(`../images/${post.display_src}.jpg`)} alt={post.caption} className="grid-photo"/>
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
              <button className="likes">&hearts; {post.likes}</button>
              <Link className="button" to={`/view/${post.code}`}>
                <span className="comment-count">
                  <span className="speech-bubble"></span>
                </span>
              </Link>
            </div>
          </figcaption>
        </figure>
      </div>
    )
  }
}
//


export default Photo
