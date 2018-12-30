import { FETCH_SUBS, ADD_SUB } from '../actions';

export default function SubscriptionsReducer(state = {}, action){
	switch(action.type){
		case FETCH_SUBS:
			return action.payload;
		case ADD_SUB:{
				const copiedState = [...state];
				copiedState.push(action.payload);
				return copiedState;
			}
		default:
				return state;
	}
}
