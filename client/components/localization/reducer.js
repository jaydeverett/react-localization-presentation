import Immutable from 'seamless-immutable'
import createReducer from 'reducerFactory'

export const INITIAL_STATE = Immutable({
  language: 'en'
})

const reducers = {

  'LOCALIZATION_SETLANG': (state, { language }) => {
    return state.set('language', language)
  }

}

export default createReducer(INITIAL_STATE, reducers)
