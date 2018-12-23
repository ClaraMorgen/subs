export const FETCH_SUBS = 'FETCH_SUBS';

export function fetchSubscriptions(){
	const promise = fetch('/api/v1/subscriptions')
		.then(response => response.json());
		return{
			type: FETCH_SUBS,
			payload: promise

		}
}