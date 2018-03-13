import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group';
import localization from './localization';

class Photo extends Component {
  render() {
    const { post, i, comments, language } = this.props;
    console.log(localization);
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
              <img src={post.display_src} alt={post.caption} className="grid-photo"/>
          </Link>
          <h1>{localization.home.photoOne.link}</h1>
          <CSSTransitionGroup transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
            </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {post.likes}</button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     language: state.localization.language
//   }
// }

export default Photo
