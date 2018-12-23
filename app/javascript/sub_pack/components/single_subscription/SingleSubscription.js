import React from 'react';

const SingleSubscription = (props) =>  {
		const euros = parseFloat(props.amount / 100).toFixed(2);
		const costEuros =  `€${euros}`;
		return (
			<div className="single-sub">
				<h4>{props.title}</h4>
				<p>frequency: {props.frequency}</p>
				<p>{costEuros}</p>
				<span>{props.bank}</span>
			</div>
		);
}

export default SingleSubscription;