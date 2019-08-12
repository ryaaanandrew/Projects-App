import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/firebaseConfig';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
	composeEnhancers(
		applyMiddleware(reduxThunk.withExtraArgument({getFirebase, getFirestore})),
		reactReduxFirebase(fbConfig, { attachAuthIsReady: true, useFirestoreForProfile: true, userProfile: 'users' }), 
		reduxFirestore(fbConfig) 
	)
);

store.firebaseAuthIsReady.then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<App /> 
		</Provider>
	,document.querySelector('#root')
	);
});


