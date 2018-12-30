export const FETCH_SUBS = 'FETCH_SUBS';
export const ADD_SUB = 'ADD_SUB';

export function fetchSubscriptions(){
	const promise = fetch('/api/v1/subscriptions')
		.then(response => response.json());
		return {
			type: FETCH_SUBS,
			payload: promise
		}
}

export function AddSubscription(subscription){
	const url = '/api/v1/subscriptions';
	const data =  {subscription};
	const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
	const promise = fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRF-Token': csrfToken

		},
		body: JSON.stringify(data)
	})
	.then(response => response.json())
	return {
		type: ADD_SUB,
		payload: promise
	}
}

