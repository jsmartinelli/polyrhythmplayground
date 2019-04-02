import ReactDOM from "react-dom";
import App from "./js/App";
import React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import trackReducers from './js/store/reducers/TrackReducers';
import metadataReducers from './js/store/reducers/MetadataReducers';
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";

const rootReducer = combineReducers({
    tracks: trackReducers,
    metadata: metadataReducers
});


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('root'));


