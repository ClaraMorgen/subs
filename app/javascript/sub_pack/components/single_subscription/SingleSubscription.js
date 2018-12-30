import React from 'react';
import './SingleSubscription.scss';

const SingleSubscription = (props) =>  {


		const euros = parseFloat(props.amount / 100).toFixed(2);
		const costEuros =  `€ ${euros}`;
    const classes = props.activeSub == props.id ? "single-sub active" : "single-sub"
    console.log(props)
		return (
      <div className={classes} onClick={() => props.handleClickOnSub(props)}>
				<h4 className="sub-title">{props.title}</h4>
        <div className="single-sub-item">Category</div>
        <div className="single-sub-item number-letter-spacing">{props.endDate}</div>
        <div className="single-sub-item number-letter-spacing text-right">{costEuros}</div>
      </div>
		);
}

export default SingleSubscription;
