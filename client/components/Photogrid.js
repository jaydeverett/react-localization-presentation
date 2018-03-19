import React, { Component } from 'react';
import Photo from './Photo';
import got from './localization/got'
import shrek from './localization/shrek'

import LocalizedStrings from 'react-localization';

class PhotoGrid extends Component {

  constructor() {
    super()

    this.state= {
      language: 'shrek'
    }
    this.setLanguage = this.setLanguage.bind(this);
    this.setShrek = this.setShrek.bind(this);
    this.setGot = this.setGot.bind(this);
  }

  setShrek() {
    this.setLanguage('shrek');
  }
  setGot() {
    this.setLanguage('got');
  }

  setLanguage(lang) {
    this.setState({ language: lang })
  }

  //declare a function -- can't set state from inside render
  render() {
    const language = this.state.language;
    let strings = new LocalizedStrings({ shrek, got })

    let translations = [];

    for (var property in strings._props[language] ) {
      if (strings._props[language].hasOwnProperty(property)) {
        translations.push(strings._props[language][property])
      }

    }
    console.log(translations);
    return (
      <div>
          <div className="photo-grid">
            {
              translations.map((transText, index) => {
                return <Photo key={index} val={transText} />
              })
            }
            <button onClick={this.setGot}>GOT</button>
            <button onClick={this.setShrek}>SHREK</button>
          </div>

          <h1>{this.state.language}</h1>
      </div>

    )
  }
}

export default PhotoGrid;
