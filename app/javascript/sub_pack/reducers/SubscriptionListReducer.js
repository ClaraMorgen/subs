import {FETCH_SUBS} from '../actions';

export default function SubscriptionListReducer(state = {}, action){
	switch(action.type){
		case FETCH_SUBS:
			console.log(action.payload)
			return action.payload;
		default:
				return state;
	}
}