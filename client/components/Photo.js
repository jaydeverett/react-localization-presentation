import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group';
//import localization from './localization';

class Photo extends Component {
  render() {
//    console.log(localization);
    return (
        <span>{this.props.val}</span>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     language: state.localization.language
//   }
// }

export default Photo
