import React from 'react';
import './SingleSubscription.scss';

const SingleSubscription = (props) =>  {
		const euros = parseFloat(props.amount / 100).toFixed(2);
		const costEuros =  `€${euros}`;
    console.log(props)
		return (
      <div className="single-sub">
				<h4 className="single-sub-item sub-title">{props.title}</h4>
        <div className="single-sub-item">Category</div>
        <div className="single-sub-item">{props.endDate}</div>
        <div className="single-sub-item">{costEuros}</div>
		</div>
		);
}

export default SingleSubscription;
