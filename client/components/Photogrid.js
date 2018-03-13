import React, { Component } from 'react';
import Photo from './Photo';
import localization from './localization';

class PhotoGrid extends Component {
  constructor() {
    super()

    this.state= {
      language: 'en'
    }
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage() {
    this.setState({ language: 'fr' })
    localization.setLanguage('fr')
    console.log(language, 'language');
  }
  //declare a function -- can't set state from inside render
  render() {
    return (
      <div>
          <div className="photo-grid">
            {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} chosenLanguage={this.state.language} />)}
          </div>
         <button
            onClick={this.setLanguage}
            >Change</button>
            <h1>{this.state.language}</h1>
      </div>

    )
  }
}

export default PhotoGrid;
