import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSubscriptions } from '../../actions';
import SingleSubscription from '../../components/single_subscription/SingleSubscription';

class SubscriptionList extends Component{
		componentDidMount() {
			this.props.fetchSubscriptions()
		}
		render(){
			let subs;
			if(this.props.subscriptions.length > 0){
				console.log(this.props.subscriptions);
				subs = this.props.subscriptions.map( sub => {
					return <SingleSubscription
					 	key={sub.id}
					 	id={sub.id}
					 	frequency={sub.frequency}
					 	title={sub.title}
						amount={sub.amount_cents}
						dueDate={sub.due_date}
						endDate={sub.end_date}
						category={sub.category_id}
						bank={sub.bank_account_id}
						user={sub.user_id}
					 />
				})

			}
			return (
				<div className="container">{subs}</div>
				)
		}
}
function mapStateToProps(state){
	console.log(state.subscriptions.subscriptions)
	return({subscriptions: state.subscriptions})
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchSubscriptions}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionList);
