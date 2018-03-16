import React, { Component } from 'react';
import Photo from './Photo';
//import localization from './localization';
//import got from './localization/got'
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
    console.log(shrek);
    let strings = new LocalizedStrings({ shrek, got })
    //  shrek:{
    //    how:"How do you want your egg today?",
    //    boiledEgg:"Boiled egg",
    //    softBoiledEgg:"Soft-boiled egg",
    //    choice:"How to choose the egg"
    //  },
    //  got: {
    //    how:"Come vuoi il tuo uovo oggi?",
    //    boiledEgg:"Uovo sodo",
    //    softBoiledEgg:"Uovo alla coque",
    //    choice:"Come scegliere l'uovo"
    //  }
    // });

    let translations = [];

    for (var property in strings._props[language] ) {
      if (strings._props[language].hasOwnProperty(property)) {
        // <Photo {...this.props} key={i} i={i} post={property} chosenLanguage={this.state.language} />
        translations.push(strings._props[language][property])
      }

    }

//    debugger;

    return (
      <div>
          <div className="photo-grid">
            {
              translations.map((transText, index) => {
                return <Photo key={index} val={transText} />
              })
            }

          </div>
         <button onClick={this.setGot} >GOT</button>
         <button onClick={this.setShrek} >Shrek</button>
          <h1>{this.state.language}</h1>
      </div>

    )
  }
}

export default PhotoGrid;
