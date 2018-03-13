import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
// import localization from '../components/localization';

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;
