import React from 'react';
import ReactDOM from 'react-dom';

//  External (Redux)
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import reduxPromise from 'redux-promise';

// Internal
// import './subscription.scss';
import SubscriptionList from './containers/subscription_list/SubscriptionList';
import AddSubscription from './components/add_subscription/AddSubscription';

// Reducers
import SubscriptionListReducer from './reducers/SubscriptionListReducer';

const reducers = combineReducers({
	subscriptions: SubscriptionListReducer
})
// MiddleWare
const middlewares = applyMiddleware(reduxPromise,logger);
const store = createStore(reducers, {}, middlewares);


const subscriptionWrap = document.querySelector('.subscription-wrapper');
ReactDOM.render(
	<Provider store={store}>
		<SubscriptionList />
		<AddSubscription />
	</Provider>,
	subscriptionWrap);

